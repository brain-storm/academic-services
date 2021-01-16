const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    name: {
        type : String,
        required: true,
    },
    sectionId : {
        required:false,
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Section'
    },
    teacherId : {
        required:false,
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Teacher'
    }, 
    studyMaterial:{
        type :[{
            name:{
                type:  String,
                required : true
            },
            description : String,
            url : String
        }],
        required : false ,
        _id: false
    }
})

const Subject = mongoose.model('Subject' , subjectSchema);

module.exports = Subject;

/*
To be added
All of these will reference the subject :-

quiz
response

assignment
response

material
*/ 