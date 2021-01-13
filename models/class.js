const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    name: {
        type : String, // Lkg, Ukg, 4th
        required: true
    },
    // Important : I have made these attributes non-required only for the time being!
    classIncharge:{      // head teacher of all the sections of the class
        required : false,
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Teacher'
    },
    schoolId : {
        required:false,
        type : mongoose.Schema.Types.ObjectId,
        ref : 'School'
    },
    sessionId : {
        required : false,
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Session'
    }
    /*
    *cross referencing is yet to be done.
    * ex : 
        userSchema.virtual('tasks', {
            ref : 'Task',
            localField : '_id',
            foreignField : 'owner'
        })
    */
})
    
const Class = mongoose.model('Class' , classSchema);

module.exports = Class;

/*
To be added
All of these will reference the subject :-
quiz
response
assignment
response
material
*/ 