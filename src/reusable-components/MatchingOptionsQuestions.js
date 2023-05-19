import {useContext, useEffect, useState, useRef} from "react";
import {QuestionContext} from "../context/QuestionsContext";
import LessonAudioPlayer from "./LessonAudioPlayer";
import AudioPlayer from "./LessonAudioPlayer";
import QuestionPrompt from "./QuestionPrompt";
import quizImage from "../images/quizImage.webp";

import RenderResults from "./RenderResults";


function MatchingOptionsQuestions({id}) {
    let { state, correctNumberAnswers,
        handleNextQuestion, checkAnswer,
        handlePrevQuestion, currentQuestion,
        selectedAnswer,nextSetOfQuestions,
        setSelectedAnswer, isPlaying,
        dispatch
        } = useContext(QuestionContext)
    const [rightOptionSelected, setRightOptionSelected] = useState(null)
    const [leftOptionSelected, setLeftOptionSelected] = useState(null)
    const [correctPair, setCorrectPair] = useState([]);
    const [pairMatched, setPairMatched] = useState(0)
    const [correctMatches, setCorrectMatches] = useState(0)
    const [numberOfMatchPairs, setNumberOfMatchPairs] = useState(0)
    const inputRefs = useRef([]);
    const rightInputRefs = useRef([])
    let MatchingOptions = state.questions[id];
    let question = MatchingOptions[currentQuestion];
    let numberOfPairs = question
    //console.log(question)
    const QuestionPromptData = {
        cardTextContent:[{
            text: "Next we have a matching game where we will get to match the " +
                " If you are ready to start playing, click the thumbs up, if not click the thumbs down."
        }],
        quizImage : quizImage,
        cardTitle: "Matching Options Game",
        cardTitleTwi: "twiTitle",
        EnglishAudio: "",
        TwiAudio: "",
        questionType: "matching",
        questions: question
    }

    useEffect(()=>{
        setLeftOptionSelected(null)
        setRightOptionSelected(null)
        if(inputRefs.current){
            inputRefs.current.forEach((input) =>{
                if(input){
                    input.checked = false;
                }
            });
        }
        if(rightInputRefs.current){
            rightInputRefs.current.forEach((input) =>{
                if(input){
                    input.checked = false;
                }
            });
        }
    }, [currentQuestion])
    //console.log(isPlaying)

    useEffect(()=>{
        if(question){
            if(pairMatched < question.correctAnswerPairs.length){
                console.log("The correct number: " + correctNumberAnswers)
                const timer = setTimeout(() => {
                    setSelectedAnswer(null);
                    question.isAnswered = false
                }, 2000);
                return () => clearTimeout(timer);
            }

        }
    }, [selectedAnswer])

    useEffect(()=>{
        const numberOfMatchPairs = MatchingOptions.reduce((total, question) => {
            return total + question.correctAnswerPairs.length;
        }, 0);
        setNumberOfMatchPairs(numberOfMatchPairs)
    }, [])


    const handleLeftOptionChange=(event)=>{
        const leftSelectedOption = event.target.value;
        const selectedColumn = event.target.parentElement.parentElement.parentElement.className;
        if (selectedColumn === "matching_left_column") {
            inputRefs.current.forEach((left_input) => {
                if (left_input.value !== leftSelectedOption) {
                    left_input.checked = false;
                }
            });
        }
        setLeftOptionSelected(leftSelectedOption)
    }
    const handleRightOptionChange=(event)=>{
        const rightSelectedOption = event.target.value;
        const selectedColumn = event.target.parentElement.parentElement.parentElement.className;
        if (selectedColumn === "matching_right_column") {
            rightInputRefs.current.forEach((right_input) => {
                if (right_input.value !== rightSelectedOption) {
                   // console.log('it enters here')
                    right_input.checked = false;
                }
            });
        }
        setRightOptionSelected(rightSelectedOption)
    }

    useEffect(()=>{
        console.log('The correct pair is: '+ correctPair)
    }, [correctPair])


    const handleAnswers=()=> {
        if(leftOptionSelected && rightOptionSelected){
            let optionPair = {
                leftColumn: leftOptionSelected,
                rightColumn: rightOptionSelected,
            }
            console.log(optionPair)
            //This is to ensure that the pair option selected is the same as the one defined in the healthcare data bit
            const isOptionPairCorrect = question.correctAnswerPairs.some((pair) => {
                return Object.is(pair.leftColumn, optionPair.leftColumn) && Object.is(pair.rightColumn, optionPair.rightColumn);
            });
            console.log("Status is" + isOptionPairCorrect)
           if(isOptionPairCorrect){
               const confirmMatched = "Matched"
               checkAnswer(question, confirmMatched)
               setPairMatched(prevValue => prevValue + 1);
               setCorrectMatches(prevValue => prevValue + 1);
           }else{
               const denyMatched = "UnMatched"
               checkAnswer(question, denyMatched)
               setPairMatched(prevValue => prevValue + 1);
               //Find the correct pair:
               const correctPairValues = question.correctAnswerPairs.find(pair => pair.leftColumn === leftOptionSelected);
               console.log(correctPairValues)
               setCorrectPair([correctPairValues.leftColumn, correctPairValues.rightColumn])
           }
            //This function is to disable the option that were selected once there has been a match
            inputRefs.current.forEach((input) => {
                if (input.value === leftOptionSelected) {
                    //console.log(input.value)
                    input.disabled = true;
                }
            });
            rightInputRefs.current.forEach((input) => {
                if (input.value === rightOptionSelected) {
                    //console.log(input.value)
                    input.disabled = true;
                }
            });
        }
    }

    const renderMCQS = () => {
        return (
            <div className="mcq_main_container">
                <div className="mcqCard orangeCardOutline overall_lessons_container">
                    <h3>{question.Task}</h3>
                    <div className="matching_options_container">
                        <div className="matching_left_column">
                            {question.leftColumn.map((option, index) => (
                                <div key={index} className="input_options">
                                    <label>
                                        <input type="radio" value={option}  name={`leftColumn-${index}`} onClick={handleLeftOptionChange} required key={index} ref={(el) => inputRefs.current[index] = el}  />
                                        <span className="radio-label">{option}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="matching_right_column">
                            {question.rightColumn.map((rightoption, rightindex) => (
                                <div key={rightindex} className="input_options">
                                    <label>
                                        <input   type="radio"
                                                 value={rightoption}
                                                 name={`right-option-${rightindex}`}
                                                 onClick={handleRightOptionChange}
                                                 required
                                                 key={rightindex}
                                                 ref={(el) => rightInputRefs.current[rightindex] = el}   />
                                        <span className="radio-label"> {rightoption}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
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
                                    <p className="questions">The correct  pair answer is: {correctPair[0]} and {correctPair[1]} </p>
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
                <div className="overall_lessons_container action_buttons">
                    <button onClick={()=> handlePrevQuestion()}  /*disabled={currentQuestion === 0}*/ className="lesson_buttons mcq_buttons">
                        <i className="material-icons" alt="help icon">arrow_back</i>
                        <p>BACK </p>
                    </button>
                    <button onClick={()=> handleNextQuestion()} disabled={currentQuestion===MatchingOptions.length} className="lesson_buttons mcq_buttons">
                        <p>NEXT </p>
                        <i className="material-icons" alt="help icon">arrow_forward</i>
                    </button>
                </div>
            </div>
        )
    }

    const matchingResults=()=>{
        return (
            <div className="card_component_container lightOrangeCardOutline padding">
                <h3 className="questions">You matched {correctMatches} out of {numberOfMatchPairs} pairs correctly</h3>
                <h3>To continue, click the square button with the right/forward arrow:</h3>
                <div className="flex">
                    <button onClick={()=> nextSetOfQuestions()} className="lesson_buttons mcq_buttons">
                        <p>Next </p>
                        <i className="material-icons" alt="help icon">arrow_forward</i>
                    </button>
                    <AudioPlayer
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
                    <QuestionPrompt state={state} dispatch={dispatch} questionPromptData={QuestionPromptData} id={id}/>
                ) :
                (
                    currentQuestion < MatchingOptions.length ? renderMCQS(): matchingResults()
                )

            }
        </div>
    );
}


export default MatchingOptionsQuestions;