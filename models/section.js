const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
    name: {
        type : String,
        required: true
    },
    classID : {
        required : false,
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'Class'
    },
    sectionHead : {
        required:false,
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Teacher'
    }
})

const Section = mongoose.model('Section' , sectionSchema);

module.exports = Section;
