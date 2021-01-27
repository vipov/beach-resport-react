import React from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Context from './context';
import NavbarFunc from './components/NavbarFunc';
import FeaturedRooms from './components/FeaturedRooms';


function App() {
  return (
    <>
    <NavbarFunc />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms/" component={Rooms}/>
      <Route exact path="/rooms/:slug" component={SingleRoom}/>
      <Route component={Error} />
    </Switch>
    <Context/> 
    {/* Context to wlasciwie jest FeaturedRooms, tylko ze sciagnietymi danymi */}
    </>
  );
}

export default App;

// https://youtu.be/l0JbuMVXaTs?t=5969 poczatek tego kontextu dziwnego
// https://youtu.be/l0JbuMVXaTs?t=6341