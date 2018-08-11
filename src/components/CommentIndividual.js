import React from 'react';

import UserProfileSnippet from './UserProfileSnippet';
import truncateText from '../utils/truncateText';


class CommentIndividual extends React.Component {

    // TODO: I don't think this is actually truncating at 50 characters. Look into this...
    truncatedCommentLength = 50;

    state = {
        more: false,
        truncatedComment: truncateText(this.props.comment.commentText, this.truncatedCommentLength)
    }

    handleMoreToggle = () => {
        this.setState( () => ({
            more: true
        }));
    }

    render() {
        const {
            uid,
            commentText,
            relatedUserId,
            relatedAnswerId,
            timestamp
         } = this.props.comment;

        return (
            <div>
                <UserProfileSnippet 
                    typeOfUserSubmission="Commented"
                />

                {
                    this.state.more || commentText.length <= this.truncatedCommentLength
                        ?
                    <p>{commentText}</p>
                        :
                    <p>{ this.state.truncatedComment }... <a onClick={this.handleMoreToggle}>(read more)</a></p>
                }
            </div>
        );
    }
}

export default CommentIndividual;