import React from 'react';
import Features from './Features/Features';
import {Header} from '../shared';
import {Helmet} from 'react-helmet';
import withScrollToTop from '../hoc/withScrollToTop';

class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{`Programmation multimédia 4`}</title>
                </Helmet>
                <main>
                    <Header isSmall={false} siteTitle="Programmation multimédia 4" title="Programmation multimédia 4"/>
                    <Features/>
                </main>
            </React.Fragment>
        );
    }
}

export default withScrollToTop(Home);