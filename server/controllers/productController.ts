import { Request, Response, NextFunction } from "express";
import productModel from "../models/productModel";

const getAllProducts = (req: Request, res: Response) => {
  productModel
    .find()
    .sort({ name: "asc" })
    .then((products) => {
      return res.status(201).json(products);
    });
};

const createProduct = (req: Request, res: Response) => {
  console.log("<<<creating product>>>", req.body);
  let newProduct = new productModel(req.body);
  newProduct.save().then((product) => {
    res.status(201).json({
      message: `New product created - ${product.name}`,
    });
  });
};

const updateProduct = (req: Request, res: Response) => {
  console.log("<<<<updating product>>>>", req.body);
  /* check for product id -- _id=req.params.id...
  //productModel.findByIdAndUpdate({_id:req.params.id}, req.body).then)
  */
};

const deleteProduct = (req: Request, res: Response) => {
  console.log("<<<deleting product>>>", req.body);

  // productModel.findByIdAndDelete({_id: req.params.id})
};

export default {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
