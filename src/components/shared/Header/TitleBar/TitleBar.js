import React from "react";
import classes from "./TitleBar.module.scss";
import PropTypes from "prop-types";
import { Menubar } from "../../";
import "../../../../styles/prism.css";
import {Link} from 'react-router-dom';
/*
*  icon: 'pi-file' },
      { key: 2, name: "Travaux", link: "/travaux", info: "Info about", icon: 'pi-inbox' },
      { key: 3, name: "Références", link: "/references", info: "Info about", icon: 'pi-info-circle' }
* */

class TitleBar extends React.Component {

   navItems = [
    { label: "Notes de cours", url: '/cours', className: 'allo' },
    { label: "Travaux", url: '/travaux', className: 'allo' },
    { label: "Références", url: '/references', className: 'allo' }
  ];

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

export default TitleBar;
