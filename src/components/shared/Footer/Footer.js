import React from 'react';
import classes from './Footer.module.css';


const Footer = (props) => (
    <footer className={classes.Footer}>
        <p>© {new Date().getFullYear()} - Programmation multimédia 4 - Techniques d'intégration multimédia - <br/> Dominique Coupal</p>
    </footer>
);

export default Footer;
