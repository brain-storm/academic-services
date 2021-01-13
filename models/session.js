const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    startDate : {
        type : Date,
        required: true
    },
    endDate: { 
        type: Date,
        required : false
    },
    name : {
        type : String,
        required : false
    },
    schoolId : {
        required:false,
        type : mongoose.Schema.Types.ObjectId,
        ref : 'School'
    }
})

const Session = mongoose.model ('Session' , sessionSchema);
module.exports = Session;
