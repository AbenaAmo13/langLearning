import {useContext, useEffect, useState} from "react";
import {AudioContext} from "../context/AudioContext";
import answeredCorrectly from "../audios/basics/answeredCorrectlyv2.ogg";
import AudioPlayer from "./LessonAudioPlayer";
import introductionAudio from "../audios/testing.mp3";

function QuestionsTrueOrFalse({state, dispatch}){
    const [CorrectAudio] = useState(new Audio(answeredCorrectly))
    console.log(state.questions)
    const {  playAudio } = useContext(AudioContext);
    const question = state.questions[state.currentQuestion];
    const [correctNumberAnswers, setCorrectNumberAnswers] = useState(0)
    useEffect(() => {
        CorrectAudio.preload = 'auto';
        CorrectAudio.load();
    }, [CorrectAudio]);

    function checkAnswer(question, answer){
        let correctAnswer = question.Answer;
        dispatch({ type: "SET_SELECTED_ANSWER", payload: answer });
        if(!question.isAnswered){
            if(answer===correctAnswer){
                playAudio(CorrectAudio);
                dispatch({ type: "SET_SCORE", payload: { score: "BasicsScore", value: 10 }});
                setCorrectNumberAnswers(correctNumberAnswers+ 1)
            }
        }
        question.isAnswered = true;
    }

    function handleNextQuestion(){
        dispatch({ type: "SET_SELECTED_ANSWER", payload: null });
        dispatch({ type: "SET_CURRENT_QUESTION", payload: state.currentQuestion + 1 });
    }



    const renderQuestions=()=>{
        return(
            <div className="center">
                <div>
                    <h2 className="question_section_title">True or False Questions</h2>
                </div>
                <div>
                    <div className="true_or_false_questions">
                        <h3>Question Number: {question.id}</h3>
                        <p className="questions"> {question.Question}</p>
                    </div>
                    <AudioPlayer englishAudio={question.EnglishAudio} twiAudio={question.TwiAudio}/>
                    <div>
                        <div className="question_buttons">
                            <button
                                className={`lesson_buttons icon-buttons ${state.selectedAnswer === 'True' ? 'selected' : ''}`}
                                onClick={()=>checkAnswer(question, "True")}
                                disabled={state.selectedAnswer !== null}
                            >
                                <p>True</p>
                                <i className="material-icons" alt="help icon">thumb_up_alt</i>
                            </button>
                            <button
                                className={`lesson_buttons icon-buttons ${state.selectedAnswer === 'False' ? 'selected' : ''}`}
                                onClick={()=>checkAnswer(question, "False")}
                                disabled={state.selectedAnswer !== null}
                            >
                                <p>False</p>
                                <i className="material-icons" alt="help icon">thumb_down_off_alt</i>
                            </button>
                        </div>
                    </div>
                    {state.selectedAnswer && (
                        <div>
                            {state.selectedAnswer === question.Answer ? (
                                <div className="correct_answer">
                                    <p className="questions">You got it right!</p>
                                    <button className="correct_answer_icon">
                                        <i className="material-icons correct_answer_icons" alt="account icon" > check_circle </i>
                                    </button>
                                    <p className="questions"> You have {state.scores.BasicsScore} points!</p>
                                </div>
                            ) : (
                                <div className="correct_answer">
                                    <div>
                                        <p className="questions">Sorry, that's incorrect.</p>
                                        <button className="incorrect_answer_icon">
                                            <i className="material-icons correct_answer_icons" alt="account icon" > cancel </i>
                                        </button>
                                    </div>
                                    <p className="questions">The correct answer is: {question.Answer}</p>
                                    <AudioPlayer />
                                </div>
                            )}
                        </div>
                    )}

                    <button onClick={()=> handleNextQuestion()}>Next Question</button>

                </div>
                <div>
                </div>
            </div>
        );
    }

    const renderResults=()=>{
        return(
            <div>
                <h3 className="questions">You got {correctNumberAnswers} out of {state.questions.length} questions correct</h3>
                <div>
                </div>
            </div>
        )
    }
    return(
        <div>
            {
                state.currentQuestion < state.questions.length ? renderQuestions() : renderResults()
            }
        </div>

    )
}

export default QuestionsTrueOrFalse;