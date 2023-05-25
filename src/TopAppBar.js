import {useContext, useEffect, useState} from "react";
import {AudioContext} from "./context/AudioContext";
import {EnglishAudioContext} from "./context/PlayEnglishContext";
import {LanguageContext} from "./context/LanguageContext";
import welcomeEnglishAudio from "./audios/topAppBarAudios/welcomeEnglishAudio.mp3"
import appBarTestAudio from "./audios/testing.mp3"
import {Link} from "react-router-dom";
import LessonAudioPlayer from "./reusable-components/LessonAudioPlayer";
import {useLocation} from "react-router";
import coins from "./images/rewardImages/cedis-2.webp";
import {RewardsContext} from "./context/RewardsContext";

function TopAppBar(){
    //const imagePath = `${process.env.PUBLIC_URL}/empower-us-192.webp`;
    const imagePath = process.env.PUBLIC_URL + '/empower-us-192.webp';
    const {userCoins, setUserCoins, updateUserCoins} = useContext(RewardsContext);
    const [clickedIcon, setClickedIcon] = useState('home');
    const [IconClicked, setHandleIconClicked] = useState(null)
    const [audioIsPlayig, setAudioIsPlaying]= useState(false)
    console.log(imagePath)
    const { isPlaying, playAudio, stopAudio, CoinsGainedFromAudio } = useContext(AudioContext);
    const testAudio = appBarTestAudio;


    useEffect(() => {
        const storedCoins = localStorage.getItem('userCoins');
        const initialCoins = storedCoins ? parseInt(storedCoins) : 0;
        setUserCoins(initialCoins);
    }, []);

    useEffect(()=>{
        if (!localStorage.getItem('userCoins')) {
            localStorage.setItem('userCoins', JSON.stringify(userCoins));
        }else {
            const userCoinsStorage = JSON.parse(localStorage.getItem('userCoins'));
            setUserCoins(userCoinsStorage)
        }
    }, [CoinsGainedFromAudio, userCoins])



    const handleAudioAndIconCheck=(iconName)=>{
        if(isPlaying){
            stopAudio()
            setHandleIconClicked(null)
        }
        //setClickedIcon(iconName);
    }

    const audioTimer=(time)=>{
        //alert('audio_timer_clicked')
        const timer = setTimeout(() => {
            // Change the state after 30 seconds
            setHandleIconClicked(null)
        }, time); // 10 seconds in milliseconds
        // Clean up the timer when the component unmounts or state changes
        return () => clearTimeout(timer);
    }

   const handleAudioClick=(iconName, audio)=>{
        //alert(iconName)
        if(audioIsPlayig){
            stopAudio()
            setAudioIsPlaying(false)
            setHandleIconClicked(null)
        }else{
            playAudio(new Audio(audio))
            setHandleIconClicked(iconName)
            setAudioIsPlaying(true)
            audioTimer(45000)
        }

   }

    const location = useLocation();
    useEffect(() => {
        // Code to be executed when the route changes
        //alert('Route has changed:'+ location.pathname);
        switch (location.pathname){
            case "/":
                setClickedIcon('home');
            break;
            case "/Help":
                setClickedIcon('help')
                break;
            case "/RewardStore":
                setClickedIcon('rewards')
                break;

            default:
                // Code to handle cases other than "/" and "/Help"
                // For example:
                setClickedIcon(null);
                break;
        }




        // You can perform additional logic or actions based on the route change
        // ...
        // Clean up the effect if needed
        return () => {
            // Code to clean up the effect, if necessary
            // This will be called when the component unmounts or when the route changes again
        };
    }, [location]);



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
                <Link to="/RewardStore" className="app_bar_routes">
                    <button className={`icon-buttons top_app_bar ${clickedIcon === 'rewards' ? 'active_icon' : ''}`} onClick={()=>handleAudioAndIconCheck('dashboard')}>
                        Rewards
                        <i className="material-icons" alt="social leader board icon">stars</i>
                    </button>
                </Link>
                <InstallButton  />
                <div className="coins_app_bar">
                    <img src={coins} alt="coins" className="coin_style_top_app_bar" />
                    <p className="user_coins">{userCoins}</p>
                </div>

               {/*<button className={`icon-buttons top_app_bar volume_icon`} onClick={()=> handleAudioClick('twi_audio')} aria-label="volume icon to play text in English">
                    🇬🇭Welcome
                    <i className={`material-icons ${IconClicked === 'twi_audio' ? 'audio_active app_bar_active' : ''}`} alt="volume icon" aria-label="volume icon to play text in Twi">volume_up</i>
                </button>
                <button className={`icon-buttons top_app_bar volume_icon`} onClick={()=> handleAudioClick('english_audio', welcomeEnglishAudio)} aria-label="volume icon to play text in English">
                    🇬🇧Welcome
                    <i className={`material-icons ${IconClicked === 'english_audio' ? 'audio_active app_bar_active' : ''}`} alt="volume icon" aria-label="volume icon to play text in English">volume_up</i>
                </button>*/}

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
            Install
            <i className="material-icons" alt="download icon">download</i>
        </button>
    );
};
