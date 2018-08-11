import React from 'react';

const UserProfileSnippet = ({ typeOfUserSubmission }) => (
    <div className="wrapper user-profile-snippet">
        <div className="user-profile-image">
            <img src="/images/placeholder_userprofileimage.png" />
        </div>
        <div className="user-profile-bio">
            <p>John Smith, Chief dummytext officer<br />
            { typeOfUserSubmission } 0 hrs ago</p>
        </div>
    </div>
);

export default UserProfileSnippet;