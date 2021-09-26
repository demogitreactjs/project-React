import React, { Component } from "react";
import { Route, Switch} from 'react-router-dom'

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navigation from "./Navigation";

class App extends Component {
  //constuctor
  constructor() {
    super();  
    
  } 
  render() {
    return (
      <div>
        <Navigation/>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />    
         
        </div>
        
      </div>
    );
  }
}
export default App;
