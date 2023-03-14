import React, {createContext, useState, useRef, useCallback} from 'react';

export const EnglishAudioContext = createContext();

export const EnglishAudioContextProvider= ({children}) => {
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
        voice = synth.getVoices()[50]
    })
    //Initial get voices call, when they voices are ready
    synth.getVoices();

    const speakEnglishWords = useCallback((text) => {
        if(!voice){
            //Use Daniel
            let utterance_words = new SpeechSynthesisUtterance(text);
            synth.speak(utterance_words);
        }else{
            let utterance_words = new SpeechSynthesisUtterance(text);
            utterance_words.voice = voice;
            // Get the voices and speak the utterance for the words
            synth.speak(utterance_words);
        }
    }, [])

    return (
        <EnglishAudioContext.Provider value={{ speakEnglishWords}}>
            {children}
        </EnglishAudioContext.Provider>
    );
}