import React from 'react';
import classes from './Cours.module.css';
import {Header} from '../shared';
import {Week1, Week2} from "./weeks";
import withLastCours from '../hoc/withLastCours';
import withScrollToTop from '../hoc/withScrollToTop';
import {Helmet} from 'react-helmet';

class Cours extends React.PureComponent{

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

    componentDidUpdate() {
        const activeCoursNo = this.redirectToRightClass();
        this.setState({activeCoursNo});
    }

    redirectToRightClass() {
        const activeCoursNo = parseInt(this.props.match.params.coursNo) || 0;
        const realCoursNo = Math.min(this.props.noLastCours, activeCoursNo);

        if (activeCoursNo === 0) {
            this.props.history.push('/cours/' + this.props.noLastCours);
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
            case 2:
                weekTag  = <Week2/>;
                break;
            default:
                weekTag = <Week1/>;
        }

        return weekTag;
    }

    getCoursTitle() {
        return this.props.coursTitles[this.state.activeCoursNo - 1];
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{`Programmation multimédia 4 - Notes de cours`}</title>
                </Helmet>
                <main className={classes.Cours}>
                    <Header history={this.props.history} isSmall={true} siteTitle="Programmation multimédia 4" title="Notes de cours"/>
                    <h2 className={classes.CoursTitle}>Cours {this.state.activeCoursNo}: {this.getCoursTitle()}</h2>
                    {this.getWeekNo()}
                </main>
            </React.Fragment>
        );
    }
}

export default withScrollToTop(withLastCours(Cours));