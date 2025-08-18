/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const CORS_ORIGIN = process.env.CORS_ORIGIN;

const app = express();
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));
