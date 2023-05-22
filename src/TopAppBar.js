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

    const handleAudioCheck=()=>{
        if(isPlaying){
            stopAudio()
        }

    }

    return(
        <div className='topAppBar'>
            <div className="title_and_logo">
                <img src={imagePath} alt="logo" id="logo"/>
                <h1 id="app-bar-title"> Government Says</h1>
            </div>
            <div className="appbar-icons">
                <Link to="/Help" className="app_bar_routes">
                    <button className="icon-buttons top_app_bar" onClick={()=>handleAudioCheck()}>
                        Help
                        <i className="material-icons" alt="help icon">help</i>
                    </button>
                </Link>
                <Link to="/" className="app_bar_routes">
                    <button className="icon-buttons top_app_bar" onClick={()=>handleAudioCheck()}>
                        Home
                        <i className="material-icons" alt="home icon">home</i>
                    </button>
                </Link>

                <button className="icon-buttons top_app_bar" onClick={()=>playAudio(new Audio(testAudio))}>
                    🇬🇭Welcome
                    <i className="material-icons" alt="volume icon">volume_up</i>
                </button>
                <InstallButton/>
              {/*  <select id="languageSelector" value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
                    <option value="Twi" id="twiflag">🇬🇭Twi</option>
                    <option value="English" id="engishflag">🇬🇧 English</option>
                </select>*/}
                </div>
            </div>
    );
}

export default TopAppBar;

const InstallButton = () => {
    const { isPlaying, playAudio, stopAudio } = useContext(AudioContext);
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    useEffect(() => {
        // Listen for the 'beforeinstallprompt' event
        const handleBeforeInstallPrompt = (event) => {
            event.preventDefault();
            setDeferredPrompt(event);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    //This is to install the application
    const handleInstallApp = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User installed the app');
                }
                setDeferredPrompt(null);
            });
        }

        if(isPlaying){
            stopAudio()
        }
    };

    return (
        <button onClick={handleInstallApp} className="download_button">
            Download
            <i className="material-icons" alt="download icon">download</i>
        </button>
    );
};
