
import logo from "./logo.svg";
import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {AudioContext} from "./AudioContext";
import {EnglishAudioContext} from "./PlayEnglishContext";
import {LanguageContext} from "./LanguageContext";
import {navBarElements} from "./NavBarElements";

function Homepage() {
    //let audio = new Audio(process.env.PUBLIC_URL + '/audio/introduction.mp3')
    const { isPlaying, playAudio, stopAudio } = useContext(AudioContext);
    const {speakEnglishWords} = useContext(EnglishAudioContext);
    const {language, updateLanguage} = useContext(LanguageContext)
    const English = "English";

    useEffect(() => {
        if(!language){
            updateLanguage("twi");
            localStorage.setItem("language", "twi")
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
                               <i className="material-icons" alt="help icon">lock</i>
                           </button>
                           <Link key={index} to={`/${navElement.Link}`} className= "nav_link_routers">
                           <button className="start-button">Start</button>
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