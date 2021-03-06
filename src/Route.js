import React from 'react';
import NavBar from './Components/NavBar'; 
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import Home from './Components/Home';
  import About from './Components/About';
  import Product from './Components/Product';
  import Productitem from './Components/Productitem';

function RouteConfig() {
  return (
    <div>
<Router>
<NavBar/>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route exact path="/Product" component={Product}/>
        <Route path="/Product/:id" component={Productitem}/>
        <Route path="*" component={() => <h2>404 Not Found</h2> }/>

    </Switch>
</Router>     
    </div>
  );
}

export default RouteConfig;
