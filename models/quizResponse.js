const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizResponseSchema = new Schema ({
    student : {
        type : Schema.Types.ObjectId,
        required: false // API calls
    } , 
    quiz : {
        type:Schema.Types.ObjectId,
        ref: 'Quiz'
    },
    questionAnswers : {
        type : [Number]
    }
})
const QuizResponse = mongoose.model('QuizResponse' , quizResponseSchema)
module.exports  = {
    quizResponseSchema,
    QuizResponse
}