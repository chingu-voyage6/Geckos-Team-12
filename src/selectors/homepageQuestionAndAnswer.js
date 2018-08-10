import questionListByDate from './questionListByDate';
import answersForQuestionId from './answersForQuestionId';

export default (questions, answers) => {
    return questionListByDate(questions)
        .map( (question) => {
            const firstAnswer = answersForQuestionId(answers, question.uid)[0];
            if (firstAnswer) {
                return {
                    questionUid: question.uid,
                    questionText: question.questionText,
                    answerUid: firstAnswer.uid,
                    answerText: firstAnswer.answerText,
                    answerUserId: firstAnswer.relatedUserId,
                    answerTimestamp: firstAnswer.timestamp
                }
            }
            else {
                return "No answers yet"
            }
        })
        .filter( (question) => {
            question !== "No answers yet"
        });
}