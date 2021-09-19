import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';

app.use('/student', studentRoutes);

const app = express();

app.use(bodyParser.OptionsJson({limit: "20mb", extended:true}));
app.use(bodyParser.Optionsurlencoded({limit: "20mb", extended:true}));

app.use(cors());


const CONNECTIONT_URL = 'mongodb+srv://B2BCarlos:Corioto1990@cluster0.hvnq7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTIONT_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));


mongoose.set('useFindAndModify' ,false);

