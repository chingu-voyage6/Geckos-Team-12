const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
    uid: String,
    answerText: String,
    relatedUserId: String,
    relatedQuestionId: String
});

const Answer = mongoose.model('answer', answerSchema);
module.exports = Answer;