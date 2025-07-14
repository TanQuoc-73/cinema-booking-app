import * as express from 'express';
import { Application, Request, Response } from 'express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Route test
app.get('/', (req: Request, res: Response) => {
  res.send('Auth service is running 🚀');
});

// Start server
app.listen(PORT, () => {
  console.log(`⚡️ Server is running at http://localhost:${PORT}`);
});
