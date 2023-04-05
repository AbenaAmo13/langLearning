import {useContext, useEffect} from "react";
import {QuestionContext} from "../context/Questions";


function MultipleChoiceQuestions() {
    let { state, correctNumberAnswers, handleNextQuestion, checkAnswer, nextSetOfQuestions, selectedAnswer, currentQuestion, dispatch} = useContext(QuestionContext)
    let MCQQuestions = state.questions[1];
    let question = MCQQuestions[currentQuestion];
    console.log(question)


    const renderMCQS = () => {
        return (
            <div>

                <h1>{question.Question}</h1>
                {question.Options.map((option, index) => (
                    <div key={index}>
                        <input type="radio" value={option} />
                        <label htmlFor={option}> {option}</label>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            {renderMCQS()}
            {/*{state.questionType === "mcqs" && question && renderMCQS()}*/}
        </div>
    );
}


export default MultipleChoiceQuestions;