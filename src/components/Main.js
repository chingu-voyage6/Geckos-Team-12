import React from 'react';
import { connect } from 'react-redux';

import AskQuestionModal from './AskQuestionModal';
import QuestionCard from './QuestionCard'; 
import homepageQuestionAndAnswerSelector from '../selectors/homepageQuestionAndAnswer';

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
                    key={qa.answer.uid}
                    { ...qa }
                />
                </div>
            ))
        )
        }
    </div>
);

const mapStateToProps = (state, props) => ({
    questionsAndAnswers: homepageQuestionAndAnswerSelector(state.questions, state.answers)
});

export default connect(mapStateToProps)(Main);