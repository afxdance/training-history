import React, {useState} from 'react';
import './App.css';
import {SpotlightComponent} from "./components/SpotlightComponent"
import { PersonComponent } from "./components/PersonComponent";
import { BoardComponent } from "./components/BoardComponent";
import { TeamsComponent } from "./components/TeamsComponent";

function App() {
  const [spotlightID, changeSpotlight] = useState("recv9osfao9kZT21F")
  return (
    <div className="App">
      <SpotlightComponent changeSpotlight = {changeSpotlight} personID={spotlightID}/>
      <BoardComponent changeSpotlight = {changeSpotlight}/>
      <TeamsComponent changeSpotlight = {changeSpotlight}/>
    </div>
  );
}

export default App;
