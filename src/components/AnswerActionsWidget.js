import React from 'react';
import FontAwesome from 'react-fontawesome';

const AnswerActionsWidget = ({ answerUid }) => (
    <div class="wrapper space-between larger-text">
        <div>
            <FontAwesome name='arrow-circle-up' /> Upvote | <FontAwesome name='arrow-circle-down' /> Downvote
        </div>
        <div>
        <FontAwesome name='facebook' /> | <FontAwesome name='twitter' /> | <FontAwesome name='link' /> 
        </div>
    </div>
);

export default AnswerActionsWidget;