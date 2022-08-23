import React from "react";
import classes from "./TitleBar.module.scss";
import PropTypes from "prop-types";
import { Menubar } from "../../";
import "../../../../styles/prism.css";
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {useLastCours} from "../../../../hooks";
import {config} from "../../../../config";

const TitleBar = ({title}) => {

    const {noLastCours} = useLastCours();

    const createCoursItems = () => {
        let exclusion = [];
        if(config.navCoursExclus != null) {
            exclusion = [...exclusion, ...config.navCoursExclus.split(' ').map(c => +c)];
        }

        const cours = [];
        for(let i = (config.defaultCours - 1); i < noLastCours; i++){
            if (exclusion.indexOf(i + 1) === -1){
                cours.push({label: `Cours ${i + 1}`, command: (e) => {redirectWithRouter(e)}, url: `/cours/${i + 1}`});
            }
        }
        return cours;
    };


    const history = useHistory();
    const coursItems = createCoursItems();
    let navCoursItem = {label: 'Notes de cours'};
    navCoursItem = coursItems.length <= 1 ? {...navCoursItem, url: '/cours', command: (e) => {redirectWithRouter(e)}} : {...navCoursItem, items: coursItems};

    const navItems = [
        navCoursItem,
        { label: "Travaux", url: '/travaux', command: (e) => {redirectWithRouter(e)}  },
        { label: "Références", url: '/references', command: (e) => {redirectWithRouter(e)}  }
    ];

   const redirectWithRouter = (e) => {
        e.originalEvent.preventDefault();
        history.push(e.item.url);
    };

    return (
      <div className={classes.TitleBar}>
        <h2><Link to="/" style={{color: '#000'}} href="/">{title}</Link></h2>
        <Menubar style={{ color: "#000" }} model={navItems} />
      </div>
    );
}

TitleBar.defaultProps = {
  title: ""
};
TitleBar.propTypes = {
  title: PropTypes.string
};

export default TitleBar;
