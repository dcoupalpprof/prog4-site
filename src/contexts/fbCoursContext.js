import React, {useState, useEffect} from 'react';
import {doc, onSnapshot, firestore} from "../services/firebase";

const CoursContext = React.createContext();

const FBCoursProvider = ({children}) => {

    const [lastUnlocked, setLastUnlocked] = useState(null);


    useEffect(() => {
        onSnapshot(doc(firestore, 'cours', '--info'), doc => {
            setLastUnlocked(doc.data().lastUnlocked);
        });
    }, []);

    return (
        <CoursContext.Provider value={{lastUnlocked, loading: lastUnlocked === null}}>
            {children}
        </CoursContext.Provider>
    );
};

const useFBCoursProvider = () => {
    const context = React.useContext(CoursContext);
    if (context === undefined) {
        throw new Error('useFBCoursProvider doit être wrapped dans FBCoursProvider');
    }
    return context;
};

export {FBCoursProvider, useFBCoursProvider};
