const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
    name: {
        type : String,
        required: true
    },
    classId : {
        required : false,
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'Class'
    },
    sectionIncharge : {
        required:false,
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Teacher'
    }
})

const Section = mongoose.model('Section' , sectionSchema);

module.exports = Section;
