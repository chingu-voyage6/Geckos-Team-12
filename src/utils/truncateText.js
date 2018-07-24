// Truncates text to a specified number of words.
// Returns the truncated text.
const truncateText = (text, numberOfWords) => {
    return text.split(" ").slice(0, numberOfWords).join(" ");
};

export default truncateText;