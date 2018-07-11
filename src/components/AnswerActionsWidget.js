import React from 'react';
import FontAwesome from 'react-fontawesome';

const AnswerActionsWidget = () => (
    <div class="wrapper space-between">
        <div>
            <FontAwesome name='arrow-circle-up' /> Upvote | Downvote
        </div>
        <div>
        <FontAwesome name='facebook' /> | <FontAwesome name='twitter' /> | Copy Link
        </div>
    </div>
);

export default AnswerActionsWidget;