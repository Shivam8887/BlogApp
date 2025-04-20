require('dotenv').config();
const express = require('express');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const path = require('path');
const { dbConnect } = require('./Configs/database');

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
dbConnect();

// CORS setup
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Session setup

// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is healthy' });
});

// API routes
const routes = require('./Routes/routes');
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
