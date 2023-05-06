import React, { useState } from 'react';

function MatchingQuestion() {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [correctAnswers, setCorrectAnswers] = useState({
        leftColumn: {
            label: 'Ghana Health Service',
            value: 'ghs'
        },
        rightColumn: {
            label: 'National Health Insurance Scheme (NHIS)',
            value: 'nhis'
        }
    });
    const leftColumnItems = [
        { label: 'Ghana Health Service', value: 'ghs' },
        { label: 'NHIS Registration', value: 'nhisReg' },
        { label: 'Korle Bu Hospital', value: 'korleBu' },
    ];
    const rightColumnItems = [
        { label: 'ɔman Apɔmuden nsiakyibaa', value: 'nhis' },
        { label: 'Tema General Hospital', value: 'tema' },
        { label: 'National Health Insurance Scheme (NHIS)', value: 'nhis' },
    ];

    const handleAnswerSelection = (column, value) => {
        setSelectedAnswers(prevState => ({ ...prevState, [column]: value }));
    };

    const checkAnswers = () => {
        const isCorrect =
            selectedAnswers.leftColumn === correctAnswers.leftColumn.value &&
            selectedAnswers.rightColumn === correctAnswers.rightColumn.value;
        alert(isCorrect ? 'Correct!' : 'Incorrect :(');
    };

    return (
        <div className="matching-question">
            <h2>Match the left column with the right column</h2>
            <div className="matching_options_container">
                <div className="matching_left_column">
                    {leftColumnItems.map(item => (
                        <button
                            key={item.value}
                            onClick={() => handleAnswerSelection('leftColumn', item.value)}
                            disabled={selectedAnswers.leftColumn && selectedAnswers.leftColumn !== item.value}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
                <div className="matching_right_column">
                    {rightColumnItems.map(item => (
                        <button
                            key={item.value}
                            onClick={() => handleAnswerSelection('rightColumn', item.value)}
                            disabled={selectedAnswers.rightColumn && selectedAnswers.rightColumn !== item.value}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            <button onClick={checkAnswers}>Submit</button>
        </div>
    );
}

export default MatchingQuestion;
