import React from 'react';
import FontAwesome from 'react-fontawesome';

import AnswerQuestionModal from './AnswerQuestionModal';

const QuestionActionsWidget = ({ answerId }) => (
    <div class="wrapper space-between">
        <div>
            <AnswerQuestionModal />
        </div>
        <div>
        <FontAwesome name='facebook' /> | <FontAwesome name='twitter' /> | <FontAwesome name='link' /> 
        </div>
    </div>
);

export default QuestionActionsWidget;