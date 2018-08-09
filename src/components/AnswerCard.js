import React from 'react';

import AnswerActionsWidget from './AnswerActionsWidget';
import CommentsWidget from './CommentsWidget';
import UserProfileSnippet from './UserProfileSnippet';

import truncateText from '../utils/truncateText';

//TODO:
// UserProfileSnippet needs the answer's user ID passed to it as a prop

class AnswerCard extends React.Component {
    state = {
        more: this.props.more || false,
    }

    truncatedAnswer = truncateText(this.props.answerText, 100)

    handleMoreToggle = () => {
        this.setState( () => ({
            more: true
        }));
    }

    render() {
        // Destructures the props
        const { relatedQuestionId, 
                uid, 
                relatedUserId, 
                timestamp, 
                answerText } = this.props;
        
        console.log(answerText);

        return (
            <div>
                <UserProfileSnippet />

                {
                    this.state.more
                        ?
                    <p>{answerText}</p>
                        :
                    <p>{ this.truncatedAnswer }... <a onClick={this.handleMoreToggle}>(read more)</a></p>
                }


                { this.state.more && <AnswerActionsWidget answerId={uid}/>}
                { this.state.more && <CommentsWidget answerId={uid}/>}
            </div>
        );
    }
}

export default AnswerCard;