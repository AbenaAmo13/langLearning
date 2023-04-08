import {useContext, useEffect, useState} from "react";
import {QuestionContext} from "../context/QuestionsContext";
import LessonAudioPlayer from "./LessonAudioPlayer";
import AudioPlayer from "./LessonAudioPlayer";
import QuestionPrompt from "./QuestionPrompt";
import quizImage from "../images/quizImage.png";


function MultipleChoiceQuestions() {
    let { state, correctNumberAnswers,
        handleNextQuestion, checkAnswer,
        handlePrevQuestion, currentQuestion,
        selectedAnswer,nextSetOfQuestions,
        dispatch
        } = useContext(QuestionContext)
    const [optionSelected, setOptionSelected] = useState(null)
    const [answerChecked, setAnswerChecked] = useState(null);
    let MCQQuestions = state.questions[1];
    let question = MCQQuestions[currentQuestion];
    console.log(currentQuestion)
    console.log(selectedAnswer)

    const QuestionPromptData = {
        cardTextContent:[{
            text: "Next we have a multiple choice questions where you are given a question, and many answers to choose from" +
                " If you are ready to start the activity, click the thumbs up button else click the thumbs down button."
        }],
        quizImage : quizImage,
        cardTitle: "Multiple Choice Questions",
        EnglishAudio: "",
        TwiAudio:"",
        questionType: "mcqs",
        questions: question
    }

    useEffect(()=>{

        setOptionSelected(null)

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
                    <h1>{question.Question}</h1>

                        {question.Options.map((option, index) => (
                            <div key={index} className="input_options">
                                <label>
                                    <input type="radio" value={option} name="options" onChange={handleOptionChange} required key={index}  />
                                    <span className="radio-label">{option}</span>
                                </label>
                            </div>
                        ))}
                        {!selectedAnswer &&
                        (
                            <div className="mcq_actions">
                                <LessonAudioPlayer twiAudio={question.twiAudio} englishAudio={question.TwiAudio}/>
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
                                    <AudioPlayer />
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
            <div>
                <h3 className="questions">You got {correctNumberAnswers} out of {MCQQuestions.length} questions correct</h3>
                <h3>To go to the next question, click the button:</h3>
                <button onClick={()=> nextSetOfQuestions("mcq")}>Next Questions</button>
                <AudioPlayer/>
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