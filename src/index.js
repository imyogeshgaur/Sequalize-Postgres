import express from "express";
import connect from "./database/db.config.js";
const app = express();
import productRouter from "./router/product.router.js";
import userRouter from "./router/user.router.js";

connect()
app.use(express.urlencoded({ extended: true }))

//Routes
app.use("/product", productRouter);
app.use('/user', userRouter)

app.listen(3002)