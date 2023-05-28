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
import RewardsStore from "./reusable-components/RewardsStore";
import RewardsContextProvider from "./context/RewardsContext";
import AudioTEST from "./db";


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

    const userCoins= 0;
    const personalRewards= [];





    useEffect(() => {
        if (!localStorage.getItem('lockedStatusData')) {
            console.log("The locked status" + lockedStatusJsonObj)
            localStorage.setItem('lockedStatusData', JSON.stringify(lockedStatusJsonObj));
            console.log('this part of the code is reached')
        }
        if (!localStorage.getItem('userScores')) {
            localStorage.setItem('userScores', JSON.stringify(userScore));
        }

        if (!localStorage.getItem('userCoins')) {
            localStorage.setItem('userCoins', JSON.stringify(userCoins));
        }

        if (!localStorage.getItem('personalRewards')) {
            localStorage.setItem('personalRewards', JSON.stringify(personalRewards));
        }
        setLockedStatusJsonObj(JSON.parse(localStorage.getItem('lockedStatusData')))
        console.log('locked status obj' + JSON.stringify(lockedStatusJsonObj))
    }, []);

    useEffect(() => {
        console.log('The new json object is: ' + JSON.stringify(lockedStatusJsonObj))
    }, [lockedStatusJsonObj])


    return (
        <GlobalStatesProvider>
            <RewardsContextProvider>
            <AudioContextProvider>
                <LockedStatusContextProvider lockedStatusJsonObj={lockedStatusJsonObj} setLockedStatusJsonObj={setLockedStatusJsonObj}>
                    <div className="App">
                        <BrowserRouter>
                            <TopAppBar/>
                            <Routes>
                                <Route path="/" element={<Homepage/>}/>
                                <Route path="/Help" element={<HelpPage/>}/>
                                <Route path="/Basics" element={<Basics/>}/>
                                <Route path="/Health"
                                   element={lockedStatusJsonObj && lockedStatusJsonObj.Health === false ?
                                   (<HealthCare/>) : (<Navigate to="/"/>)}/>
                                <Route path="/Education"
                                   element={lockedStatusJsonObj && lockedStatusJsonObj.Education === false ?
                                   (<Education/>) : (<Navigate to="/"/>)}/>
                                <Route path="/Jobs"
                                       element={lockedStatusJsonObj && lockedStatusJsonObj.Jobs === false ?
                                           (<Jobs/>) : (<Navigate to="/"/>)}/>
                                <Route path="/Id"
                                       element={lockedStatusJsonObj && lockedStatusJsonObj.Identification === false ?
                                           (<Id/>) : (<Navigate to="/"/>)}/>
                                <Route path="/RewardStore" element={<RewardsStore/>}/>
                                <Route path="/AudioTest" element={<AudioTEST/>}/>
                            </Routes>
                        </BrowserRouter>
                    </div>
                </LockedStatusContextProvider>
            </AudioContextProvider>
            </RewardsContextProvider>
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




