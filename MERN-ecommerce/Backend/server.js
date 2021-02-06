import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/ProductRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();

//mongoDB driver
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/merne', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


// Home page
app.get('/', (req, res) => {
  res.send('Server is ready');
});

// Routers
app.use('/api/users', userRouter);

app.use('/api/products', productRouter);


// Middleware
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});



// Server Listener
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});