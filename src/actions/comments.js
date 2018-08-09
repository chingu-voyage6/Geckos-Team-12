const uuidv1 = require('uuid/v1');

export const addComment = (comment) => ({
    type: 'ADD_COMMENT',
    comment: {
        uid: uuidv1(),
        ...comment
    }
});

export const editComment = (id, updates) => ({
    type: 'EDIT_COMMENT',
    id,
    updates
});

export const removeComment = (id) => ({
    type: 'REMOVE_COMMENT',
    id
})