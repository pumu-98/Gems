import React from 'react';
 
import './App.css';

import Gems from "./pages/Gems";
 
import EmStore from "./pages/EmStore";
import RubyStore from "./pages/RubyStore";
import ZirStore from "./pages/ZirStore";
import Error from "./pages/Error";
import Emerald from "./pages/Emerald";
import BlueSapphire from "./pages/BlueSapphire";
import Ruby from "./pages/Ruby";
import YellowSapphire from "./pages/YellowSapphire";
import StarSapphire from "./pages/StarSapphire";
import PinkSapphire from "./pages/PinkSapphire";
import Zircon from "./pages/Zircon";
import CatsEye from "./pages/CatsEye";
import Tourmaline from "./pages/Tourmaline";
import Form from "./pages/Form";
import{ Route ,Switch }from "react-router-dom";
    
import Navbar from "./components/Navbar";

function App() {
  return (
  <>
  <Navbar></Navbar>
  <Switch>
  <Route exact path="/" component={Gems}/>
 
  <Route exact path="/Emerald/" component={Emerald}/>
  <Route exact path="/BlueSapphire/" component={BlueSapphire}/>
  <Route exact path="/Ruby/" component={Ruby}/>
  <Route exact path="/YellowSapphire/" component={YellowSapphire}/>
  <Route exact path="/StarSapphire/" component={StarSapphire}/>
  <Route exact path="/PinkSapphire/" component={PinkSapphire}/>
  <Route exact path="/Zircon/" component={Zircon}/>
  <Route exact path="/CatsEye/" component={CatsEye}/>
  <Route exact path="/Tourmaline/" component={Tourmaline}/>
  <Route exact path="/EmStore/" component={EmStore}/>
  <Route exact path="/RubyStore/" component={RubyStore}/>
  <Route exact path="/ZirStore/" component={ZirStore}/>
  <Route exact path="/Form/" component={Form}/>
  <Route component={Error}/>
  </Switch> 
  </>
  );
}

export default App;
