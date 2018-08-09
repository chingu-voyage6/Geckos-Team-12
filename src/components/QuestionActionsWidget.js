import React from 'react';
import FontAwesome from 'react-fontawesome';

import AnswerQuestionModal from './AnswerQuestionModal';

const QuestionActionsWidget = ({ questionId }) => (
    <div class="wrapper space-between">
        <div>
            <AnswerQuestionModal 
                questionId={ questionId }
            />
        </div>
        <div>
        <FontAwesome name='facebook' /> | <FontAwesome name='twitter' /> | <FontAwesome name='link' /> 
        </div>
    </div>
);

export default QuestionActionsWidget;