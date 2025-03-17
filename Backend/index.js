import 'dotenv/config'
import express from "express";
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import userRoute from "./route/users.route.js";
import cors from "cors"



const app = express();
app.use(express.json());
app.use(cors());

const PORT=process.env.PORT || 4000;
const URI=process.env.MongodbURI;

//Connecting to DB

try {
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });
  console.log("Connected to MongoDB")
} catch (error) {
  console.log("Error:",error);
}

//Defining Routes

app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})