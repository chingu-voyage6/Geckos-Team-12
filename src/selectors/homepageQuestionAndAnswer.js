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
                    answer: firstAnswer
                }
            }
            else {
                return undefined;
            }
        })
        .filter( (qa) => qa);
}