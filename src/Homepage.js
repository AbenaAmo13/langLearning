
import logo from "./logo.svg";
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AudioContext} from "./context/AudioContext";
import {EnglishAudioContext} from "./context/PlayEnglishContext";
import {LanguageContext} from "./context/LanguageContext";
import testImage from "./images/3dspaceship.png"
import basicsTwiAudio from "./audios/homepage/mfitias3no_audio.ogg"
import healthAudio from "./audios/homepage/healthintroaudio.ogg"
import educationAudio from "./audios/homepage/educationaudio.ogg"
import identificationAudio from "./audios/homepage/identification.ogg"
import adwuma from "./audios/homepage/adwuma.ogg"
import testAudio from "./audios/testing.mp3"


function Homepage() {
    //let audio = new Audio(process.env.PUBLIC_URL + '/audio/introduction.mp3')
    const { isPlaying, playAudio, stopAudio } = useContext(AudioContext);
    const {speakEnglishWords} = useContext(EnglishAudioContext);
    const {language, updateLanguage} = useContext(LanguageContext)
    const [status, setStatus]= useState({})

    const lockedStatusObj =
    {  Basics: false,
        Health: true,
        Education: true,
         Identification:true,
        Jobs: true
    }
    const English = "English";
     const navBarElements=[
        {  "Image":testImage,
            "NavBarTitleEnglish": "Basics",
            "NavBarTitleTwi": "Mfitiaseɛ no",
            "TwiAudio":basicsTwiAudio,
            "Link": "Basics",
            "locked_status": status.Basics
        }, {
            "Image":testImage,
            "NavBarTitleEnglish": "Ghana Health Service",
            "NavBarTitleTwi": "Ghana Apɔmuden adwuma",
            "TwiAudio":healthAudio,
            "Link": "Health",
            "locked_status": status.Health
        },
        {
            "Image":testImage,
            "NavBarTitleEnglish": "Ghana Education Service",
            "NavBarTitleTwi": "Ghana sukuu dwumadie",
            "TwiAudio":educationAudio,
            "Link":"Education",
            "locked_status": status.Education
        },
        {
            "Image":testImage,
            "NavBarTitleEnglish": "National Identification Authority",
            "NavBarTitleTwi": "ɔman agyinahyɛdeɛ",
            "TwiAudio":identificationAudio,
            "Link": "Identification",
            "locked_status": status.Identification
        }, {
            "Image":testImage,
            "NavBarTitleEnglish": "Jobs",
            "NavBarTitleTwi": "Adwuma",
            "TwiAudio":adwuma,
            "Link": "Jobs",
            "locked_status": status.Jobs
        }
    ]



    useEffect(() => {
        if(!language){
            updateLanguage("twi");
            localStorage.setItem("language", "twi")
        }

        if (!localStorage.getItem('lockedStatusData')) {
            localStorage.setItem('lockedStatusData', JSON.stringify(lockedStatusObj));
        }

    }, []);

    useEffect(()=>{
        const status = JSON.parse(localStorage.getItem('lockedStatusData'));
        setStatus(status)
    }, [])

    return(
    <div>
        <div className="card_box">
            <div className="card_title">
                <h2>Akwaaba </h2>
            </div>
            <div className="volume_div">
                <button className="icon-buttons volume_icon lesson_volume_icon main_audio" >
                    <i className="material-icons" alt="help icon">volume_up</i>
                </button>
            </div>

        </div>

        <div className="navBar">
            {navBarElements.map((navElement, index) => (
                <div key={index} className="navCard">
                    <div className="cardmedia">
                        <img src={navElement.Image} alt={navElement.NavBarTitleEnglish} className="cardImg" />
                    </div>
                   <div>
                       <div className="navTitle">
                           <h3 className="nav-title">
                               {language === English ? navElement.NavBarTitleEnglish :navElement.NavBarTitleTwi }
                           </h3>
                       </div>
                       <div className="nav-icons">
                           <button className="icon-buttons volume_icon" onClick={() => (language === English ? speakEnglishWords(navElement.NavBarTitleEnglish) : playAudio(  new Audio(navElement.TwiAudio)))} >
                               <i className="material-icons" alt="help icon">volume_up</i>
                           </button>
                           <button className="icon-buttons">
                               <i className="material-icons" alt="help icon">
                                   {navElement.locked_status === true? "lock":"lock_open"}
                               </i>
                           </button>
                           {navElement.locked_status ===false &&(
                           <Link key={index} to={`/${navElement.Link}`} className= "nav_link_routers">
                                   <button className="start-button">Start</button>
                           </Link>
                           )}
                       </div>
                   </div>
                </div>
            ))}
        </div>
    </div>


    )

}
export default Homepage;