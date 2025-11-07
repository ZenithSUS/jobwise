// External Dependencies
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';

// Middlewares
import notFound from './middleware/not-found';
import logger from './middleware/logger';

// Routes
import userRouter from './routes/user-routes';
import jobRouter from './routes/job-routes';
import projectRouter from './routes/project-routes';

// Express App Instance
const app: Application = express();

// Allowed origins
const allowedOrigins: string[] = process.env.ALLOWED_ORIGINS?.split(',') || [];

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

// Express Middleware
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  }),
);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api/users', userRouter);
app.use('/api/jobs', jobRouter);
app.use('/api/projects', projectRouter);

// Error Middlewares
app.use(notFound);

export default app;
