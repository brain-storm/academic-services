const mongoose = require('mongoose');
const Schema = mongoose.Schema;

import {AnswerOptionSchema} from './option'

const QuestionSchema = new Schema({
    questionType : {

    },
    // multi, descriptive, single
    questionDescription:{
        type:String,
        required : true,
        // id false
    },
    questionImageUrl : {
        type : String,
        default : false
    },
    options : {
        type : [AnswerOptionSchema] , 
        default : undefined
    },
    points : {
        type : Number,
        default : 1
    }
})

const Question = mongoose.model('Question' , QuestionSchema);

module.exports = { 
    QuestionSchema,
    Question
}



/*
quizId
studentID: sparse 
*/