import React from 'react';
import { Button } from 'mdbreact';

import CommentIndividual from './CommentIndividual';

const placeholderOnSubmit = (e) => {
    e.preventDefault();
    e.target.elements.addcomment.value = '';
    alert('You submitted a comment!');
}

// TODO: The Comment section currently uses "1===0" to force False.
// When this component is wired up with comments, change that!
const CommentsWidget = ({ answerUid }) => (
    <div>
        <div className="card">
        [YourUserProfilePic]
            <form onSubmit={placeholderOnSubmit}>
                <input type="text" name="addcomment" placeholder="Add a comment" />
                <Button color="primary" type="submit">Comment</Button>
            </form>
        </div>
        <div>
            {1 === 0
                ?
                ( <p>No comments on this answer. Add one!</p> )
                :
                (
                    <div className="card">
                    <CommentIndividual 

                    />
                    </div>
                )
            }
        </div>
    </div>
);

export default CommentsWidget;