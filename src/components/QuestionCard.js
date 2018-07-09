import React from 'react';

import AnswerActionsWidget from './AnswerActionsWidget';
import CommentsWidget from './CommentsWidget';
import UserProfileSnippet from './UserProfileSnippet';

//TODO:
// UserProfileSnippet needs the answer's user ID passed to it as a prop

class QuestionCard extends React.Component {
    state = {
        more: false
    }
    handleMoreToggle = () => {
        this.setState( () => ({
            more: true
        }));
    }
    render() {
        return (
            <div>
                <h2>{this.props.question}</h2>
                <UserProfileSnippet />
                <p>Answer truncated to 100 words then... (<a onClick={this.handleMoreToggle}>more</a>)</p>
                { this.state.more && <AnswerActionsWidget />}
                { this.state.more && <CommentsWidget />}
            </div>
        );
    }
}

export default QuestionCard;