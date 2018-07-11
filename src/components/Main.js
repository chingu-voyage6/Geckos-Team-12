import React from 'react';

import AskQuestionPrompt from './AskQuestionPrompt';
import QuestionCard from './QuestionCard'; 

const sampleQuestionCards = [
    {
        id: 1,
        question: "Sample question 1?",
        answerUserId: 2,
        answerDate: "2018-07-01",
        answerText: "This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. "
    },
    {
        id: 2,
        question: "Sample question 2?",
        answerUserId: 1,
        answerDate: "2018-07-05",
        answerText: "This is a longer string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. "
    }
]

const Main = () => (
    <div className="main-wrapper">
        <div className="card">
            <AskQuestionPrompt />
        </div>
        {sampleQuestionCards.length === 0
        ?
        ( <p>Your feed is empty. Ask a question!</p> )
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