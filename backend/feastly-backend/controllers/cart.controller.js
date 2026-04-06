const Cart = require("../models/Cart");
const Food = require("../models/Food");

exports.getCart = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate("items.food", "name price image available");
    if (!cart) cart = { items: [], totalAmount: 0 };
    else {
      cart = cart.toObject();
      cart.totalAmount = cart.items.reduce((sum, item) => sum + (item.food?.price || 0) * item.quantity, 0);
    }
    res.json({ success: true, data: cart });
  } catch (error) { next(error); }
};

exports.addToCart = async (req, res, next) => {
  try {
    const { foodId, quantity = 1 } = req.body;
    const food = await Food.findById(foodId);
    if (!food) return res.status(404).json({ success: false, message: "Food not found" });
    if (!food.available) return res.status(400).json({ success: false, message: "Food is not available" });

    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) cart = new Cart({ user: req.user._id, items: [] });

    const existingItem = cart.items.find((item) => item.food.toString() === foodId);
    if (existingItem) existingItem.quantity += quantity;
    else cart.items.push({ food: foodId, quantity });

    await cart.save();
    await cart.populate("items.food", "name price image available");
    res.json({ success: true, data: cart });
  } catch (error) { next(error); }
};

exports.updateCartItem = async (req, res, next) => {
  try {
    const { quantity } = req.body;
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ success: false, message: "Cart not found" });

    const item = cart.items.id(req.params.itemId);
    if (!item) return res.status(404).json({ success: false, message: "Item not found in cart" });

    if (quantity <= 0) cart.items.pull(req.params.itemId);
    else item.quantity = quantity;

    await cart.save();
    await cart.populate("items.food", "name price image available");
    res.json({ success: true, data: cart });
  } catch (error) { next(error); }
};

exports.removeFromCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ success: false, message: "Cart not found" });
    cart.items.pull(req.params.itemId);
    await cart.save();
    res.json({ success: true, data: cart });
  } catch (error) { next(error); }
};

exports.clearCart = async (req, res, next) => {
  try {
    await Cart.findOneAndDelete({ user: req.user._id });
    res.json({ success: true, message: "Cart cleared" });
  } catch (error) { next(error); }
};
