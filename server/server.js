require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const URL = process.env.DB_URL;
console.log(URL)

const connection = async () => {
  try {
    await mongoose.connect(URL, { dbName: 'pedalstart', useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

connection();

app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(URL)
  console.log(`Server is running on port ${PORT}`);
});
