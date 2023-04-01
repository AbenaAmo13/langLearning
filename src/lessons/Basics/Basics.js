
import {useContext, useState, useReducer} from "react";
import {AudioContext} from "../../context/AudioContext";
import {EnglishAudioContext} from "../../context/PlayEnglishContext";
import introductionAudio from "../../audios/testing.mp3"
import {basicLessonData, trueOrFalseQuestions} from "./BasicsLessonData"


function Basics() {
    let basicsUserScore = JSON.parse(localStorage.getItem('userScores'));
    basicsUserScore = basicsUserScore.BasicsScore;

    const initialState={
        lessonCompleted: false,
        startQuestion: false,
        basicsUserSore: basicsUserScore,
        userPassedLesson : false
    };

    function reducer(state, action) {
        switch (action.type) {
            case "SET_LESSON_COMPLETED":
                return { ...state, lessonCompleted: action.payload };
            case "SET_START_QUESTION":
                return { ...state, startQuestion: action.payload };
            case "SET_USER_SCORE":
                return { ...state, userScore: action.payload };
            case "SET_USER_PASSED_LESSON":
                return { ...state, userPassedLesson: action.payload };
            default:
                throw new Error();
        }
    }
    const [lessonStates, dispatch] = useReducer(reducer, initialState);

    if(!lessonStates.lessonCompleted){
        return(
            <BasicLessons state={lessonStates} dispatch={dispatch} />
        )
    }else if(lessonStates.lessonCompleted && !lessonStates.startQuestion){
        return(
            <QuestionPrompt state={lessonStates} dispatch={dispatch}  />
        )
    }else if(lessonStates.lessonCompleted && lessonStates.startQuestion){
        return(
            <TrueOrFalseQuestions state={lessonStates} dispatch={dispatch}  />
        )

    }




}



function BasicLessons({state, dispatch}){
    const {renderAsking, setRenderAsking} = useState(false);
    const { isPlaying, playAudio, stopAudio } = useContext(AudioContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [error, setError] = useState(null);
    //It is basicLessonData.
    const progressWidth = Math.round(((currentIndex + 1) / basicLessonData.length ) * 100);
    const mainCardTitle = "Introduction"
    console.log("Lesson Completed " + state.lessonCompleted)
    console.log("Start Question " + state.startQuestion)
    /*
    * onClick={() => (language === English ? speakEnglishWords() : playAudio())}
    * */
    //console.log("Current Index: " + currentIndex)
    const getNextLesson = () => {
        if (currentIndex >= basicLessonData.length) {
            setCurrentIndex(0);
        }
        else {
            if (currentIndex === basicLessonData.length -1) {
                //console.log('final one')
                dispatch({ type: "SET_LESSON_COMPLETED", payload: true });
                //setError('No more items to show');
            }else{
                setError(null);
                setCurrentIndex(currentIndex + 1);
            }
        }
        //console.log('NEW INDEX ' + currentIndex)
    };

    const getPreviousLesson = () => {
        if (currentIndex === 0) {
            setError('No previous items');
        } else {
            setError(null)
            setCurrentIndex(currentIndex - 1);
        }
    };
    return(
        <div className="overall_lessons_container">
            {basicLessonData.length > 0  && (
                <div >
                    <div className="lesson_card">
                        <h3 className="lesson_card_heading_title"> {mainCardTitle + ": "+ basicLessonData[currentIndex].EnglishWord}
                        </h3>
                        <button className=" volume_icon lesson_volume_icon main_audio" onClick={()=>{playAudio(new Audio(introductionAudio))}}  >
                            <i className="material-icons" alt="help icon">volume_up</i>
                        </button>
                    </div>
                    <div className="lesson_card_visuals">
                        <div className="lesson_card_media">
                            <img src={basicLessonData[currentIndex].Image} className="card_lesson_image"/>
                        </div>
                        <div className="lesson_card_keywords">
                            {basicLessonData[currentIndex].KeyMessageEnglish}
                            <div className="audio_icons">
                                <div className="volume_button_divs">
                                    <div>🇬🇭</div>
                                    <button className=" volume_icon lesson_volume_icon keyword_volume_icon" onClick={()=>{playAudio(new Audio(introductionAudio))}}  >
                                        <i className="material-icons" alt="help icon">volume_up</i>
                                    </button>
                                </div>

                                <div className="volume_button_divs">
                                    <div>🇬🇧</div>
                                    <button className=" volume_icon lesson_volume_icon keyword_volume_icon" onClick={()=>{playAudio(new Audio(introductionAudio))}}  >
                                        <i className="material-icons" alt="help icon">volume_up</i>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="lesson_buttons_div">
                        <button onClick={getPreviousLesson} disabled={currentIndex===0} className="lesson_buttons icon-buttons">
                            <i className="material-icons" alt="help icon">arrow_back</i>
                            <p>Back</p>
                        </button>
                        <button onClick={getNextLesson} disabled={currentIndex === basicLessonData.length} className="lesson_buttons icon-buttons">
                            <p>Next </p>
                            <i className="material-icons" alt="help icon">arrow_forward</i>

                        </button>

                    </div>

                </div>


            )}
            <div className="testprogressbar" className="progress_bar_style">
                <span  className="progress_text_style">{progressWidth}%</span>
                <progress id="file" value={progressWidth} max="100"> </progress>
            </div>

            {/*   <div className="progress_bar_padding">
                <div className="progress_bar_main">
                    <div className="progress_bar_secondary"
                         style={{ width: `${progressWidth}%` }}
                    >
                        <div className="progress_bar_text_container">
                            <p className="lesson_progress_text">{currentIndex + 1}/ {basicLessonData.length}</p>
                        </div>
                    </div>
            </div>
            </div>*/}



        </div>

    )
}

function QuestionPrompt({state, dispatch}) {
    const { isPlaying, playAudio, stopAudio } = useContext(AudioContext);
    function notReady(){
        console.log('not ready is being clicked')
        dispatch({ type: "SET_LESSON_COMPLETED", payload: false });
    }
    function ready(){
        dispatch({ type: "SET_START_QUESTION", payload: true });

    }
    return(
        <div className="questionPending">
            <h2 className="question_title"> Ready for the questions?</h2>
            <div className="question_audio_icons">
                <div className="volume_button_divs">
                    <div>🇬🇭</div>
                    <button className=" volume_icon lesson_volume_icon keyword_volume_icon" onClick={()=>{playAudio(new Audio(introductionAudio))}}  >
                        <i className="material-icons" alt="help icon">volume_up</i>
                    </button>
                </div>

                <div className="volume_button_divs">
                    <div>🇬🇧</div>
                    <button className=" volume_icon lesson_volume_icon keyword_volume_icon" onClick={()=>{playAudio(new Audio(introductionAudio))}}  >
                        <i className="material-icons" alt="help icon">volume_up</i>
                    </button>
                </div>
            </div>
            <div className="question_buttons">
                <button  className="lesson_buttons icon-buttons" onClick={ready}>
                    <p>Yes</p>
                    <i className="material-icons" alt="help icon">thumb_up_alt</i>
                </button>
                <button  className="lesson_buttons icon-buttons" onClick={notReady}>
                    <p>No</p>
                    <i className="material-icons" alt="help icon">thumb_down_off_alt</i>
                </button>
            </div>


        </div>

    )
}

function TrueOrFalseQuestions({state, dispatch}){
    const { isPlaying, playAudio, stopAudio } = useContext(AudioContext);
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const question = trueOrFalseQuestions[currentQuestion];
    console.log(question)
    return(
        <div>
        <h2>True or False Questions</h2>
            <div>
                <div className="true_or_false_questions">
                    <h3>Question Number: {question.id}</h3>
                    <p className="questions"> {question.Question}</p>
                </div>
                <div className="question_audio_icons">
                    <div className="volume_button_divs">
                        <div>🇬🇭</div>
                        <button className=" volume_icon lesson_volume_icon keyword_volume_icon" onClick={()=>{playAudio(new Audio(introductionAudio))}}  >
                            <i className="material-icons" alt="help icon">volume_up</i>
                        </button>
                    </div>

                    <div className="volume_button_divs">
                        <div>🇬🇧</div>
                        <button className=" volume_icon lesson_volume_icon keyword_volume_icon" onClick={()=>{playAudio(new Audio(introductionAudio))}}  >
                            <i className="material-icons" alt="help icon">volume_up</i>
                        </button>
                    </div>
                </div>
            </div>


    </div>
    )
}



export default Basics;