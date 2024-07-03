require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT =  5000;


app.use(cors());
app.use(express.json());

const URL=process.env.DB_URL;
const connection = async ()=>{
  await mongoose.connect(URL, {dbName:'pedalstart'});
  // db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  // db.once('open', () => {
  //   console.log('Connected to MongoDB');
  // });
}

connection();

app.use('/api/tasks', taskRoutes);


app.get('/', (req, res) => {
  res.send('API is running...');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
