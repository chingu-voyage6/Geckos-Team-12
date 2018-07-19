import React from 'react';

import AnswerCard from './AnswerCard';

import AnswerActionsWidget from './AnswerActionsWidget';
import CommentsWidget from './CommentsWidget';
import UserProfileSnippet from './UserProfileSnippet';

//TODO:
// UserProfileSnippet needs the answer's user ID passed to it as a prop

const QuestionCard = (props) => (
    <div>
        <h2>{props.question}</h2>
        <AnswerCard { ...props } />
    </div>
);

export default QuestionCard;