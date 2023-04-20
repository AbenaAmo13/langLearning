import React, {createContext, useState, useRef, useEffect} from 'react';

export const AudioContext = createContext();

 export const AudioContextProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeName, setActiveName] = useState(null)
    const audioRef = useRef(null);


    const playAudio = (audio, audioName) => {
        setActiveName(audioName)
        if (isPlaying) {
            stopAudio();
        }
        audioRef.current = audio;
        audioRef.current.play();
        audioRef.current.onplaying = function() {
            setIsPlaying(true);
        };

    };

    const stopAudio = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
    };

    useEffect(() => {
        const audio = audioRef.current;
        if(audio){
            audio.onended= function() {
                setIsPlaying(false);
                setActiveName(null)
                //alert('Audio has ended');
            };;
        }

    }, [isPlaying]);

    return (
        <AudioContext.Provider value={{ isPlaying, playAudio, stopAudio, activeName }}>
            {children}
        </AudioContext.Provider>
    );
};

export default AudioContextProvider;
