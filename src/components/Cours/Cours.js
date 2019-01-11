import React from 'react';
import classes from './Cours.module.css';
import {Header} from '../shared';
import Week1 from './weeks/Week1';


class Cours extends React.Component{

    state = {
        activeCoursNo: 1
    };

    componentDidMount() {
        const activeCoursNo = parseInt(this.props.match.params.coursNo) || 1;
        this.setState({activeCoursNo})
    }

    getWeekNo() {
        let weekTag = null;

        switch(this.state.activeCoursNo){
            case 1:
                weekTag  = <Week1/>;
                break;
            default:
                weekTag = <Week1/>;
        }

        return weekTag;
    }

    render() {
        return (
            <main className={classes.Cours}>
                <Header history={this.props.history} isSmall={true} siteTitle="Programmation multimédia 4" title="Notes de cours"/>
                {this.getWeekNo()}
                {/*<section>

                </section>*/ }
            </main>
        );
    }
}

export default Cours;