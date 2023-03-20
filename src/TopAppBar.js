import {useContext, useEffect, useState} from "react";
import {AudioContext} from "./AudioContext";
import {EnglishAudioContext} from "./PlayEnglishContext";
import {LanguageContext} from "./LanguageContext";
import appBarTestAudio from "./audios/testing.mp3"
import {Link} from "react-router-dom";

function TopAppBar(){
    const { isPlaying, playAudio, stopAudio } = useContext(AudioContext);
    const {speakEnglishWords} = useContext(EnglishAudioContext);
    const {language, updateLanguage} = useContext(LanguageContext)
    const testAudio = appBarTestAudio;
    const English = "English";
    const Twi = "Twi";
    //Function to change the appBar title on the project
    function handleLanguageChange(language) {
        let newLanguage = language.toLowerCase();
        console.log(newLanguage)
        updateLanguage(language);
        speakEnglishWords(newLanguage);
    }


    return(
        <div className='topAppBar'>
            <div>
                {language === English ? "Government Says" : "Aban Ka sɛ"}
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

                <button className="icon-buttons" onClick={()=>playAudio(testAudio)}>
                    <i className="material-icons" alt="volume icon">volume_up</i>
                </button>
                <select id="languageSelector" value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
                    <option value="Twi" id="twiflag">🇬🇭Twi</option>
                    <option value="English" id="engishflag">🇬🇧 English</option>
                </select>
                </div>
            </div>
    );
}

export default TopAppBar;