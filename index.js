import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import studentRouter from './routes/studentrouter.js';
import itemRouter from './routes/itemrouter.js';
/*import studentModel from './models/student.js';*/


//mongodb+srv://Admin:<Shakila@97>@mern.qec4ncf.mongodb.net/?retryWrites=true&w=majority&appName=MERN

const app = express ();

mongoose.connect("mongodb+srv://Admin:Shakila%4097@mern.qec4ncf.mongodb.net/?retryWrites=true&w=majority&appName=MERN").then(

    ()=>{
        console.log ('Database connection Success')
    }
).catch(
    ()=>{
        console.log('Database Not Connected')
    }
)

app.use(bodyParser.json());
app.use('/item',itemRouter);


app.use('/student',studentRouter);

app.listen(3000, 
    ()=>{
    console.log ("server run on port 3000")
    }
);


/*function taskComplete(){
    console.log('task complete');
}

app.listen(3000,taskComplete)*/