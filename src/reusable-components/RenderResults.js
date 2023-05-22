import AudioPlayer from "./LessonAudioPlayer";
import zeroOutOf5 from "../audios/transitionalaudios/resultsAudios/0outof5.mp3"
import oneOutOF5 from "../audios/transitionalaudios/resultsAudios/1outof5.mp3"
import twoOutOf5 from "../audios/transitionalaudios/resultsAudios/2outof5.mp3"
import threeOutOf5 from "../audios/transitionalaudios/resultsAudios/3outof5.mp3"
import fourOutOf5 from "../audios/transitionalaudios/resultsAudios/4outof5.mp3"
import fiveOutOf5 from "../audios/transitionalaudios/resultsAudios/5outof5.mp3"

import zeroOutOf5Twi from "../audios/transitionalaudios/resultsAudios/0out5twi.mp3"
import oneOutOF5Twi from "../audios/transitionalaudios/resultsAudios/1outof5Twi.mp3"
import twoOutOf5Twi from "../audios/transitionalaudios/resultsAudios/2outof5twi.mp3"
import threeOutOf5Twi from "../audios/transitionalaudios/resultsAudios/3outof5twi.mp3"
import fourOutOf5Twi from "../audios/transitionalaudios/resultsAudios/4outof5twi.mp3"
import fiveOutOf5Twi from "../audios/transitionalaudios/resultsAudios/5outof5twi.mp3"




 function RenderResults({correctNumberAnswers, questions, nextSetOfQuestions, questionName }){
    //console.log(correctNumberAnswers)
     //console.log(questions)
    let audioFiles;
    switch (correctNumberAnswers) {
        case 0:
            audioFiles = { twiAudioName:zeroOutOf5Twi , englishAudioName: zeroOutOf5 };
            break;
        case 1:
            audioFiles = { twiAudioName: oneOutOF5Twi, englishAudioName: oneOutOF5 };
            break;
        case 2:
            audioFiles = { twiAudioName: twoOutOf5Twi , englishAudioName: twoOutOf5 };
            break;
        case 3:
            audioFiles = { twiAudioName: threeOutOf5Twi, englishAudioName: threeOutOf5 };
            break;
        case 4:
            audioFiles = { twiAudioName: fourOutOf5Twi, englishAudioName: fourOutOf5 };

            break;
        case 5:
            audioFiles = { twiAudioName: fiveOutOf5Twi, englishAudioName: fiveOutOf5 };
            break;
        default:
            audioFiles = { twiAudioName: "", englishAudioName: "" };
    }

    return(
        <div className="card_component_container lightOrangeCardOutline padding">
            <h3 className="questions">You got {correctNumberAnswers} out of {questions} questions correct</h3>
            <h3>To continue, click the square button with the right/forward arrow:</h3>
            <div className="flex">
                <button onClick={()=> nextSetOfQuestions(questionName)} className="lesson_buttons mcq_buttons">
                    <p>Next </p>
                    <i className="material-icons" alt="help icon">arrow_forward</i>
                </button>
                <AudioPlayer
                    twiAudioName={audioFiles.twiAudioName}
                    twiAudio={audioFiles.twiAudioName}
                    englishAudio={audioFiles.englishAudioName}
                    englishAudioName={audioFiles.englishAudioName}
                />
            </div>
            <div>
            </div>
        </div>
    )
}

export default RenderResults;