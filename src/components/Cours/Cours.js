import React from 'react';
import classes from './Cours.module.css';
import {Header} from '../shared';
import Snippet from './Snippet/Snippet';

class Cours extends React.Component{
    render() {
        return (
            <main className={classes.Cours}>
                <Header isSmall={true} siteTitle="Programmation multimédia 4" title="Notes de cours"/>
                <section>
                    <Snippet toggleable={false} hidden={false} title="Un titre" language="jsx" code={`
                        //Test
                        import React from 'react';
                        const Module = (props) => {
                            return (
                                <div>Allo</div>
                            );
                        };
                   `}/>
                </section>
            </main>
        );
    }
}

export default Cours;