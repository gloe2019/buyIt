import express from "express";
import controller from "../controllers/shoppingCartController.js";
const shoppingCartRouter = express.Router();
shoppingCartRouter.get("/:id", controller.getCart);
shoppingCartRouter.post("/:id", controller.addItemToCart);
export { shoppingCartRouter };
