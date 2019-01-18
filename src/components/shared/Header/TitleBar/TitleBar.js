import React from "react";
import classes from "./TitleBar.module.scss";
import PropTypes from "prop-types";
import { Menubar } from "../../";
import "../../../../styles/prism.css";
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import withLastCours from '../../../hoc/withLastCours';

class TitleBar extends React.Component {

    constructor(props) {
        super(props);
        const coursItems = this.createCoursItems();
        let navCoursItem = {label: 'Notes de cours'};
        navCoursItem = coursItems.length <= 1 ? {...navCoursItem, url: '/cours', command: (e) => {this.redirectWithRouter(e)}} : {...navCoursItem, items: coursItems};

        this.navItems = [
            navCoursItem,
            { label: "Travaux", url: '/travaux', command: (e) => {this.redirectWithRouter(e)}  },
            { label: "Références", url: '/references', command: (e) => {this.redirectWithRouter(e)}  }
        ];
    }

   createCoursItems = () => {
       const cours = [];
       for(let i = 0; i < this.props.noLastCours; i++){
           cours.push({label: `Cours ${i+1}`, command: (e) => {this.redirectWithRouter(e)}, url: `/cours/${i+1}`});
       }
       return cours;
   };

   redirectWithRouter = (e) => {
        e.originalEvent.preventDefault();
        this.props.history.push(e.item.url);
    };

  render() {
    return (
      <div className={classes.TitleBar}>
        <h2><Link to="/" style={{color: '#000'}} href="/">{this.props.title}</Link></h2>
        <Menubar style={{ color: "#000" }} model={this.navItems} />
      </div>
    );
  }
}

TitleBar.defaultProps = {
  title: ""
};
TitleBar.propTypes = {
  title: PropTypes.string
};

export default withLastCours(withRouter(TitleBar));
