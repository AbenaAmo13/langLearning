import img from "./img.png";
import {useContext, useEffect} from "react";
import { AudioContext } from './AudioContext';
import {EnglishAudioContext} from './PlayEnglishContext'
import {LanguageContext} from "./LanguageContext";
import audioFile from './audios/introduction.mp3'
import testing from './audios/testing.mp3'


function Introduction() {
    let audio = new Audio(audioFile)
    let testing2 = new Audio(testing)
    //let audio = new Audio(process.env.PUBLIC_URL + '/audio/introduction.mp3')
    //let testing2 = new Audio(process.env.PUBLIC_URL + '/audio/testing.mp3')
    const { isPlaying, playAudio, stopAudio } = useContext(AudioContext);
    const {speakEnglishWords} = useContext(EnglishAudioContext);
    const {language, chooseLanguage} = useContext(LanguageContext)
    console.log(isPlaying)
    console.log(language)
    return(
        <div>
            <img src={img} className="App-logo" alt="logo" />
            <button onClick={()=>{chooseLanguage("english")}}>Change language</button>
            <button onClick={()=>speakEnglishWords("Hey")}></button>
            <button onClick={() => playAudio(audio)}>Play Audio</button>
            <button onClick={() => playAudio(testing2)}>Play Testing Audio</button>
            <button onClick={() => stopAudio()}>Stop Audio</button>
        </div>
    )

}
export default Introduction;