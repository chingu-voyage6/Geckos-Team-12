import React from 'react';

import UserProfileSnippet from './UserProfileSnippet';

import truncateText from '../utils/truncateText';

const commentText = 'This is a comment. This is a longer string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text. This is a long string of text.'

class CommentIndividual extends React.Component {
    state = {
        more: false
    }
    truncatedComment = truncateText(commentText, 50);

    handleMoreToggle = () => {
        this.setState( () => ({
            more: true
        }));
    }

    render() {
        return (
            <div>
                <UserProfileSnippet />

                { this.truncatedComment === commentText && this.handleMoreToggle() }

                {
                    this.state.more
                        ?
                    <p>{commentText}</p>
                        :
                    <p>{ this.truncatedComment }... <a onClick={this.handleMoreToggle}>(read more)</a></p>
                }
            </div>
        );
    }
}

export default CommentIndividual;