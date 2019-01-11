import React from 'react';
import Snippet from '../Snippet/Snippet';

const Week1 = (props) => (
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
    </section>);

export default Week1;