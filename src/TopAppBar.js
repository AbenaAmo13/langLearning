import {useContext, useEffect, useState} from "react";
import {AudioContext} from "./context/AudioContext";
import {EnglishAudioContext} from "./context/PlayEnglishContext";
import {LanguageContext} from "./context/LanguageContext";
import welcomeEnglishAudio from "./audios/topAppBarAudios/welcomeEnglishAudio.mp3"
import appBarTestAudio from "./audios/testing.mp3"
import {Link} from "react-router-dom";
import LessonAudioPlayer from "./reusable-components/LessonAudioPlayer";

function TopAppBar(){
    //const imagePath = `${process.env.PUBLIC_URL}/empower-us-192.webp`;
    const imagePath = process.env.PUBLIC_URL + '/empower-us-192.webp';
    const [clickedIcon, setClickedIcon] = useState('home');
    const [audioClicked, setHandleAudioClicked] = useState(null)
    const [audioIsPlayig, setAudioIsPlaying]= useState(false)
    console.log(imagePath)
    const { isPlaying, playAudio, stopAudio } = useContext(AudioContext);
    const testAudio = appBarTestAudio;

    const handleAudioAndIconCheck=(iconName)=>{
        if(isPlaying){
            stopAudio()
            setHandleAudioClicked(null)
        }
        setClickedIcon(iconName);
    }

    const audioTimer=(time)=>{
        //alert('audio_timer_clicked')
        const timer = setTimeout(() => {
            // Change the state after 30 seconds
            setHandleAudioClicked(null)
        }, time); // 10 seconds in milliseconds
        // Clean up the timer when the component unmounts or state changes
        return () => clearTimeout(timer);
    }

   const handleAudioClick=(iconName, audio)=>{
        //alert(iconName)
        if(audioIsPlayig){
            stopAudio()
            setAudioIsPlaying(false)
            setHandleAudioClicked(null)
        }else{
            playAudio(new Audio(audio))
            setHandleAudioClicked(iconName)
            setAudioIsPlaying(true)
            audioTimer(45000)
        }

   }


    return(
        <div className='topAppBar'>
            <div className="title_and_logo">
                <img src={imagePath} alt="logo" id="logo"/>
                <h1 id="app-bar-title">Empower-Us</h1>
            </div>
            <div className="appbar-icons">
                <Link to="/" className="app_bar_routes">
                    <button className={`icon-buttons top_app_bar ${clickedIcon === 'home' ? 'active_icon' : ''}`}  onClick={()=>handleAudioAndIconCheck('home')}>
                        Home
                        <i className="material-icons" alt="home icon">home</i>
                    </button>
                </Link>

                <Link to="/Help" className="app_bar_routes">
                    <button className={`icon-buttons top_app_bar ${clickedIcon === 'help' ? 'active_icon' : ''}`} onClick={()=>handleAudioAndIconCheck('help')}>
                        Help
                        <i className="material-icons" alt="help icon">help</i>
                    </button>
                </Link>
               <button className={`icon-buttons top_app_bar volume_icon ${audioClicked === 'twi_audio' ? 'active_icon' : ''}`} onClick={()=> handleAudioClick('twi_audio')}>
                    🇬🇭Welcome
                    <i className="material-icons" alt="volume icon">volume_up</i>
                </button>
                <button className={`icon-buttons top_app_bar volume_icon`} onClick={()=> handleAudioClick('english_audio', welcomeEnglishAudio)}>
                    🇬🇧Welcome
                    <i className={`material-icons ${audioClicked === 'english_audio' ? 'audio_active' : ''}`} alt="volume icon">volume_up</i>
                </button>
                <InstallButton  />
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
    const [downloadIconHighlight, setDownloadIconHighlight] = useState(null)
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

    const handleDownloadIconHighlight=()=>{
        //alert('timer start')
        const timer = setTimeout(() => {
            // Change the state after 30 seconds
            setDownloadIconHighlight(null)
        }, 1500); // 10 seconds in milliseconds
        // Clean up the timer when the component unmounts or state changes
        return () => clearTimeout(timer);

    }

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
        setDownloadIconHighlight('download')
        handleDownloadIconHighlight()
    };

    return (
        <button onClick={handleInstallApp} className={`download_button icon-buttons top_app_bar ${downloadIconHighlight === 'download' ? 'active_icon' : ''}`}>
            Download
            <i className="material-icons" alt="download icon">download</i>
        </button>
    );
};
