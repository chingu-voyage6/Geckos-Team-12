import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AnswerCard from './AnswerCard';
import QuestionActionsWidget from './QuestionActionsWidget';

export const QuestionPage = (props) => (
    <div class="question-page-container">
        <div class="main-container card">
            <div class="question-display">
                <h3>{ props.question.questionText }</h3>
                <QuestionActionsWidget 
                    questionId={ props.question.uid }
                />
            </div>

            <h3>{ props.answers.length === 1 ? `1 Answer` : `${props.answers.length} Answers` }</h3>

            {
                props.answers.length > 0
                    ?
                props.answers.map( (answer) => (
                    <AnswerCard
                        more={true}
                        { ...answer }
                    />
                ))
                    :
                <p>No answers yet. Add your answer!</p>
            }
            
        </div>
        <div>
            
        </div>
    </div>
)

const mapStateToProps = (state, props) => {
    return {
        question: state.questions.find( (question) => question.uid === props.match.params.questionId),
        answers: state.answers.filter( (answer) => answer.relatedQuestionId === props.match.params.questionId)
    }
}

export default connect(mapStateToProps)(QuestionPage);