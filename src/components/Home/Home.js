import React from 'react';
import Features from './Features/Features';
import {Header} from '../shared';
import {Helmet} from 'react-helmet';
import {useScrollToTop} from "../../hooks";
import {config} from "../../config";
//import withScrollToTop from '../hoc/withScrollToTop';

const Home = () => {

    useScrollToTop();

    return (
        <React.Fragment>
            <Helmet>
                <title>{config.siteTitle}</title>
            </Helmet>
            <main>
                <Header isSmall={false} siteTitle={config.siteTitle} title={config.siteTitle}/>
                <Features/>
            </main>
        </React.Fragment>
    );
};

export default Home;
