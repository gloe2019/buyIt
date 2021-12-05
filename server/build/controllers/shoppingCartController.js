import shoppingCartModel from "../models/shoppingCartModel.js";
import productModel from "../models/productModel.js";
const addItemToCart = async (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    const { productId, quantity } = req.body;
    try {
        let shoppingCart = await shoppingCartModel.findOne({ userId });
        let product = await productModel.findOne({ _id: productId });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        const productName = product.name;
        const productPrice = product.price;
        if (!shoppingCart) {
            const newShoppingCart = shoppingCartModel.create({
                userId,
                items: [
                    { productId, name: productName, quantity, price: productPrice },
                ],
                total: quantity * productPrice,
            });
            return res.status(201).json({ newShoppingCart });
        }
        else {
            let productIndex = shoppingCart.items.findIndex((prod) => prod.productId == productId);
            if (productIndex > -1) {
                let productItem = shoppingCart.items[productIndex];
                productItem.quantity += quantity;
                shoppingCart.items[productIndex] = productItem;
            }
            else {
                shoppingCart.items.push({
                    productId,
                    name: productName,
                    quantity,
                    price: productPrice,
                });
            }
            shoppingCart.total += quantity * productPrice;
            shoppingCart = await shoppingCart.save();
            return res.status(201).json({ shoppingCart });
        }
    }
    catch (err) {
        res.status(500).json({ message: "Error adding item to cart", error: err });
    }
};
const getCart = async (req, res) => {
    const userId = req.params.id;
    console.log(req.body, req.params);
    try {
        let shoppingCart = await shoppingCartModel.findOne({ userId });
        if (shoppingCart && shoppingCart.items.length > 0) {
            res.json({ shoppingCart });
        }
        else {
            res.json({ message: "Shopping Cart Empty" });
        }
    }
    catch (err) {
        res.status(500).json({ message: "Error finding cart", error: err });
    }
};
export default {
    addItemToCart,
    getCart,
};
