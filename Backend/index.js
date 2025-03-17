import dotenv from "dotenv";
import express from "express";
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import userRoute from "./route/users.route.js";
import cors from "cors"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(path.resolve(__dirname, '.env'));
// Load environment variables first
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin']
}));

// Add express.json middleware
app.use(express.json());
const PORT = process.env.PORT || 4000;
const URI = process.env.MongodbURI || "mongodb+srv://savybiswas15:PnCW9F3lSHzUCGwa@cluster0.yifcj.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0";

// Connecting to DB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
  process.exit(1); // Exit if cannot connect to database
});

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
