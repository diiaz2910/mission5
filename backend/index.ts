import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app: express.Application = express();
const PORT = 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);

const MessageSchema = new mongoose.Schema({
  message: String,
});

const Message = mongoose.model('Message', MessageSchema);

// Create a new message
app.post('/messages', async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    const newMessage = new Message({ message });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/messages', async (req: Request, res: Response) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});