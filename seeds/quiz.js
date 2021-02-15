const mongoose =  require('mongoose')
const {Quiz} =  require('../models/quiz.js')
const logger = require('../models/logger')
const dbUrl =  process.env.DB_URL || 'mongodb://localhost:27017/academicServices'

mongoose.connect(dbUrl,{
    useUnifiedTopology: true,
    useNewUrlParser : true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(()=>{
    logger.log('info' , 'DB connection opened (seeds/quiz.js) ')
}).catch(err =>{
    console.log('Something went wrong');
    console.log(err);
    logger.log('info' , `DB connection failed (seeds/quiz.js) :: ${err}`)
})
quizList = [
    {
        name: EC101,
        startTime : Date.now(),
        duration : 30,
        // questionSet : []
    },
    {
        name: CS101,
        startTime : Date.now(),
        duration : 30,
        // questionSet : []
    },
    {
        name: IT101,
        startTime : Date.now(),
        duration : 30,
        // questionSet : []
    }
]

const insertQuizList = ()=>{
    Quiz.insertMany(quizList).then(s=>{
        logger.log('info' , `quizzes added ${s}`)
    }).catch(err => {
          logger.log('info', `error while adding quizzes:: ${err}`);
          console.log(err);
    })
}

insertQuizList();