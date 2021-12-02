import { Request, Response, NextFunction } from "express";
import userModel from "../models/userModel.js";

//View all Users
const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
  userModel
    .find()
    .exec()
    .then((results) => {
      return res.status(200).json({
        users: results,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: err.message,
        err,
      });
    });
};

//Find User by email for login?
const getUserByEmail = (email: string) => {
  const user = userModel.findOne({ email });
  return user;
  //not sure if it's req.params or req.body
};

//Create New Users
const createStandardUser = (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = new userModel({
    firstName,
    lastName,
    email,
    password,
    isAdmin: false,
  });
  newUser
    .save()
    .then((results) => {
      res.json({
        message: "User created succesfully",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: err.message,
        err,
      });
    });
};

const createAdminUser = (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, email, password } = req.body;
  const user = new userModel({
    firstName,
    lastName,
    email,
    password,
    isAdmin: true,
  });
  user
    .save()
    .then((results) => {
      res.json({
        message: "User created succesfully",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: err.message,
        err,
      });
    });
};

export default {
  getAllUsers,
  getUserByEmail,
  createStandardUser,
  createAdminUser,
};
