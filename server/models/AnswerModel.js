const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
    uid: String,
    answerText: String,
    relatedUserId: String,
    relatedQuestionId: String,
    timestamp: Date
});

const Answer = mongoose.model('answer', answerSchema);
module.exports = Answer;