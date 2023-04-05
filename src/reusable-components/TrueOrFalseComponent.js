import {useContext, useEffect, useState} from "react";
import AudioPlayer from "./LessonAudioPlayer";
import {QuestionContext} from "../context/Questions";
import quizImage from "../images/quizImage.png";
import QuestionPrompt from "./QuestionPrompt";

function TrueOrFalseComponent(){
    let { state, correctNumberAnswers, handleNextQuestion, checkAnswer, nextSetOfQuestions, selectedAnswer, currentQuestion, dispatch} = useContext(QuestionContext)
    let trueOrFalseQuestions = state.questions[0];
    let question = trueOrFalseQuestions[currentQuestion];
    const QuestionPromptData = {
        cardTextContent:[{
                        text: "Next we have a true or false activity. We will ask you whether some sentences are true or false." +
                            " If you are ready to start the activity, click the thumbs up button else click the thumbs down button."
                    }],
        quizImage : quizImage,
        cardTitle: "True or False",
        EnglishAudio: "",
        TwiAudio:"",
        questionType: "trueorfalse",
        questions: question
    }

    useEffect(()=>{
        dispatch({ type: "SET_QUESTION_STARTED", payload: { lesson: state.id, started: false }});


    }, [state.lessonCompleted])
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
                                className={`lesson_buttons icon-buttons ${selectedAnswer === 'True' ? 'selected' : ''}`}
                                onClick={()=>checkAnswer(question, "True")}
                                disabled={selectedAnswer !== null}
                            >
                                <p>True</p>
                                <i className="material-icons" alt="help icon">thumb_up_alt</i>
                            </button>
                            <button
                                className={`lesson_buttons icon-buttons ${selectedAnswer === 'False' ? 'selected' : ''}`}
                                onClick={()=>checkAnswer(question, "False")}
                                disabled={selectedAnswer !== null}
                            >
                                <p>False</p>
                                <i className="material-icons" alt="help icon">thumb_down_off_alt</i>
                            </button>
                        </div>
                    </div>
                    {selectedAnswer && (
                        <div>
                            {selectedAnswer === question.Answer ? (
                                <div className="correct_answer">
                                    <p className="questions">You got it right!</p>
                                    <button className="correct_answer_icon">
                                        <i className="material-icons correct_answer_icons" alt="account icon" > check_circle </i>
                                    </button>
                                    <p className="questions"> You have {state.scores} points!</p>
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
                <h3 className="questions">You got {correctNumberAnswers} out of {trueOrFalseQuestions.length} questions correct</h3>
                <h3>To go to the next question, click the button:</h3>
                <button onClick={()=> nextSetOfQuestions("t/f")}>Next Questions</button>
                <AudioPlayer/>
                <div>
                </div>
            </div>
        )
    }




    return(
        <div>

            {!state.questionStarted ? (
                /* Render the question prompt */
                <QuestionPrompt state={state} dispatch={dispatch} questionPromptData={QuestionPromptData}/>

            ) : (
                /* Render the rest of the condition */
                currentQuestion < trueOrFalseQuestions.length ? renderQuestions() : renderResults()

            )}


        </div>

    )
}

export default TrueOrFalseComponent;