
import {AudioContext} from "../context/AudioContext";
import {useContext, useEffect} from "react";
import {EnglishAudioContext} from "../context/PlayEnglishContext";
 const LessonAudioButtons = ({ twiAudio, englishAudio, englishAudioName, twiAudioName, text}) => {
 const {playAudio, isPlaying, activeName, stopAudio, setActiveName } = useContext(AudioContext);
 //const {speakEnglishWords, isReading, stopAudioTextToSpeech}= useContext(EnglishAudioContext)
/*
     useEffect(()=>{
         if(!isReading){
             setActiveName(null)
         }else{
             setActiveName(englishAudioName)
         }
     }, [isReading])

     const handleTextToSpeechPlay=()=>{
         if(isPlaying) {
             stopAudio()
         }
         if(isReading && activeName === englishAudioName){
             stopAudioTextToSpeech()
         }else{
             console.log("Using APIs")
             Object.keys(text).forEach(key => {
                 speakEnglishWords(text[key]);

             });
         }
     }*/

     const handleEnglishAudioPlay=()=>{
         if(isPlaying && activeName === englishAudioName){
             stopAudio()
         }else{
             playAudio(new Audio(englishAudio), englishAudioName);
         }
     }

    /* const englishAudioPlay=()=>{
        if(text){
        handleTextToSpeechPlay()
        }else{
            handleEnglishAudioPlay()
        }

     }*/


    return (
        <div className="question_audio_icons">
            <div className="volume_button_divs">
                <div>🇬🇭</div>
                <button
                    className={`volume_icon lesson_volume_icon keyword_volume_icon ${activeName === twiAudioName ? 'audio_active' : ''}`}
                    onClick={() => {
                        if(isPlaying && activeName === twiAudioName){
                            stopAudio()
                        }else{
                            playAudio(new Audio(twiAudio),twiAudioName );
                        }
                    }}
                >
                    <i className="material-icons" alt="help icon">
                        volume_up
                    </i>
                </button>
            </div>

            <div className="volume_button_divs">
                <div>🇬🇧</div>
                <button
                    className={`volume_icon lesson_volume_icon keyword_volume_icon ${activeName === englishAudioName ? 'audio_active' : ''}`}
                    onClick={() => handleEnglishAudioPlay()}
                >
                    <i className="material-icons" alt="help icon">
                        volume_up
                    </i>
                </button>
            </div>
        </div>
    );
};
 export default LessonAudioButtons;