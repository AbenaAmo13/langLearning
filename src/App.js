import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AudioContextProvider from "./context/AudioContext";
import Homepage from "./Homepage";
import TopAppBar from "./TopAppBar";
import Basics from "./lessons/Basics/Basics"
import HealthCare from "./lessons/HealthCare/HealthCare"
import Education from "./lessons/Education/Education"

import  {GlobalStatesProvider} from "./context/GlobalStateContext";

function App() {
    const lockedStatusJsonObject =  JSON.parse(localStorage.getItem('lockedStatusData'))
    console.log(lockedStatusJsonObject)

  return (
            <GlobalStatesProvider>
                <AudioContextProvider>
                    <div className="App">
                        <BrowserRouter>
                            <TopAppBar/>
                            <Routes>
                                <Route path="/" element={<Homepage />}/>
                                <Route
                                    path="/Basics"
                                    element={<Basics/>}/>
                                <Route path="/Health"
                                    element={lockedStatusJsonObject.Health=== false ? <HealthCare/> :<Navigate to="/"/>}
                                />
                                <Route path="/Education"
                                       element={lockedStatusJsonObject.Education=== false? <Education/>: <Navigate to="/"/>}
                                />
                            </Routes>
                        </BrowserRouter>
                    </div>
                </AudioContextProvider>
            </GlobalStatesProvider>
  );
}

export default App;
