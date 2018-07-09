import React from 'react';

const CommentWidget = () => (
    <div>
        <div>
        [YourUserProfilePic] <input type="text" placeholder="Add a comment" />
        </div>
        <div>
        [CommenterUserProfilePic] Jon Smith / X hrs ago<br />
        Text of comment truncated to 100 words... (more)
        </div>
    </div>
);

export default CommentWidget;