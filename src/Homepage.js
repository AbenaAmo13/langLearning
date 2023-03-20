
import logo from "./logo.svg";
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AudioContext} from "./context/AudioContext";
import {EnglishAudioContext} from "./context/PlayEnglishContext";
import {LanguageContext} from "./context/LanguageContext";
import {navBarElements} from "./NavBarElements";
import testImage from "./images/3dspaceship.png";
import testAudio from "./audios/testing.mp3";
import test2Audio from "./audios/introduction.mp3";

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
    console.log(status)
     const navBarElements=[
        {  "Image":testImage,
            "NavBarTitleEnglish": "Basics",
            "NavBarTitleTwi": "Mfitiaseɛ no",
            "TwiAudio":testAudio,
            "Link": "Basics",
            "locked_status": status.Basics
        }, {
            "Image":testImage,
            "NavBarTitleEnglish": "HealthCare",
            "NavBarTitleTwi": "Apomuden",
            "TwiAudio":test2Audio,
            "Link": "Health",
            "locked_status": status.Health
        },
        {
            "Image":testImage,
            "NavBarTitleEnglish": "Education",
            "NavBarTitleTwi": "Adesua ne nhomasua",
            "TwiAudio":testAudio,
            "Link":"Education",
            "locked_status": status.Education
        },
        {
            "Image":testImage,
            "NavBarTitleEnglish": "Identification",
            "NavBarTitleTwi": "Nipakuo ho nnwuma",
            "TwiAudio":testAudio,
            "Link": "Identification",
            "locked_status": status.Identification
        }, {
            "Image":testImage,
            "NavBarTitleEnglish": "Jobs",
            "NavBarTitleTwi": "Adwuma",
            "TwiAudio":testAudio,
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
            const status = JSON.parse(localStorage.getItem('lockedStatusData'));
            setStatus(status)

        }
    }, []);

    return(
    <div>
        <div className="card_box">
            <div className="card_title">
                <h1>Akwaaba </h1>
            </div>
            <div className="volume_div">
                <button className="icon-buttons volume_icon lesson_volume_icon" >
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
                           <Link key={index} to={`/${navElement.Link}`} className= "nav_link_routers">
                               {navElement.locked_status ===false &&(
                                   <button className="start-button">Start</button>
                                   )}
                           </Link>
                       </div>
                   </div>
                </div>
            ))}
        </div>
    </div>


    )

}
export default Homepage;