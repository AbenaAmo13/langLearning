import {useContext, useEffect, useState, useRef} from "react";
import {QuestionContext} from "../context/QuestionsContext";
import LessonAudioPlayer from "./LessonAudioPlayer";
import AudioPlayer from "./LessonAudioPlayer";
import QuestionPrompt from "./QuestionPrompt";
import quizImage from "../images/quizImage.webp";
import twiAudio from "../audios/transitionalaudios/mcqaudiotwi.mp3"
import englishAudio from "../audios/transitionalaudios/mcquestionenglish.mp3"


function MultipleChoiceQuestions() {
    let { state, correctNumberAnswers,
        handleNextQuestion, checkAnswer,
        handlePrevQuestion, currentQuestion,
        selectedAnswer,nextSetOfQuestions,
        dispatch
        } = useContext(QuestionContext)
    const [optionSelected, setOptionSelected] = useState(null)
    const inputRefs = useRef([]);
    let MCQQuestions = state.questions[1];
    let question = MCQQuestions[currentQuestion];
    const QuestionPromptData = {
        cardTextContent:[{
            text: "Next we have a multiple choice game where you have to select only one answer from many options " +
                " If you are ready to start playing, click the thumbs up, if not click the thumbs down."
        }],
        quizImage : quizImage,
        cardTitle: "Multiple Choice Questions",
        cardTitleTwi: "twiTitle",
        EnglishAudio: englishAudio,
        TwiAudio: twiAudio,
        questionType: "mcqs",
        questions: question
    }

    useEffect(()=>{
        setOptionSelected(null)
        if(inputRefs.current){
            inputRefs.current.forEach((input) =>{
                if(input){
                    input.checked = false;
                }
            });
        }

    }, [currentQuestion])


    const handleOptionChange = (event) => {
        setOptionSelected(event.target.value);

    };

    const handleAnswers=()=>{
        checkAnswer(question, optionSelected);

    }

    const renderMCQS = () => {
        return (
            <div className="mcq_main_container">
                <div className="mcqCard orangeCardOutline overall_lessons_container">
                    <h3>Question Number: {question.id}</h3>
                    <p className="text_content"> {question.Question}</p>
                        {question.Options.map((option, index) => (
                            <div key={index} className="input_options">
                                <label>
                                    <input type="radio" value={option} name="options" onClick={handleOptionChange} required key={index} ref={(el) => inputRefs.current[index] = el}  />
                                    <span className="radio-label">{String.fromCharCode(65 + index)}. {option}</span>
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
                                <button type="submit" className="lesson_buttons mcq_buttons"  onClick={()=>handleAnswers()}>
                                    <p>CHECK ANSWER </p>
                                    <i className="material-icons" alt="help icon">flaky</i>
                                </button>
                            </div>
                        )
                        }
                    {selectedAnswer && (
                        <div className="feedback_div">
                            {selectedAnswer === question.Answer ? (
                                <div className="correct_answer">
                                    <div className="correct_answer_subdiv">
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
                                    <AudioPlayer
                                    twiAudioName={QuestionPromptData.cardTitleTwi}
                                    englishAudioName={QuestionPromptData.cardTitle}

                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="overall_lessons_container action_buttons">
                    <button onClick={()=> handlePrevQuestion()}  disabled={currentQuestion === 0} className="lesson_buttons mcq_buttons">
                        <i className="material-icons" alt="help icon">arrow_back</i>
                        <p>BACK </p>
                    </button>
                    <button onClick={()=> handleNextQuestion()} disabled={currentQuestion===MCQQuestions.length} className="lesson_buttons mcq_buttons">
                        <p>NEXT </p>
                        <i className="material-icons" alt="help icon">arrow_forward</i>
                    </button>
                </div>
            </div>
        )
    }

    const renderResults=()=>{
        return(
            <div className="card_component_container lightOrangeCardOutline padding">
                <h3 className="questions">You got {correctNumberAnswers} out of {MCQQuestions.length} questions correct</h3>
                <h3>To go to the next question, click the button:</h3>
                <div className="flex">
                    <button onClick={()=> nextSetOfQuestions("mcq")} className="lesson_buttons mcq_buttons">
                        <p>Next </p>
                        <i className="material-icons" alt="help icon">arrow_forward</i>
                    </button>
                    <AudioPlayer
                        twiAudioName={QuestionPromptData.TwiAudio}
                        englishAudioName={QuestionPromptData.EnglishAudio}


                    />
                </div>
                <div>
                </div>
            </div>
        )
    }

    return (
        <div className="mcq-container">

            {!state.questionStarted ? (
                    /* Render the question prompt */
                    <QuestionPrompt state={state} dispatch={dispatch} questionPromptData={QuestionPromptData}/>

                ) :
                (
                    currentQuestion < MCQQuestions.length ? renderMCQS(): renderResults()
                )

            }
        </div>
    );
}


export default MultipleChoiceQuestions;