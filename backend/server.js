import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
const port = 5003 //process.env.PORT;

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is Running...');
});

app.use('/api/products', productRoutes);

app.listen(port, () => console.log (`server running on port ${port}`)); 