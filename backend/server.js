import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'reasonable-tech-backend' });
});

app.get('/api/message', (_req, res) => {
  res.json({ message: 'Welcome to Reasonable Tech.' });
});

app.listen(port, () => {
  console.log(`Reasonable Tech backend running on http://localhost:${port}`);
});
