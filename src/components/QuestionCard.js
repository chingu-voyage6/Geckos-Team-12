import React from 'react';

import AnswerCard from './AnswerCard';

import AnswerActionsWidget from './AnswerActionsWidget';
import CommentsWidget from './CommentsWidget';

import truncateText from '../utils/truncateText';

const QuestionCard = (props) => (
    <div>
        <h2>{props.questionText}</h2>
        <AnswerCard { ...props.answer } />
    </div>
);
export default QuestionCard;