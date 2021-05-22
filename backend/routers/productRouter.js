import express from "express";
import expressAsyncHandler from "express-async-handler";
import { data } from "../data.js";
import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";


const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

// productRouter.get(
//   "/seed",
//   expressAsyncHandler(async (req, res) => {
//     const createdUser = await User.insertMany(data.users);
//     res.send({ createdUser });
//   })
// );

productRouter.get(
  "/category",
  expressAsyncHandler(async (req, res) => {
    const category = await Category.find({});
    res.send(category);
  })
);

productRouter.get(
  "/category=:name",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({ category: req.params.name });
    if (products) {
      res.send(products);
    } else {
      res.status.name(400).send({ message: "Product not found" });
    }
  })
);

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({ _id: req.params.id });
    res.send(products);
  })
);



export default productRouter;
