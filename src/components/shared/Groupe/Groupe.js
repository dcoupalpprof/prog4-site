import React from 'react';
import PropTypes from "prop-types";
import Snippet from '../Snippet/Snippet';
import classes from './Groupe.module.css';
import {Panel} from '../';
import {withRouter} from 'react-router-dom';

const checkSnippet = (props) => {
    return props.language && props.code ? (
        <Snippet language={props.language} code={props.code}/>
    ) : props.children;
};

class Groupe extends React.Component{

    panelId;
    groupeRef;
    lSKeyName = 'p-collapsed';

    state = {
        collapsed: this.props.hidden
    };

    componentDidMount() {
        this.initCollapsedState();
    }

    initCollapsedState() {
        if (this.props.toggleable) {
            this.panelId = this.getGroupeId();
            const lsState = this.getCollapseState();
            const savedState = typeof lsState === 'undefined' ? this.props.hidden : lsState === 0 ?  false: true;
            if (this.state.collapsed !== savedState) {
                this.setState({collapsed: savedState});
            }
        }
    }

    setNewCollapsedState(newVal) {
        const states = this.getLsObj();
        this.setState({collapsed: newVal});
        this.setLSPanelRef(states, newVal);
    }

    getCollapseState() {
        const panelRefs = this.getLsObj();
        if (!panelRefs) {
            this.setLSPanelRef();
        } else {
            if (typeof panelRefs[this.panelId] === 'undefined') {
                this.setLSPanelRef(panelRefs);
            } else {
                return panelRefs[this.panelId];
            }
        }
    }

    getLsObj() {
        const panelRefs = window.localStorage[this.lSKeyName];
        return typeof panelRefs === 'undefined' ? null : JSON.parse(panelRefs);
    }

    setLSPanelRef(obj, newVal) {
        const collapsedVal = typeof newVal === 'undefined' ? this.state.collapsed : newVal;
        if (typeof obj === 'undefined') {
            window.localStorage.setItem(this.lSKeyName, JSON.stringify({[this.panelId] : this.state.collapsed ? 1 : 0}));
        } else {
            window.localStorage.setItem(this.lSKeyName, JSON.stringify({...obj, [this.panelId] : collapsedVal ? 1 : 0}));
        }

    }

    getGroupeId() {
        const no = [...document.querySelectorAll(`.${classes.Groupe}`)].indexOf(this.groupeRef);
        return this.props.location.pathname.replace(/\//g, '') + '_' + no;
    }

    togglePanel = e => {
        const newCollapsedVal = !this.state.collapsed;
        this.setNewCollapsedState(newCollapsedVal);
    };

    render() {
        return (
            <div className={classes.Groupe} ref={el => this.groupeRef = el}>
                <Panel header={this.props.title} toggleable={this.props.toggleable} collapsed={this.state.collapsed} onToggle={this.togglePanel}>
                    {checkSnippet(this.props)}
                </Panel>
            </div>
        );
    }
}


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

export default withRouter(Groupe);