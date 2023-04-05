import React, {createContext, useState, useRef, useEffect} from 'react';

export const AudioContext = createContext();

 export const AudioContextProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);


    const playAudio = (audio) => {
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
                alert('Audio has ended');
            };;
        }

    }, []);

    return (
        <AudioContext.Provider value={{ isPlaying, playAudio, stopAudio }}>
            {children}
        </AudioContext.Provider>
    );
};

export default AudioContextProvider;
