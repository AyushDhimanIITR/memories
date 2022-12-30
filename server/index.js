import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import postRoutes from './Routes/posts.js';

const app = express();
dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);


//DATABASE CONNECTION

// const CONNECTION_URL = "mongodb+srv://ayush:ayush@atlascluster.o2e8eua.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true
}).then(() =>{
    console.log("Database Connected")
}).catch((err) =>{
    console.log(err)
})

app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
})