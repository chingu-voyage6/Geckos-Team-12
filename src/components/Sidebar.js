import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import selectQuestions from '../selectors/questionListByDate';

export const Sidebar = (props) => (
    <div>
        <h2>Recently Asked Questions</h2>
        <ul>
        { props.questions.map((question) => (
            <li>
                <Link to={`./${question.uid}`}>
                    { question.questionText }
                </Link>
            </li>
        )) }
        </ul>
    </div>
);

const mapStateToProps = (state) => ({
    questions: selectQuestions(state.questions)
})

export default connect(mapStateToProps)(Sidebar);