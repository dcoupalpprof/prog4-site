import React from 'react';
import classes from './Footer.module.css';


const Footer = () => (
    <footer className={classes.Footer}>
        <p>© {new Date().getFullYear()} - Web 5: Applicatif - Techniques d'intégration multimédia - <br/> Dominique Coupal</p>
    </footer>
);

export default Footer;
