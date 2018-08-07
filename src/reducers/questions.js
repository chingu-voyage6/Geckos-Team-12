const questionsReducerDefaultState = [];

export default (state = questionsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_QUESTION':
            return [
                ...state,
                action.question
            ];
        case 'EDIT_QUESTION':
            return state.map((question) => {
                if (question.id === action.id) {
                    return {
                        question,
                        ...action.updates
                    };
                }
                else {
                    return question;
                }
            });
        case 'REMOVE_QUESTION':
            return state.filter( (question) => question.id !== action.id );
        default:
            return state;
    }
};