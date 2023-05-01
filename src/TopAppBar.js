import {useContext, useEffect, useState} from "react";
import {AudioContext} from "./context/AudioContext";
import {EnglishAudioContext} from "./context/PlayEnglishContext";
import {LanguageContext} from "./context/LanguageContext";
import appBarTestAudio from "./audios/testing.mp3"
import {Link} from "react-router-dom";

function TopAppBar(){
    //const imagePath = `${process.env.PUBLIC_URL}/empower-us-192.webp`;
    const imagePath = process.env.PUBLIC_URL + '/empower-us-192.webp';
    console.log(imagePath)
    const { isPlaying, playAudio, stopAudio } = useContext(AudioContext);
    const testAudio = appBarTestAudio;

    return(
        <div className='topAppBar'>
            <div className="title_and_logo">
                <img src={imagePath} alt="logo" id="logo"/>
                <h1 id="app-bar-title"> Government Says</h1>
            </div>
            <div className="appbar-icons">
                <Link to="/Help">
                    <button className="icon-buttons">
                        <i className="material-icons" alt="help icon">help</i>
                    </button>
                </Link>
                <Link to="/">
                    <button className="icon-buttons">
                        <i className="material-icons" alt="home icon">home</i>
                    </button>
                </Link>

                <button className="icon-buttons" onClick={()=>playAudio(new Audio(testAudio))}>
                    <i className="material-icons" alt="volume icon">volume_up</i>
                </button>
              {/*  <select id="languageSelector" value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
                    <option value="Twi" id="twiflag">🇬🇭Twi</option>
                    <option value="English" id="engishflag">🇬🇧 English</option>
                </select>*/}
                </div>
            </div>
    );
}

export default TopAppBar;