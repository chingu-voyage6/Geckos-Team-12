const uuidv1 = require('uuid/v1');

// uid: uuidv1(),

export const addAnswer = (answer) => ({
    type: 'ADD_ANSWER',
    answer: {
        uid: '5',
        ...answer
    }
});

export const editAnswer = (id, updates) => ({
    type: 'EDIT_ANSWER',
    id,
    updates
});

export const removeAnswer = (id) => ({
    type: 'REMOVE_ANSWER',
    id
})