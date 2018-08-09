const mongoose = require('mongose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    uid: String,
    commentText: String,
    relatedUserId: String,
    relatedAnswerId: String,
    timestamp: Date
});

const Comment = mongoose.model('comment', commentSchema);
module.exports = Comment;