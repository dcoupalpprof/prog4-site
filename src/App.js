import React, { Component } from 'react';
import classes from './App.module.scss';
import {Home, Cours, Travaux, References} from "./components";
import {Footer} from "./components/shared";
import {Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return (
          <div className={classes.App}>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/cours" exact component={Cours}/>
                <Route path="/cours/:coursNo" exact component={Cours}/>
                <Route path="/travaux" exact component={Travaux}/>
                <Route path="/references" exact component={References}/>
                <Route component={Home}></Route> {/* Catch all */}
              </Switch>
              <Footer/>
          </div>
        );
    }
}

export default App;
