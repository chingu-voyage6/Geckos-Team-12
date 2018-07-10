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
    truncatedAnswer = this.props.answerText.split(" ").slice(0,100).join(" ");

    render() {
        return (
            <div>
                <h2>{this.props.question}</h2>
                <UserProfileSnippet />

                { this.truncatedAnswer === this.props.answerText && this.handleMoreToggle() }

                {
                    this.state.more
                        ?
                    <p>{this.props.answerText}</p>
                        :
                    <p>{ this.truncatedAnswer }... <a onClick={this.handleMoreToggle}>(read more)</a></p>
                }


                { this.state.more && <AnswerActionsWidget />}
                { this.state.more && <CommentsWidget />}
            </div>
        );
    }
}

export default QuestionCard;