import express from 'express';
import connectDb from './database_config/db.js';
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 4200;

app.use(express.json());
app.use('/api/users/', userRoutes)
app.use('/api/products/',productRoutes)

connectDb();

app.listen(port, ()=>{
    console.log(`Server runing on port ${port}`);
})

