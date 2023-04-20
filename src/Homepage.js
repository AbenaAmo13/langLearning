
import logo from "./logo.svg";
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AudioContext} from "./context/AudioContext";
import healthImage from "./images/healthservice.webp"
import greyGovernment from "./images/governmentlogo.webp"
import ghanaId from "./images/ghanacard.webp"
import educationalImage from "./images/transparenteducation.webp"
import jobsImage from "./images/jobstransparent.webp"
import basicsTwiAudio from "./audios/homepage/mfitias3no_audio.ogg"
import courseOutline from "./audios/homepage/courseoutline.ogg"
import ghanahealthservice from "./audios/homepage/ghanahealthservice.ogg"
import identification from "./audios/homepage/nationalidentification.ogg"
import educationEnglish from "./audios/homepage/ghanaeducationservice.ogg"
import jobsEnglishAudio from "./audios/homepage/jobs.ogg"



import healthAudio from "./audios/homepage/healthintroaudio.ogg"
import educationAudio from "./audios/homepage/educationaudio.ogg"
import identificationAudio from "./audios/homepage/identification.ogg"
import adwuma from "./audios/homepage/adwuma.ogg"
import LessonAudioPlayer from "./reusable-components/LessonAudioPlayer";


function Homepage() {
    //let audio = new Audio(process.env.PUBLIC_URL + '/audio/introduction.mp3')
    const {playAudio, activeName} = useContext(AudioContext);
    const [status, setStatus]= useState({})

    const lockedStatusObj =
    {  Basics: false,
        Health: true,
        Education: true,
         Identification:true,
        Jobs: true
    }


    const userScore={
        BasicsScore: 0,
        HealthScore: 0,
        EducationScore:0,
        IDScore: 0,
        JobsScore:0
    }
    const English = "English";
     const navBarElements=[
        {  "Image":greyGovernment,
            "NavBarTitleEnglish": "Course Outline",
            "TwiAudioName": "coursetwi",
            "TwiAudio":basicsTwiAudio,
            "EnglishAudio": courseOutline ,
            "Link": "Basics",
            "locked_status": status.Basics,
            "className": "blueCardOutline",
            "classNameMedia": "blueCard2"
        }, {
            "Image":healthImage,
            "NavBarTitleEnglish": "Ghana Health Service",
             "TwiAudioName": "apumoden",
            "TwiAudio":healthAudio,
             "EnglishAudio": ghanahealthservice,
            "Link": "Health",
            "locked_status": status.Health,
             "className": "orangeCardOutline",
             "classNameMedia": "orangeCard2",


        },
        {
            "Image":educationalImage,
            "NavBarTitleEnglish": "Ghana Education Service",
            "TwiAudioName": "adesua",
            "TwiAudio":educationAudio,
            "EnglishAudio": educationEnglish,
            "Link":"Education",
            "locked_status": status.Education,
            "className": "blueCardOutline",
            "classNameMedia": "blueCard2"

        },
        {
            "Image":ghanaId,
            "NavBarTitleEnglish": "National Identification Authority",
            "TwiAudioName": "twiid",
            "TwiAudio":identificationAudio,
            "EnglishAudio": identification,
            "Link": "Identification",
            "locked_status": status.Identification,
            "className": 'purpleCardOutline',
            "classNameMedia": "purpleCard2"
        }, {
            "Image":jobsImage,
            "NavBarTitleEnglish": "Jobs",
            "TwiAudio":adwuma,
             "EnglishAudio": jobsEnglishAudio,
            "Link": "Jobs",
            "locked_status": status.Jobs,
             "className": 'orangeCardOutline',
             "classNameMedia": "orangeCard2"

        }
    ]



    useEffect(() => {
        if (!localStorage.getItem('lockedStatusData')) {
            localStorage.setItem('lockedStatusData', JSON.stringify(lockedStatusObj));
        }
        if (!localStorage.getItem('userScores')) {
            localStorage.setItem('userScores', JSON.stringify(userScore));
        }


    }, []);

    useEffect(()=>{
        const status = JSON.parse(localStorage.getItem('lockedStatusData'));
        setStatus(status)
    }, [])

    return(
    <div>
       {/* <div className="card_box">
            <div className="card_title">
                <h2>Welcome </h2>
            </div>
            <div className="volume_div">
                <button className="volume_icon lesson_volume_icon main_audio" >
                    <i className="material-icons" alt="help icon">volume_up</i>
                </button>
            </div>

        </div>*/}

        <div className="navBar">
            {navBarElements.map((navElement, index) => (
                <div key={index} className={`navCard ${navElement.className}`}>
                    <div className={`cardmedia ${navElement.classNameMedia}`}>
                        <img src={navElement.Image} alt={navElement.NavBarTitleEnglish}  className="cardImg " />
                    </div>
                   <div>
                       <div className="navTitle">
                           <h3 className="nav-title">
                               { navElement.NavBarTitleEnglish}
                           </h3>
                       </div>
                       <div className="nav-icons">
                           {/*<LessonAudioPlayer
                                twiAudio={navElement.TwiAudio}
                                englishAudio={navElement.EnglishAudio}
                                englishAudioName={navElement.NavBarTitleEnglish}
                                twiAudioName={navElement}

                           />*/}
                          <div className="volume_button_divs">
                               <div>🇬🇭</div>
                               <button className={`volume_icon ${activeName ===  navElement.TwiAudioName ? 'audio_active' : ''}`} onClick={() => (playAudio(  new Audio(navElement.TwiAudio), navElement.TwiAudioName))} >
                                   <i className="material-icons" alt="help icon">volume_up</i>
                               </button>
                           </div>
                           <div className="volume_button_divs">
                               <div>🇬🇧</div>
                               <button  className={`volume_icon ${activeName ===  navElement.NavBarTitleEnglish ? 'audio_active' : ''}`} onClick={() => (playAudio(  new Audio(navElement.EnglishAudio), navElement.NavBarTitleEnglish))} >
                                   <i className="material-icons" alt="help icon">volume_up</i>
                               </button>
                           </div>
                           <button className="icon-buttons">
                               <i className="material-icons" alt="help icon">
                                   {navElement.locked_status === true? "lock":"lock_open"}
                               </i>
                           </button>
                           {navElement.locked_status ===false &&(
                               <Link key={index} to={`/${navElement.Link}`} className= "nav_link_routers">
                                   <button className="start-button">START</button>
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