import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home.jsx';
import About from '../About.jsx';
import Data from '../Data/Data.jsx';


const Router = () => {
    return ( 
        <Switch>
            <Route exact path ='/' component={Home}/>
            <Route exact path ='/about' component={About}/>
            <Route exact path ='/data' component={Data}/>
        </Switch>
    );
}
 
export default Router;