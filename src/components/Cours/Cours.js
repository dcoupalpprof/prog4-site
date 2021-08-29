import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import classes from './Cours.module.css';
import {Header} from '../shared';
import {Week1, Week2, Week3, Week4, Week5, Week6, WeekLoader} from "./weeks";
import {Helmet} from 'react-helmet';
import {useLastCours, useScrollToTop} from "../../hooks";

const Cours = () => {

    useScrollToTop();

    const {noLastCours, coursTitles} = useLastCours();

    const params = useParams();
    const history = useHistory();

    const [currentCoursNo, setCurrentCoursNo] = useState(process.env.REACT_APP_DEFAULT_COURS_NO);

    useEffect(() => {
        if (noLastCours != null) {
            const activeCoursNo = redirectToRightClass();
            setCurrentCoursNo(activeCoursNo);
        }
    }, [params.coursNo, noLastCours]);

    const redirectToRightClass = () => {
        const activeCoursNo = parseInt(params.coursNo) || (process.env.REACT_APP_DEFAULT_COURS_NO);

        // s'assure que le cours est débloqué
        const realCoursNo = Math.max((process.env.REACT_APP_DEFAULT_COURS_NO - 1), Math.min(noLastCours, activeCoursNo));
        if (activeCoursNo === (process.env.REACT_APP_DEFAULT_COURS_NO - 1)) {
            history.push('/cours/' + noLastCours);
            return;
        } else if (realCoursNo !== activeCoursNo) {
            // redirige au cours max débloqué
            history.push('/cours/' + realCoursNo);
            return;
        }

        return realCoursNo;
    };

    const getWeekNo = () => {
        let weekTag = null;

        switch(currentCoursNo){
            case 1:
                weekTag = <Week1/>;
            case 2:
                weekTag  = <Week2/>;
                break;
            case 3:
                weekTag  = <Week3/>;
                break;
            case 4:
                weekTag  = <Week4/>;
                break;
            case 5:
                weekTag  = <Week5/>;
                break;
            case 6:
                weekTag  = <Week6/>;
                break;
            default:
                weekTag = <Week1/>;
        }

        return weekTag;
    };

    const getCoursTitle = () => {
        return coursTitles[currentCoursNo - 1];
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>{`${process.env.REACT_APP_SITE_TITLE} - Notes de cours`}</title>
            </Helmet>
            <main className={classes.Cours}>
                <Header history={history} isSmall={true} siteTitle={process.env.REACT_APP_SITE_TITLE} title="Notes de cours"/>
                {noLastCours ?
                    (
                        <>
                            <h2 className={classes.CoursTitle}>Cours {currentCoursNo}: {getCoursTitle()}</h2>
                            {getWeekNo()}
                        </>
                    )
                    :
                    (
                        <div className={classes.CoursLoader}>
                            <h2>Chargement</h2>
                            <WeekLoader/>
                        </div>
                    )
                }
            </main>
        </React.Fragment>
    );
};

export default Cours;
