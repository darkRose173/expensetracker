import express from 'express';
import cors from 'cors';
import dbConnect from './db/dbConnect.js';
import { readdir } from 'fs/promises';

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const importRoutes = async () => {
  try {
    const routeFiles = await readdir('./routes');
    await Promise.all(
      routeFiles.map(async (route) => {
        const routePath = `./routes/${route}`;
        const { default: routeHandler } = await import(routePath);
        app.use('/api/v1', routeHandler);
      })
    );
  } catch (error) {
    console.error('Error occurred while importing routes:', error);
  }
};

const startServer = async () => {
  dbConnect()           //Establish DB connection*
  await importRoutes();
  app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
  });
};

startServer();
