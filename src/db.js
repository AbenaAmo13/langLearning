import React, {useState} from 'react';
import Dexie from 'dexie';
import LessonAudioPlayer from "./reusable-components/LessonAudioPlayer";

// Initialize IndexedDB database using Dexie
const db = new Dexie('MyDatabase');
db.version(1).stores({
    audios: '++id,name,audioBlob',
    images: '++id,name,imageBlob'
});

function AudioTEST() {
    const [isPlayingIndex, setIsPlayingIndex] = useState(false);
    const handleAudioUpload = async (event) => {
        const file = event.target.files[0];
        const audioBlob = await convertAudioToBlob(file);
        console.log(audioBlob)
        //const audioBlob = await file.blob();

        // Store audio in IndexedDB
        await db.audios.add({
            name: file.name,
            audioBlob
        });

        console.log('Audio stored successfully!');
    }

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        const imageBlob = await file.blob();

        // Store image in IndexedDB
        await db.images.add({
            name: file.name,
            imageBlob
        });

        console.log('Image stored successfully!');
    }

    const playAudioFromIndexedDB=(audioId)=>{
        // Retrieve audio Blob from IndexedDB
        db.audios.get(audioId).then((audio) => {
            if (audio) {
                const audioBlob = audio.audioBlob;

                // Convert Blob to URL
                const audioUrl = URL.createObjectURL(audioBlob);
                // Create audio element
                const audioElement = document.createElement('audio');
                audioElement.src = audioUrl;

                // Play audio
                if(!audioElement.currentSrc.paused || audioElement.currentSrc.duration > 0) {
                    alert('hi')
                    audioElement.currentSrc.pause();
                } else if (audioElement.paused) {

                    audioElement.play();
                }

            } else {
                console.log('Audio not found in IndexedDB.');
            }
        }).catch((error) => {
            console.error('Error retrieving audio from IndexedDB:', error);
        });
    }


        return (
            <div>
                <h1>Audio and Image Upload</h1>
                <input type="file" accept="audio/*" onChange={handleAudioUpload} />
                <br />
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                <button onClick={()=>playAudioFromIndexedDB(1)} >Play Audio</button>

            </div>
        );

}

function convertAudioToBlob(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            const blob = new Blob([reader.result], { type: file.type });
            resolve(blob);
        };

        reader.onerror = reject;

        reader.readAsArrayBuffer(file);
    });
}




function getAudioFile(audioId) {
    // Retrieve audio Blob from IndexedDB
    db.audios.get(audioId).then((audio) => {
        if (audio) {
            const audioBlob = audio.audioBlob;

            // Convert Blob to URL
            const audioUrl = URL.createObjectURL(audioBlob);
            return audioUrl
        } else {
            console.log('Audio not found in IndexedDB.');
        }
    }).catch((error) => {
        console.error('Error retrieving audio from IndexedDB:', error);
    });
}




export default AudioTEST;
