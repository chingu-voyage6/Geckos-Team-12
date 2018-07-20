import React from 'react';

import AskQuestionModal from './AskQuestionModal';
import QuestionCard from './QuestionCard'; 

const sampleQuestionCards = [
    {
        questionId: 1,
        question: "Sample question 1?",
        answerId: 500,
        answerUserId: 200,
        answerDate: "2018-07-01",
        answerText: "This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. "
    },
    {
        questionId: 2,
        question: "Sample question 2?",
        answerId: 501,
        answerUserId: 205,
        answerDate: "2018-07-05",
        answerText: "This is a longer string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. "
    }
]

const Main = () => (
    <div className="main-wrapper">
        <div className="card">
            <AskQuestionModal />
        </div>
        {sampleQuestionCards.length === 0
        ?
        ( <p>Your feed is empty. Ask a question!</p> )
        :
        (
            sampleQuestionCards.map((answer) => (
                <div className="card">
                <QuestionCard 
                    key={answer.answerId}
                    {...answer}
                />
                </div>
            ))
        )
        }
    </div>
);

export default Main;