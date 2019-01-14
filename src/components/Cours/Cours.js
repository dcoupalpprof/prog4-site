import React from 'react';
import classes from './Cours.module.css';
import {Header} from '../shared';
import Week1 from './weeks/Week1';


class Cours extends React.Component{

    randomStrings = [
        '8ASCVbR45s',
        'vaOKbVrHhE',
        'FHzTc8IAAN',
        '6zuwtYLY32',
        'jxOzjbXpZo',
        'a6gTIY8tCa'
    ];

    state = {
        activeCoursNo: 1
    };

    componentDidMount() {
        const activeCoursNo = this.redirectToRightClass();
        this.setState({activeCoursNo});
    }

    redirectToRightClass() {
        const noLastCours = this.randomStrings.indexOf(process.env.REACT_APP_LAST_COURSE) + 1;
        const activeCoursNo = parseInt(this.props.match.params.coursNo) || 0;
        const realCoursNo = Math.min(noLastCours, activeCoursNo);

        if (activeCoursNo === 0) {
            this.props.history.push('/cours/' + noLastCours);
            return;
        } else if (realCoursNo !== activeCoursNo) {
            this.props.history.push('/cours/'+realCoursNo);
            return;
        }

        return realCoursNo;
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
            </main>
        );
    }
}

export default Cours;