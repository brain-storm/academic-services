const mongoose = require('mongoose');
const Schema = mongoose.Schema;

import {QuestionSchema} from "./question"

const quizSchema = new Schema({
    name: {
        type : String,
        required : true,
    },
    startTime: { // The Date schema type of Mongoose represents not just a date,
        //  but a full date and time timestamp,
        type : Date,
        required: true
    },
    duration:{ 
        type : Number,
        required : true
    },
    // no need for end time
    subjectId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Subject',
        required : false // Just for the time being!
    },
    questionSet:{
        type : [QuestionSchema]
    }/*, {
        // Make Mongoose use Unix time (seconds since Jan 1, 1970)
        timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
      }*/
})

const Quiz  = mongoose.model ( 'Quiz', quizSchema);
module.exports = {
    Quiz,
    quizSchema
};