import React from 'react';

import AskQuestionModal from './AskQuestionModal';
import QuestionCard from './QuestionCard'; 
import { connect } from 'react-redux';

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

export const Main = (props) => (
    <div className="main-wrapper">
        <div className="card">
            <AskQuestionModal />
        </div>
        {props.questionsAndAnswers.length === 0
        ?
        ( <p>Your feed is empty. Ask a question!</p> )
        :
        (
            props.questionsAndAnswers.map((qa) => (
                <div className="card">
                <QuestionCard 
                    key={qa.topAnswerId}
                    { ...qa }
                />
                </div>
            ))
        )
        }
    </div>
);

const mapStateToProps = (state, props) => ({
    questionsAndAnswers: [
        {
            questionUid: 123,
            questionText: "Why is the sky blue?",
            answerUid: 300,
            answerText: "Because the green crayon was already used.",
            answerUserId: 500,
            answerDate: '2018-06-25'
        }
    ]
});

export default connect(mapStateToProps)(Main);