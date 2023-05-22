import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {GlobalStatesProvider} from "./context/GlobalStateContext";
import AudioContextProvider from "./context/AudioContext";
import Homepage from "./Homepage";
import TopAppBar from "./TopAppBar";
import Basics from "./lessons/Basics/Basics"
import HealthCare from "./lessons/HealthCare/HealthCare"
import Education from "./lessons/Education/Education"
import Jobs from "./lessons/Jobs/Jobs";
import Id from "./lessons/Id/Id"
import HelpPage from "./HelpPage";
import {EnglishAudioContextProvider} from "./context/PlayEnglishContext";

export const LockedStatusObjContext = createContext(null);

function App() {
    const [lockedStatusJsonObj, setLockedStatusJsonObj] = useState(
        {
            Basics: false,
            Health: true,
            Education: true,
            Identification: true,
            Jobs: true
        })
    const userScore = {
        BasicsScore: 0,
        HealthScore: 0,
        EducationScore: 0,
        IDScore: 0,
        JobsScore: 0
    }
    useEffect(() => {
        if (!localStorage.getItem('lockedStatusData')) {
            console.log("The locked status" + lockedStatusJsonObj)
            localStorage.setItem('lockedStatusData', JSON.stringify(lockedStatusJsonObj));
            console.log('this part of the code is reached')
        }
        if (!localStorage.getItem('userScores')) {
            localStorage.setItem('userScores', JSON.stringify(userScore));
        }
        setLockedStatusJsonObj(JSON.parse(localStorage.getItem('lockedStatusData')))
        console.log('locked status obj' + JSON.stringify(lockedStatusJsonObj))
    }, []);

    useEffect(() => {
        console.log('The new json object is: ' + JSON.stringify(lockedStatusJsonObj))
    }, [lockedStatusJsonObj])


    return (
        <GlobalStatesProvider>
            <EnglishAudioContextProvider>
            <AudioContextProvider>
                <LockedStatusContextProvider lockedStatusJsonObj={lockedStatusJsonObj} setLockedStatusJsonObj={setLockedStatusJsonObj}>
                    <div className="App">
                        <BrowserRouter>
                            <TopAppBar/>
                            <Routes>
                                <Route path="/" element={<Homepage/>}/>
                                <Route path="/Help" element={<HelpPage/>}/>
                                <Route path="/Basics" element={<Basics/>}/>
                                <Route path="/Health" element={lockedStatusJsonObj && lockedStatusJsonObj.Health === false ? (<HealthCare/>) : (<Navigate to="/"/>)}/>
                                <Route path="/Education" element={lockedStatusJsonObj && lockedStatusJsonObj.Education === false ? (<Education/>) : (<Navigate to="/"/>)}/>
                                <Route path="/Jobs" element={lockedStatusJsonObj && lockedStatusJsonObj.Jobs === false ? (<Jobs/>) : (<Navigate to="/"/>)}/>
                                <Route path="/Id" element={lockedStatusJsonObj && lockedStatusJsonObj.Identification === false ? (<Id/>) : (<Navigate to="/"/>)}/>

                            </Routes>
                        </BrowserRouter>
                    </div>
                </LockedStatusContextProvider>
            </AudioContextProvider>
            </EnglishAudioContextProvider>
        </GlobalStatesProvider>
    );
}


function LockedStatusContextProvider({children, lockedStatusJsonObj, setLockedStatusJsonObj}) {
    return (
        <LockedStatusObjContext.Provider value={{lockedStatusJsonObj, setLockedStatusJsonObj}}>
            {children}
        </LockedStatusObjContext.Provider>

    )

}

export default App;




