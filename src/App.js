import React from 'react';
import './services/firebase';
import classes from './App.module.scss';
import {Home, Cours, Travaux, References} from "./components";
import {Footer} from "./components/shared";
import {Route, Switch} from 'react-router-dom';
import {FBCoursProvider} from "./contexts";

const App = () => {
    return (
      <div className={classes.App}>
          <FBCoursProvider>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/cours" exact component={Cours}/>
                <Route path="/cours/:coursNo" exact component={Cours}/>
                <Route path="/travaux" exact component={Travaux}/>
                <Route path="/references" exact component={References}/>
                <Route component={Home}/> {/* Catch all */}
              </Switch>
              <Footer/>
          </FBCoursProvider>
      </div>
    );
};

export default App;
