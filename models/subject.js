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
})

const Subject = mongoose.model('Subject' , subjectSchema);

module.exports = Subject;