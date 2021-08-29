import React from 'react';
import Features from './Features/Features';
import {Header} from '../shared';
import {Helmet} from 'react-helmet';
import {useScrollToTop} from "../../hooks";
//import withScrollToTop from '../hoc/withScrollToTop';

const Home = () => {

    useScrollToTop();

    return (
        <React.Fragment>
            <Helmet>
                <title>{process.env.REACT_APP_SITE_TITLE}</title>
            </Helmet>
            <main>
                <Header isSmall={false} siteTitle={process.env.REACT_APP_SITE_TITLE} title={process.env.REACT_APP_SITE_TITLE}/>
                <Features/>
            </main>
        </React.Fragment>
    );
};

export default Home;
