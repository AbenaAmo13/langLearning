import React, {createContext, useState, useRef, useCallback} from 'react';

export const EnglishAudioContext = createContext();

export const EnglishAudioContextProvider= ({children}) => {
    const [isReading, setIsReadingText] = useState(false)
    let voice;
    let synth = window.speechSynthesis;

    if (window.speechSynthesis === undefined || window.SpeechSynthesisUtterance === undefined) {
        // speech synthesis and SpeechSynthesisUtterance are not supported
        console.log('speech is not supported')
        //There should be a redrect.
    } else {
        // speech synthesis and SpeechSynthesisUtterance are supported
        console.log('speech is supported')
    }

    //This is triggered after the voices are ready.
    synth.addEventListener("voiceschanged",()=>{
        console.log('getting voices')
        voice = synth.getVoices()[50]
        console.log(voice)
    })
    //Initial get voices call, when they voices are ready
    synth.getVoices();

    const speakEnglishWords = useCallback((text) => {
        if(!voice){
            console.log('no voice available')
            //Use Daniel
            let utterance_words = new SpeechSynthesisUtterance(text);
            synth.speak(utterance_words);
        }else{
            console.log('voice available')
            let utterance_words = new SpeechSynthesisUtterance(text);
            utterance_words.voice = voice;

            // Add an event listener for the 'start' event
            utterance_words.addEventListener('start', handleStart);
            // Add an event listener for the 'end' event
            utterance_words.addEventListener('end', handleEnd);
            // Get the voices and speak the utterance for the words
            synth.speak(utterance_words);
        }
    }, [])

    const handleEnd=()=>{
        setIsReadingText(false)

    }

    const handleStart=()=>{
        setIsReadingText(true)
    }

    const stopAudioTextToSpeech = () => {
        //alert('stopping the audio')
        synth.cancel();
        setIsReadingText(false)
    };

    return (
        <EnglishAudioContext.Provider value={{ speakEnglishWords, isReading, stopAudioTextToSpeech}}>
            {children}
        </EnglishAudioContext.Provider>
    );
}