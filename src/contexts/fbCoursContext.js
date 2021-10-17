import React, {useState, useEffect} from 'react';
import {doc, onSnapshot, firestore} from "../services/firebase";

const CoursContext = React.createContext();

const FBCoursProvider = ({children}) => {

    const [lastUnlocked, setLastUnlocked] = useState(null);
    const [travaux, setTravaux] = useState(null);


    useEffect(() => {
        return onSnapshot(doc(firestore, 'cours', '--info'), doc => {
            const {lastUnlocked: vLastUnlocked, travaux: vTravaux} = doc.data();
            setLastUnlocked(vLastUnlocked);
            setTravaux(vTravaux);
        });
    }, []);

    return (
        <CoursContext.Provider value={{lastUnlocked, travaux, loading: lastUnlocked === null}}>
            {children}
        </CoursContext.Provider>
    );
};

const useFBCoursProvider = () => {
    const context = React.useContext(CoursContext);
    if (parseInt(process.env.REACT_APP_IS_OFFLINE) === 1) {
        return {
            lastUnlocked: process.env.REACT_APP_LAST_COURS,
            travaux: {
                devoir1: true,
                devoirC1: true
            },
            loading: false
        };
    }

    if (context === undefined) {
        throw new Error('useFBCoursProvider doit être wrapped dans FBCoursProvider');
    }
    return context;
};

export {FBCoursProvider, useFBCoursProvider};
