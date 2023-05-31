import {useState} from "react";
import audioImage from "./images/helpimages/audioimage.webp"
import lessonImage from "./images/helpimages/lessonsImage.webp"
import quizImage from "./images/helpimages/quizImage.webp"
import navigationImage from "./images/helpimages/navigation.webp"
import downloadImage from "./images/helpimages/downloadImage.webp"
import LessonAudioPlayer from "./reusable-components/LessonAudioPlayer";

//English Audios
import englishAudioForAudioHelp from "./audios/helppage/audiohelpenglish.mp3"
import downloadEnglishAudio from "./audios/helppage/downloadenglishaudio.mp3"
import lessonAudioEnglish from "./audios/helppage/lessonaudioenglish.mp3"
import navigationEnglishAudio from "./audios/helppage/navigationEnglish.mp3"
import questionsEnglishAudio from "./audios/helppage/questionsEnglish.mp3"



import TwiAudioForAudioHelp from "./audios/helppage/audiohelptwi.mp3"
import TwiAudioForDownload from "./audios/helppage/downloadtwi.mp3"
import TwiAudioForLessons from "./audios/helppage/lessonsTwi.mp3"
import TwiAudioForQuestions from "./audios/helppage/questionsTwi.mp3"
import TwiAudioForNavigation from "./audios/helppage/navigationTwi.mp3"


import helpIntroEnglish from "./audios/helppage/helpIntro.mp3"
import helpIntroTwi from "./audios/helppage/helpIntroTwi.mp3"
import OverviewAudios from "./reusable-components/OverViewAudios";

function HelpPage(){
    /*Teach users how to download the application on their phone*/
    /*Mention that you can only access courses that have the green big start icon*/
    /* Mention that you will have to pass the previous course to unlock the next one */
    /*Should speak about structure of the application in terms of lessons being a main lesson, keyword, then question*/
    const helpCardInformation = [
        {
            title: 'Audio',
            image: audioImage,
            content: ['In the application there are volume icons',  'The 🇬🇭 Ghana flag at the top of the volume icon plays text in the twi language', 'The 🇬🇧 British flag at the top of the volume icon plays text in the english language'],
            englishAudio: englishAudioForAudioHelp,
            twiAudio: TwiAudioForAudioHelp

        },
        {
            title: 'Download',
            image: downloadImage,
            content: ['To get the app on your phone, click the arrow pointing down at the top of the page.'],
            contentImage: "",
            englishAudio: downloadEnglishAudio,
            twiAudio: TwiAudioForDownload
        },
        {
            title: 'Lessons',
            image: lessonImage,
            content: ['The application has lessons which you can start by clicking the start button', 'If a lesson is locked, in the home page you will see a locked icon 🔒 on the card', 'If a lesson is unlocked, in yhe home page you will see an unlocked icon 🔓', 'You need to pass the course by getting at least 65 points (or more)  to unlock the next course' ],
            englishAudio: lessonAudioEnglish,
            twiAudio: TwiAudioForLessons
        },
        {
            title: 'Questions',
            image: quizImage,
            content: ['There are three different types of questions: True or False, Multiple Choice, and Matching Options', 'To answer questions, click on the button shaped like a rectangle next to the audio icons', 'If you get a question correct, you get 10 points', ''],
            contentImage: "",
            englishAudio: questionsEnglishAudio,
            twiAudio: TwiAudioForQuestions
        },
        {
            title: 'Direction',
            image: navigationImage,
            content: ['To go to the first page, click the house icon at the top', 'In the course, use the forward arrow button below the volume icon to go to the next item.', 'In the course, use the back arrow button below the volume icon to go to the previous item.'],
            englishAudio: navigationEnglishAudio,
            twiAudio: TwiAudioForNavigation
        },

    ];

    const overViewText="You are currently at the help page if you need help with anything, you can either listen to it by clicking on the audio icon below the Ghana flag to hear the content in twi or the British flag to hear it in English. If you would prefer to read it, click on the square button in the lower right corner with the icon pointing downwards. "

    const HelpPageCard = ({ cardInfo }) => {
        //console.log("This is card inffo" + JSON.stringify(cardInfo.content))
        const [expanded, setExpanded] = useState(false);
        const [iconValue, setIconValue] = useState("expand_more")


        const handleToggle = () => {
            setExpanded(!expanded);
            setIconValue(expanded ? "expand_more" : "expand_less");
        };


        return (
            <div className="navCard help_page">
                <div className="cardmedia">
                    <img src={cardInfo.image}/>
                </div>
                <div className="help_icons_container">
                    <h3>{cardInfo.title}</h3>
                    <div className="help_content">
                        {expanded &&
                        cardInfo.content.map((content, index) => (
                            <p key={index} className="text_content">{content}</p>
                        ))
                        }
                    </div>

                    <div>
                        <LessonAudioPlayer englishAudio={cardInfo.englishAudio} englishAudioName={cardInfo.englishAudio} twiAudio={cardInfo.twiAudio} twiAudioName={cardInfo.twiAudio}/>
                        <div className="help_collapse_icon">
                            <button onClick={handleToggle}>
                                <i className="material-icons" alt="expansion">{iconValue}</i>
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        );
    };


    const HelpCardList = ({ cards }) => {
        return (
            <div className="navBar">
                {cards.map((card, index) => (
                    <HelpPageCard key={index} cardInfo={card} />
                ))}
            </div>
        );
    };






    return(<div>
    <OverviewAudios text={overViewText} englishAudio={helpIntroEnglish} englishAudioName={helpIntroEnglish} twiAudio={helpIntroTwi} twiAudioName={helpIntroTwi}
    />
       <HelpCardList cards={helpCardInformation}/>
    </div>)
}
export default HelpPage