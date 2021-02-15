const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerOptionSchema = new Schema({
    optionNumber : {
        type : Number,
        required: true
    },
    answerBody : {
        type:String,
        required:true
    },
    isCorrectAnswer : {
        type : Boolean,
        default : false
    }
})
const Answer = mongoose.model('Answer' , AnswerOptionSchema)
module.exports = {
    Answer,
    AnswerOptionSchema
}