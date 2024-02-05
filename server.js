import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRoute from './Routes/userRoute.js'
import router from './Routes/adminRoute.js'
import productRouter from './Routes/productRoute.js'
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/user', userRoute)
app.use('/api/admin', router)
app.use('/api/products', productRouter)
//connecting to mongo db//
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & running on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error(error);
  });