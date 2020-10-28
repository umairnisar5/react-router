import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from './Components/Home';
  import About from './Components/About';
  import Product from './Components/Product';
  import Productitem from './Components/Productitem';

function RouteConfig() {
  return (
    <div>
<Router>
    <Switch>
        <Route path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Product" component={Product}/>
        <Route path="/Product/:id" component={Productitem}/>


    </Switch>
</Router>     
    </div>
  );
}

export default RouteConfig;
