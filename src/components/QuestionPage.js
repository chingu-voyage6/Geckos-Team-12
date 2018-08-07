import React from 'react';
import { connect } from 'react-redux';

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


export const QuestionPage = (props) => (
    <div class="question-page-container">
        <div class="main-container card">
            <div class="question-display">
                <h3>{ props.question.questionText }</h3>
                <QuestionActionsWidget />
            </div>

            <h3>{props.answers.count} Answers</h3>

            { props.answers.map( (answer) => (
                <AnswerCard
                    more={true}
                    { ...answer }
                />
            )) }
        </div>
        <div>
            List of other questions goes here
        </div>
    </div>
)

const mapStateToProps = (state, props) => {
    return {
        question: state.questions.find( (question) => question.id === props.match.params.questionId ),
        answers: [
            {
                answerId: 500,
                answerUserId: 200,
                answerDate: "2018-07-01",
                answerText: "This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. "
            }
            
        ]
    }
}

export default connect(mapStateToProps)(QuestionPage);