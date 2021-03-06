import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://admin:159963321@cluster0.l9sg8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
});


app.use('/api/products',productRouter)
app.use('/api/users',userRouter);


app.get('/',(req,res) =>{
  res.send('Server is ready');
});

app.use((err,req,res,next) =>{
  res.status(500).send({message:err.message});
});

const port = process.env.PORT || 5000;
app.listen(port,()=>{
  console.log(`server at http://localhost:${port}`);
});