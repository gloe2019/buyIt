import { Request, Response, NextFunction } from "express";
import userModel from "../models/userModel.js";

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
  userModel.find()
    .exec()
    .then(results => {
    return res.status(200).json({
      users: results
    })
  }).catch(err => {
    return res.status(500).json({
      message: err.message,
      err
    })
  })
}

export default {getAllUsers}