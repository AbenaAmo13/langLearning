import React, {createContext, useState, useRef, useEffect} from 'react';

export const AudioContext = createContext();

 export const AudioContextProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeName, setActiveName] = useState(null)
    const audioRef = useRef(null);


    const playAudio = (audio, audioName) => {
        if(isPlaying){
            stopAudio()

        }

        audioRef.current = audio;
        audioRef.current.play();
        setIsPlaying(true);
        audioRef.current.onplaying = function() {
            setIsPlaying(true);
            setActiveName(audioName)
            //console.log("Audio name: " + audioName)
        };



            /*if(isPlaying){
                stopAudio()
                setPrevAudioPlayed(audioName)

            }

            audioRef.current = audio;
            audioRef.current.play();
            audioRef.current.onplaying = function() {
                setIsPlaying(true);
                setActiveName(audioName)
                //console.log("Audio name: " + audioName)
            };
*/

    };

    const stopAudio = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
        setActiveName(null)
    };

    const stopAnswerAudio=()=>{
        if(audioRef.current){
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
            setActiveName(null)
        }
    }

    useEffect(() => {
        const audio = audioRef.current;
        if(audio){
            audio.onended= function() {
                stopAudio()
                /*setIsPlaying(false);
                setActiveName(null)*/
                //alert('Audio has ended');
            };;
        }

    }, [isPlaying]);

    return (
        <AudioContext.Provider value={{ isPlaying, playAudio, stopAudio, activeName, stopAnswerAudio }}>
            {children}
        </AudioContext.Provider>
    );
};

export default AudioContextProvider;
