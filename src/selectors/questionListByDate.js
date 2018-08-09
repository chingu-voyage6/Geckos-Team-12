// Returns by date, with newest (largest timestamp) first
// Sort function uses ternary operator and implicit return

export default (questions) => {
    return questions.sort((a, b) => (
        a.timestamp > b.timestamp ? -1 : 1
    ));
}