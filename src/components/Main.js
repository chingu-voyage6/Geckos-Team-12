import React from 'react';

import AskQuestionPrompt from './AskQuestionPrompt';
import QuestionCard from './QuestionCard'; 

const sampleQuestionCards = [
    {
        id: 1,
        question: "Sample question 1?",
        answerUserId: 428,
        answerDate: 0,
        answerText: "This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. "
    }
]

const Main = () => (
    <div className="main-wrapper">
        <div className="card">
            <AskQuestionPrompt />
        </div>
        {sampleQuestionCards.length === 0
        ?
        ( <p>No answers available</p> )
        :
        (
            sampleQuestionCards.map((answer) => (
                <div className="card">
                <QuestionCard 
                    key={answer.id}
                    {...answer}
                />
                </div>
            ))
        )
        }
    </div>
);

export default Main;