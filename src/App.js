import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AudioContextProvider from "./context/AudioContext";
import Homepage from "./Homepage";
import TopAppBar from "./TopAppBar";
import Basics from "./lessons/Basics/Basics"
import  {GlobalStatesProvider} from "./context/GlobalStateContext";

function App() {

  return (
            <GlobalStatesProvider>
                <AudioContextProvider>
                    <div className="App">
                        <BrowserRouter>
                            <TopAppBar/>
                            <Routes>
                                <Route path="/" element={<Homepage />}/>
                                <Route path="/Basics" element={<Basics/>}/>
                            </Routes>
                        </BrowserRouter>
                    </div>
                </AudioContextProvider>
            </GlobalStatesProvider>
  );
}

export default App;
