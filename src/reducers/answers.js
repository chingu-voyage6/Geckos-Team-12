const answersReducerDefaultState = [];

export default (state = answersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ANSWER':
            return [
                ...state,
                action.answer
            ]
        case 'EDIT_ANSWER':
            return state.map( (answer) => {
                if (answer.uid === action.id) {
                    return {
                        ...answer,
                        ...action.updates
                    };
                }
                else {
                    return answer;
                }
            });
        case 'REMOVE_ANSWER':
            return state.filter( (answer) => answer.uid !== action.id );
        default:
            return state;
    }
}