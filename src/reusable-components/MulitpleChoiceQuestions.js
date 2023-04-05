import {useContext, useState} from "react";
import {QuestionContext} from "../context/Questions";
import LessonAudioPlayer from "./LessonAudioPlayer";
import AudioPlayer from "./LessonAudioPlayer";


function MultipleChoiceQuestions() {
    let { state, correctNumberAnswers, handleNextQuestion, checkAnswer, handlePrevQuestion, currentQuestion, selectedAnswer,nextSetOfQuestions } = useContext(QuestionContext)
    const [optionSelected, setOptionSelected] = useState(null)
    let MCQQuestions = state.questions[1];
    let question = MCQQuestions[currentQuestion];
    console.log(currentQuestion)


    const handleOptionChange = (event) => {
        setOptionSelected(event.target.value);

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        checkAnswer(question, optionSelected);
    };

    const renderMCQS = () => {
        return (
            <div>

                <h1>{question.Question}</h1>
                <LessonAudioPlayer twiAudio={question.twiAudio} englishAudio={question.TwiAudio}/>
                <form onSubmit={handleSubmit}>
                {question.Options.map((option, index) => (
                    <div key={index}>
                        <input type="radio" value={option} name="options" onChange={handleOptionChange} />
                        <label htmlFor={option}> {option}</label>
                    </div>
                ))}
                <button type="submit">Check Answer</button>
                </form>
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
                <button onClick={()=> handlePrevQuestion()}  disabled={currentQuestion === 0}>Previous Question</button>

                <button onClick={()=> handleNextQuestion()} disabled={currentQuestion===MCQQuestions.length}>Next Question</button>

            </div>
        )
    }

    const renderResults=()=>{
        return(
            <div>
                <h3 className="questions">You got {correctNumberAnswers} out of {MCQQuestions.length} questions correct</h3>
                <h3>To go to the next question, click the button:</h3>
                <button onClick={()=> nextSetOfQuestions("mcqs")}>Next Questions</button>
                <AudioPlayer/>
                <div>
                </div>
            </div>
        )
    }

    return (
        <div>

            {
                (
                    currentQuestion < MCQQuestions.length ? renderMCQS(): renderResults()
                )

            }
        </div>
    );
}


export default MultipleChoiceQuestions;