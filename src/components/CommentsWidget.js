import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Button } from 'mdbreact';

import { addComment } from '../actions/comments';
import CommentIndividual from './CommentIndividual';

export class CommentsWidget extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addComment({
            commentText: e.target.elements.addcomment.value,
            relatedUserId: 0,
            relatedAnswerId: this.props.answerId,
            timestamp: moment()
        });
        e.target.elements.addcomment.value = '';
        alert('You submitted a comment!');
    }

    render() {
        return (
            <div>
                <div className="card">
                [YourUserProfilePic]
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="addcomment" placeholder="Add a comment" />
                        <Button color="primary" type="submit">Comment</Button>
                    </form>
                </div>
                <div>
                    {   this.props.comments.length > 0
                        ?
                        (
                            this.props.comments.map( (comment) => (
                                <div className="card">
                                    <CommentIndividual 
                                        comment={comment}
                                    />
                                </div>
                            ))
                        )
                        :
                        ( <p>No comments on this answer. Add one!</p> )
                    }
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state, props) => ({
    comments: state.comments.filter( (comment) => comment.relatedAnswerId === props.answerId )
});

const mapDispatchToProps = (dispatch) => ({
    addComment: (comment) => dispatch(addComment(comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsWidget);