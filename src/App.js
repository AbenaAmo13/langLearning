import React from 'react';
import logo from './logo.svg';
import img from './img.png'
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LanguageContextProvider from "./context/LanguageContext";
import {EnglishAudioContextProvider} from "./context/PlayEnglishContext";
import AudioContextProvider from "./context/AudioContext";
import Homepage from "./Homepage";
import Introduction from "./Introduction";
import TopAppBar from "./TopAppBar";
import Basics from "./lessons/Basics/Basics"

function App() {

  return (

            <EnglishAudioContextProvider>
                <AudioContextProvider>
                    <div className="App">
                        <BrowserRouter>
                            <TopAppBar/>
                            <Routes>
                                <Route path="/" element={<Homepage />}/>
                                <Route path="/Introduction" element={<Introduction />}/>
                                <Route path="/Basics" element={<Basics/>}/>
                            </Routes>
                        </BrowserRouter>
                    </div>
                </AudioContextProvider>
            </EnglishAudioContextProvider>
  );
}

export default App;
