import 'dotenv/config'
import express from "express";
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import userRoute from "./route/users.route.js";
import cors from "cors"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongodbURI;

// Connecting to DB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB")
} catch (error) {
  console.log("Error:", error);
}

// API Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../Frontend/dist')));

// The "catch all" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});