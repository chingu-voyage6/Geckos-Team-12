const commentsReducerDefaultState = [];

export default (state = commentsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                action.comment
            ]
        case 'EDIT_COMMENT':
            return state.map( (comment) => {
                if (comment.uid === action.id) {
                    return {
                        ...comment,
                        ...action.updates
                    };
                }
                else {
                    return comment;
                }
            });
        case 'REMOVE_COMMENT':
            return state.filter( (comment) => comment.uid !== action.id );
        default:
            return state;
    }
}