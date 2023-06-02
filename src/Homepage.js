
import logo from "./logo.svg";
import {Link} from "react-router-dom";
import Pointhands from "./images/rewardImages/pointinghand2.gif";
import PointDownwards from "./images/rewardImages/downwardpoint.gif";

import {useContext, useEffect, useState} from "react";
import {AudioContext} from "./context/AudioContext";
import healthImage from "./images/healthservice.webp"
import greyGovernment from "./images/governmentlogo.webp"
import ghanaId from "./images/ghanacard.webp"
import educationalImage from "./images/transparenteducation.webp"
import jobsImage from "./images/jobstransparent.webp"
import courseOutline from "./audios/homepage/courseoutlineenglish.mp3"
import ghanahealthservice from "./audios/homepage/ghanahealthservice.mp3"
import identification from "./audios/homepage/nationalidentification.mp3"
import educationEnglish from "./audios/homepage/ghanaeducationservice.mp3"
import jobsEnglishAudio from "./audios/homepage/jobs.mp3"
import basicsTwiAudio from "./audios/homepage/courseoutlinetwi.mp3"


import introEnglish from "./audios/homepage/intro_english.mp3"
import introTwi from "./audios/homepage/intro_twi.mp3"


import recsCourseOutlineTwi from "./audios/homepage/recscourseoutline.mp3"
import recsHealthTwi from "./audios/homepage/recsGhanaHealthCare.mp3"
import recsEducationTwi from "./audios/homepage/recsEducation.mp3"
import recsIdTwi from "./audios/homepage/idrecs.mp3"
import recsJobsTwi from "./audios/homepage/jobsrecs_twi.mp3"

import recsCourseOutlineEnglish from "./audios/homepage/recsCourseOutineEnglish.mp3"
import recsHealthEnglish from "./audios/homepage/recsGHSEnglish.mp3"
import recsEducationEnglish from "./audios/homepage/recsEducationEnglish.mp3"
import recsIdTwiEnglish from "./audios/homepage/recsIDenglish.mp3"
import recsJobsEnglish from "./audios/homepage/recsJobsEnglish.mp3"





import healthAudio from "./audios/homepage/healthintroaudio.mp3"
import educationAudio from "./audios/homepage/educationaudio.mp3"
import identificationAudio from "./audios/homepage/identification.mp3"
import adwuma from "./audios/homepage/adwuma.mp3"
import LessonAudioPlayer from "./reusable-components/LessonAudioPlayer";
import {LockedStatusObjContext} from "./App";



function Homepage() {
    //let audio = new Audio(process.env.PUBLIC_URL + '/audio/introduction.mp3')
    const {playAudio, activeName, isPlaying, stopAudio} = useContext(AudioContext);
    const {lockedStatusJsonObj} = useContext(LockedStatusObjContext);
    const [personalRecommendedLesson, setPersonalRecommendedLesson] = useState(null)
    const [recAudio, setRecAudio] = useState(null)
    const [recEnglishAudio, setRecEnglishAudio] = useState(null)
    const [status, setStatus]= useState({})
    const [showRecommendedLesson, setShowReccomendedLesson] = useState(false)
    // Find the index of the latest unlocked card for hand directing
    let latestUnlockedIndex = Object.values(status).lastIndexOf(false);

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

    useEffect(() => {
        const lockedStatus = JSON.parse(localStorage.getItem('lockedStatusData'));
        const userScores = JSON.parse(localStorage.getItem('userScores'));
        let lowestUnlockedScore = Infinity;
        let recommendedLesson = null;


        const showRecommendedLesson = Object.keys(lockedStatus).some(key => key !== 'Basics' && !lockedStatus[key]);
        if(showRecommendedLesson){
            setShowReccomendedLesson(true)
        }

        // Find the lesson with the lowest unlocked score
        Object.entries(lockedStatus).forEach(([key, value]) => {
            const userScoreKey = key+"Score";
            if (!value && userScores[userScoreKey] < lowestUnlockedScore) {
                lowestUnlockedScore = userScores[userScoreKey];
                recommendedLesson = key;
            }
        });
        //alert(recommendedLesson)
        switch(recommendedLesson){
            case "Health":
                setPersonalRecommendedLesson("Ghana Health Service")
                setRecAudio(recsHealthTwi)
                setRecEnglishAudio(recsHealthEnglish)

                break;
            case "Basics":
                setPersonalRecommendedLesson("Course Outline")
                setRecAudio(recsCourseOutlineTwi)
                setRecEnglishAudio(recsCourseOutlineEnglish)
                break;
            case "Education":
                setPersonalRecommendedLesson("Ghana Education Service")
                setRecAudio(recsEducationTwi)
                setRecEnglishAudio(recsEducationEnglish)
                break;
            case "Identification":
                setPersonalRecommendedLesson("National Identification Authority")
                setRecAudio(recsIdTwi)
                setRecEnglishAudio(recsIdTwiEnglish)
                break;
            case "Jobs":
                setPersonalRecommendedLesson("Jobs")
                setRecAudio(recsJobsTwi)
                setRecEnglishAudio(recsJobsEnglish)
                break;
            default:
                setPersonalRecommendedLesson(null)
                setRecAudio(null)
                setRecEnglishAudio(null)
                break;

        }
    }, [lockedStatusJsonObj]);






    return(
    <div>
        <div className="homepage_intro_cards">
            <div className="navCard scoreCard introduction">
                <h1 className="score_rec_text main"> Welcome to Empower-Us.</h1>
                <p className="score_rec_text"> This is an application dedicated to teaching you everything you need to know about Ghana's governmental service to empower your life! Click the start button that is being pointed at by the hand to know more about what you will learn in the course.</p>
                <LessonAudioPlayer
                englishAudioName={introEnglish}
                englishAudio={introEnglish}
                twiAudioName={introTwi}
                twiAudio={introTwi}
                />
            </div>

            { showRecommendedLesson && (
                <div className="navCard scoreCard reccomendationlesson">
                    <h2 className="score_rec_text">Reccomended Lesson</h2>
                    <p className="score_rec_text"> Based on your scores, we recommend you take the course: <b>{personalRecommendedLesson}</b></p>
                    <LessonAudioPlayer
                        twiAudioName={recAudio}
                        twiAudio={recAudio}
                        englishAudio={recEnglishAudio}
                        englishAudioName={recEnglishAudio}
                    />
                </div>
            )

            }

        </div>

        <div className="navBar">
            {navBarElements.map((navElement, index) => (
                <div key={index} className={`navCard`}>
                    <div className={`cardmedia`}>
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
                               <button className={`volume_icon ${activeName ===  navElement.TwiAudioName ? 'audio_active' : ''}`}
                                       onClick={() =>{
                                           if(isPlaying && activeName===navElement.TwiAudioName){
                                               stopAudio()
                                           }else{
                                               playAudio(  new Audio(navElement.TwiAudio), navElement.TwiAudioName)

                                           }
                                       }

                                       } >
                                   <i className="material-icons" alt="help icon">volume_up</i>
                               </button>
                           </div>
                           <div className="volume_button_divs">
                               <div>🇬🇧</div>
                               <button  className={`volume_icon ${activeName ===  navElement.NavBarTitleEnglish ? 'audio_active' : ''}`}
                                        onClick={() => {
                                            if(isPlaying && activeName === navElement.NavBarTitleEnglish){
                                              stopAudio()
                                            }else{
                                                (playAudio(  new Audio(navElement.EnglishAudio), navElement.NavBarTitleEnglish))
                                            }
                                        }

                                            } >
                                   <i className="material-icons" alt="help icon">volume_up</i>
                               </button>
                           </div>
                           <button className="icon-buttons">
                               <i className="material-icons" alt="help icon">
                                   {navElement.locked_status === true? "lock":"lock_open"}
                               </i>
                           </button>
                           {navElement.locked_status ===false &&(
                               <div className="homepage_container_hands">
                                   {/* Render pointing hand gif image next to the latest unlocked card */}
                                   {index === latestUnlockedIndex && (
                                       <img
                                           src={PointDownwards}
                                           className="pointing_hands top_app_pointing"
                                           alt="pointing hands"
                                       />
                                   )}
                                   <Link key={index} to={`/${navElement.Link}`} className= "nav_link_routers">
                                       <button className="start-button">START</button>
                                   </Link>
                               </div>

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