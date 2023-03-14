import React from 'react';
import logo from './logo.svg';
import img from './img.png'
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LanguageContextProvider from "./LanguageContext";
import {EnglishAudioContextProvider} from "./PlayEnglishContext";
import AudioContextProvider from "./AudioContext";
import Homepage from "./Homepage";
import Introduction from "./Introduction";

function App() {
  return (

        <LanguageContextProvider>
            <EnglishAudioContextProvider>
                <AudioContextProvider>
                    <div className="App">
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Homepage />}/>
                                <Route path="/Introduction" element={<Introduction />}/>
                            </Routes>
                        </BrowserRouter>
                    </div>
                </AudioContextProvider>
            </EnglishAudioContextProvider>
        </LanguageContextProvider>
  );
}

export default App;
