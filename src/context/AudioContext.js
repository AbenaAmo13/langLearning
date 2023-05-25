import React, {createContext, useState, useRef, useEffect, useContext} from 'react';
import {RewardsContext} from "./RewardsContext";



export const AudioContext = createContext();

 export const AudioContextProvider = ({ children }) => {
     const [isPlaying, setIsPlaying] = useState(false);
    const [activeName, setActiveName] = useState(null)
    const audioRef = useRef(null);
     const {userCoins, setUserCoins, updateUserCoins} = useContext(RewardsContext);
     const [dontAddCoins, setDontAddCoins]= useState(false)
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



    const addUserCoins=()=>{
        const audio = audioRef.current
        switch (window.location.pathname){
            case "/":
                //alert('You are in the main place')
                setDontAddCoins(true)
                break;
            case "/Help":
                setDontAddCoins(true)
                break;
            case "/RewardStore":
                setDontAddCoins(true)
                break;

            default:
                setDontAddCoins(false)
                // Code to handle all the other cases
                break;
        }
      /*  if(audio){
            const audioString = audio.toString()
            //alert(audioString)
            if(audioString.includes("answeredCorrectly")){
                //alert("audio being played is" + audioRef.current.src)
                //setDontAddCoins(true)
            }
        }*/


    }


    useEffect(() => {
        addUserCoins()
        const audio = audioRef.current;
        if(audio){
            audio.onended= function() {
                //alert(audio.src)
               stopAudio()
                //alert("Dont add coin is" + dontAddCoins)
                if(!dontAddCoins){
                    updateUserCoins(2)
                }

                //alert('Your coins have increased by 2')
                /*setIsPlaying(false);
                setActiveName(null)*/
                //alert('Audio has ended');
            };


        }



    }, [isPlaying]);

    return (
        <AudioContext.Provider value={{ isPlaying, playAudio, stopAudio, activeName, stopAnswerAudio, setActiveName}}>
            {children}
        </AudioContext.Provider>
    );
};

export default AudioContextProvider;
