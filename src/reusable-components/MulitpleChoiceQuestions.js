import {useContext, useEffect, useState, useRef} from "react";
import {QuestionContext} from "../context/QuestionsContext";
import LessonAudioPlayer from "./LessonAudioPlayer";
import AudioPlayer from "./LessonAudioPlayer";
import QuestionPrompt from "./QuestionPrompt";
import quizImage from "../images/quizImage.webp";
import twiAudio from "../audios/transitionalaudios/mcqtwiaudio.mp3"
import englishAudio from "../audios/transitionalaudios/mcquestionenglish.mp3"
import RenderResults from "./RenderResults";
import {AudioContext} from "../context/AudioContext";


function MultipleChoiceQuestions({id}) {
    let {isPlaying, stopAudio} = useContext(AudioContext)
    let { state, correctNumberAnswers,
        handleNextQuestion, checkAnswer,
        handlePrevQuestion, currentQuestion,
        selectedAnswer,nextSetOfQuestions,
        dispatch
        } = useContext(QuestionContext)
    const [optionSelected, setOptionSelected] = useState(null)
    const inputRefs = useRef([]);
    let MCQQuestions = state.questions[id];
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
        checkAnswer(question, optionSelected, id);

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
                                    twiAudioName={question.IncorrectTwiAudio}
                                    englishAudioName={question.IncorrectEnglishAudio}
                                    englishAudio={ question.IncorrectEnglishAudio}
                                    twiAudio={question.IncorrectTwiAudio}

                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {selectedAnswer && (
                    <div className="overall_lessons_container action_buttons">
                        <button onClick={()=> handlePrevQuestion()}  /*disabled={currentQuestion === 0}*/ className="lesson_buttons mcq_buttons">
                            <i className="material-icons" alt="help icon">arrow_back</i>
                            <p>BACK </p>
                        </button>
                        <button onClick={()=> handleNextQuestion()} disabled={currentQuestion===MCQQuestions.length} className="lesson_buttons mcq_buttons">
                            <p>NEXT </p>
                            <i className="material-icons" alt="help icon">arrow_forward</i>
                        </button>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="mcq-container">

            {!state.questionStarted ? (
                    /* Render the question prompt */
                    <QuestionPrompt state={state} dispatch={dispatch} questionPromptData={QuestionPromptData} id={id}/>

                ) :
                (
                    currentQuestion < MCQQuestions.length ? renderMCQS():

                        <RenderResults
                            correctNumberAnswers={correctNumberAnswers}
                            questions={MCQQuestions.length}
                            nextSetOfQuestions={nextSetOfQuestions}
                            questionName= "mcq"
                        />
                )

            }
        </div>
    );
}


export default MultipleChoiceQuestions;