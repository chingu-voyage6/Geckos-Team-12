import React from 'react';

import AnswerCard from './AnswerCard';
import QuestionActionsWidget from './QuestionActionsWidget';

// { match.params.questionId }

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


const QuestionPage = ({ match }) => (
    <div class="question-page-container">
        <div class="main-container card">
            <div class="question-display">
                <h3>This is a sample question?</h3>
                <QuestionActionsWidget />
            </div>

            <h3>X Answers</h3>

            <AnswerCard
                more={true}
                { ...sampleQuestionCards[0] }
            />
        </div>
        <div>
            List of other questions goes here
        </div>
    </div>
)

export default QuestionPage;