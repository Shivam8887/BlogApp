import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { dbConnect } from './Configs/database.js'; 

const app = express();
const port = process.env.PORT || 4000;
const __dirname = path.resolve();
// Connect to MongoDB
dbConnect();

// CORS setup
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(cookieParser());
// Session setup
// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is healthy' });
});

// API routes
import routes from './Routes/routes.js';
app.use('/', routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
  }
// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`✅ Server running on port ${port}`);
});
