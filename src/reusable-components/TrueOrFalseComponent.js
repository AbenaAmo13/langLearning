import {useContext, useEffect, useState, useRef} from "react";
import AudioPlayer from "./LessonAudioPlayer";
import {QuestionContext} from "../context/QuestionsContext";
import quizImage from "../images/quizImage.png";
import QuestionPrompt from "./QuestionPrompt";
import testing from "../audios/testing.mp3"
import LessonAudioPlayer from "./LessonAudioPlayer";
import questionPromptEnglishAudio from "../audios/basics/trueorfalseprompt.ogg"
import questionPromptTwiAudio from "../audios/transitionalaudios/questiontrueorfalsetwi.mp3"

function TrueOrFalseComponent(){
    let { state, correctNumberAnswers, handleNextQuestion, checkAnswer, nextSetOfQuestions, selectedAnswer, currentQuestion, dispatch, handlePrevQuestion} = useContext(QuestionContext)
    let trueOrFalseQuestions = state.questions[0];
    const [optionSelected, setOptionSelected] = useState(null)
    const inputRefs = useRef([]);
    let question = trueOrFalseQuestions[currentQuestion];
    const options =["True", "False"];
    const QuestionPromptData = {
        cardTextContent:[{
                        text: "Next, we will give you some sentences and you tell us if they are true or false. If you're ready to start, click the thumbs up. If you're not ready, click the thumbs down."
                    }],
        quizImage : quizImage,
        cardTitle: "True or False",
        EnglishAudio: questionPromptEnglishAudio,
        TwiAudio:questionPromptTwiAudio,
        TwiTitle: "nokre anaa ntoro",
        questionType: "trueorfalse",
        questions: question
    }

    useEffect(()=>{
        dispatch({ type: "SET_QUESTION_STARTED", payload: { lesson: state.id, started: false }});


    }, [state.lessonCompleted])




    useEffect(()=>{
        console.log('This gets here')
        setOptionSelected(null)
        console.log(inputRefs.current)
        inputRefs.current.forEach((input) =>{
           input.checked = false;
        });

    }, [currentQuestion])
    const handleOptionChange = (event) => {
        setOptionSelected(event.target.value);

    };


    const handleAnswers=()=>{
        checkAnswer(question, optionSelected);
    }
    const renderQuestions=()=>{
        return(
            <div className="">
                <div className="mcq_main_container mcq-container">
                    <div className="mcqCard orangeCardOutline mcq-containe overall_lessons_container ">
                        <div className="true_or_false_questions">
                            <h3>Question Number: {question.id}</h3>
                            <p className="text_content"> {question.Question}</p>
                        </div>
                        <div>

                                {options.map((option, index) => (
                                    <div key={index} className="input_options">
                                        <label>
                                            <input type="radio" value={option} name="options" required onClick={handleOptionChange}
                                                   ref={(el) => {
                                                       if (el) {
                                                           inputRefs.current[index] = el;
                                                       }
                                                   }}
                                            />
                                            <span className="radio-label">{option}</span>
                                            {option.toLowerCase() === 'true' ? <i className="material-icons" alt="help icon">thumb_up_alt</i>
                                                : <i className="material-icons" alt="help icon">thumb_down_alt</i>}

                                        </label>
                                    </div>
                                ))}
                                {!selectedAnswer &&
                                (
                                    <div className="mcq_actions">
                                        <LessonAudioPlayer
                                            twiAudio={question.TwiAudio}
                                            englishAudio={question.EnglishAudio}
                                            twiAudioName={question.TwiAudio}
                                            englishAudioName={question.EnglishAudio}

                                        />
                                        <button type="submit" className="lesson_buttons mcq_buttons" onClick={()=>handleAnswers()} >
                                            <p>CHECK ANSWER </p>
                                            <i className="material-icons" alt="help icon">flaky</i>
                                        </button>
                                    </div>
                                )

                                }
                        </div>

                        {selectedAnswer && (
                            <div>
                                {selectedAnswer === question.Answer ? (
                                    <div className="correct_answer">
                                        <div className="correct_answer_subdiv" >
                                            <p className="questions">You got it right!</p>
                                            <button className="correct_answer_icon">
                                                <i className="material-icons correct_answer_icons" alt="account icon" > check_circle </i>
                                            </button>
                                        </div>
                                        <p className="questions"> You have {state.scores} points!</p>
                                    </div>
                                ) : (
                                    <div className="wrong_answer">
                                        <div className="wrong_answer_subdiv">
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
                    </div>
                    <div  className="overall_lessons_container action_buttons">
                        <button onClick={()=> handlePrevQuestion()} disabled={currentQuestion === 0}  className="lesson_buttons mcq_buttons">
                            <i className="material-icons" alt="help icon">arrow_back</i>
                            <p>BACK </p>
                        </button>
                        <button onClick={()=> handleNextQuestion()} disabled={currentQuestion===trueOrFalseQuestions.length}  className="lesson_buttons mcq_buttons" >
                            <p>NEXT </p>
                            <i className="material-icons" alt="help icon">arrow_forward</i>
                        </button>
                    </div>
                </div>

            </div>
        );
    }

    const renderResults=()=>{
        return(
            <div className="card_component_container lightOrangeCardOutline padding">
                <h3 className="questions">You got {correctNumberAnswers} out of {trueOrFalseQuestions.length} questions correct</h3>
                <h3>To go to the next question, click the button:</h3>
                <div className="flex">
                    <button className="lesson_buttons mcq_buttons" onClick={()=> nextSetOfQuestions("t/f")}>
                        <p>Next </p>
                        <i className="material-icons" alt="help icon">arrow_forward</i>
                    </button>
                    <AudioPlayer/>
                </div>

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