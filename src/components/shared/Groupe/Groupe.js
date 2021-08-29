import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import Snippet from '../Snippet/Snippet';
import classes from './Groupe.module.css';
import {Panel} from '../';
import {useLocation} from 'react-router-dom';


const checkSnippet = ({language, code, children}) => {
    return language && code ? (
        <Snippet language={language} code={code}/>
    ) : children;
};

const Groupe = ({title, code, children, toggleable = false, hidden = false, language = 'javascript', empty = false}) => {

    let panelId;
    let groupeRef;
    let lSKeyName = 'p-collapsed';

    const location = useLocation();

    const [collapsed, setCollapsed] = useState(hidden);

    useEffect(() => {
        if (empty) {
            return;
        }
        initCollapsedState();
    }, []);

    const initCollapsedState = () => {
        if (toggleable) {
            panelId = getGroupeId();
            const lsState = getCollapseState();
            const savedState = typeof lsState === 'undefined' ? hidden : lsState !== 0;
            if (collapsed !== savedState) {
                setCollapsed(savedState);
            }
        }
    };

    const setNewCollapsedState = (newVal) => {
        const states = getLsObj();
        setCollapsed(newVal);
        setLSPanelRef(states, newVal);
    };

    const getCollapseState = () => {
        const panelRefs = getLsObj();
        if (!panelRefs) {
            setLSPanelRef();
        } else {
            if (typeof panelRefs[panelId] === 'undefined') {
                setLSPanelRef(panelRefs);
            } else {
                return panelRefs[panelId];
            }
        }
    };

    const getLsObj = () => {
        const panelRefs = window.localStorage[lSKeyName];
        return typeof panelRefs === 'undefined' ? null : JSON.parse(panelRefs);
    };

    const setLSPanelRef = (obj, newVal) => {
        const collapsedVal = typeof newVal === 'undefined' ? collapsed : newVal;
        if (typeof obj === 'undefined') {
            window.localStorage.setItem(lSKeyName, JSON.stringify({[panelId] : collapsed ? 1 : 0}));
        } else {
            window.localStorage.setItem(lSKeyName, JSON.stringify({...obj, [panelId] : collapsedVal ? 1 : 0}));
        }
    };

    const getGroupeId = () => {
        const no = [...document.querySelectorAll(`.${classes.Groupe}`)].indexOf(groupeRef);
        return location.pathname.replace(/\//g, '') + '_' + no;
    };

    const togglePanel = e => {
        const newCollapsedVal = !collapsed;
        setNewCollapsedState(newCollapsedVal);
    };

    return (
        <div className={classes.Groupe} ref={el => groupeRef = el}>
            {empty ? (
                <div className={classes.empty}>
                    <Panel header="ff" toggleable={false} collapsed={false}>
                    </Panel>
                </div>
            ) : (
                <Panel header={title} toggleable={false} collapsed={collapsed} onToggle={togglePanel}> {/* toggleable={toggledable*/}
                    {checkSnippet({code, language, children})}
                </Panel>
            )}
        </div>
    );
};


Groupe.defaultProps = {
    title: '',
    toggleable: false,
    hidden: false,
    language:null,
    code: null
};

Groupe.propTypes = {
    title: PropTypes.string,
    toggleable: PropTypes.bool,
    hidden: PropTypes.bool,
    language: PropTypes.oneOf(['jsx', 'javascript','css']),
    code: PropTypes.string
};

export default Groupe;
