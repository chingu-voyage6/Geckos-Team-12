import React from 'react';

import AnswerActionsWidget from './AnswerActionsWidget';
import CommentsWidget from './CommentsWidget';
import UserProfileSnippet from './UserProfileSnippet';

import truncateText from '../utils/truncateText';

//TODO:
// UserProfileSnippet needs the answer's user ID passed to it as a prop

class QuestionCard extends React.Component {
    state = {
        more: false
    }
    truncatedAnswer = truncateText(this.props.answerText, 100);

    handleMoreToggle = () => {
        this.setState( () => ({
            more: true
        }));
    }

    render() {
        // Destructures the props
        const { questionId, 
                question, 
                answerId, 
                answerUserId, 
                answerDate, 
                answerText } = this.props;

        return (
            <div>
                <h2>{this.props.question}</h2>
                <UserProfileSnippet />

                { this.truncatedAnswer === answerText && this.handleMoreToggle() }

                {
                    this.state.more
                        ?
                    <p>{answerText}</p>
                        :
                    <p>{ this.truncatedAnswer }... <a onClick={this.handleMoreToggle}>(read more)</a></p>
                }


                { this.state.more && <AnswerActionsWidget answerId={answerId}/>}
                { this.state.more && <CommentsWidget answerId={answerId}/>}
            </div>
        );
    }
}

export default QuestionCard;