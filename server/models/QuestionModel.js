const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    uid: String,
    questionText: String,
    relatedUserId: String,
    timestamp: Date
});

const Question = mongoose.model('question', questionSchema);
module.exports = Question;