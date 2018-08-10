// Returns all answers to a question, sorted by new to old

export default (answers, relatedQuestionId) => {
    return answers.filter( (answer) => answer.relatedQuestionId === relatedQuestionId )
            .sort( (a, b) => {
                a.timestamp > b.timestamp ? -1 : 1
            });
}