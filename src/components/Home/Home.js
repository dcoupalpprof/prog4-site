import React from 'react';
import Features from './Features/Features';
import {Header} from '../shared';

class Home extends React.Component {

    render() {
        return (
            <section>
                <Header isSmall={false} siteTitle="Programmation multimédia 4" title="Programmation multimédia 4"/>
                <Features/>
            </section>
        );
    }
}

export default Home;