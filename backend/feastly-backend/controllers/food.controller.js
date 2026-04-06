const Food = require("../models/Food");
const { PAGINATION } = require("../config/constants");

exports.getAllFoods = async (req, res, next) => {
  try {
    const { category, search, minPrice, maxPrice, available, sort } = req.query;
    const page = Math.max(1, parseInt(req.query.page) || PAGINATION.DEFAULT_PAGE);
    const limit = Math.min(parseInt(req.query.limit) || PAGINATION.DEFAULT_LIMIT, PAGINATION.MAX_LIMIT);
    const skip = (page - 1) * limit;

    const filter = {};
    if (category && category !== "all") filter.category = category;
    if (available !== undefined) filter.available = available === "true";
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
    }
    if (search) filter.$text = { $search: search };

    let sortObj = { createdAt: -1 };
    if (sort === "price-asc") sortObj = { price: 1 };
    else if (sort === "price-desc") sortObj = { price: -1 };
    else if (sort === "rating") sortObj = { rating: -1 };

    const [foods, total] = await Promise.all([
      Food.find(filter).sort(sortObj).skip(skip).limit(limit),
      Food.countDocuments(filter),
    ]);

    res.json({
      success: true,
      data: foods,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    });
  } catch (error) { next(error); }
};

exports.getFoodById = async (req, res, next) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) return res.status(404).json({ success: false, message: "Food not found" });
    res.json({ success: true, data: food });
  } catch (error) { next(error); }
};

exports.createFood = async (req, res, next) => {
  try {
    const food = await Food.create(req.body);
    res.status(201).json({ success: true, data: food });
  } catch (error) { next(error); }
};

exports.updateFood = async (req, res, next) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!food) return res.status(404).json({ success: false, message: "Food not found" });
    res.json({ success: true, data: food });
  } catch (error) { next(error); }
};

exports.deleteFood = async (req, res, next) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);
    if (!food) return res.status(404).json({ success: false, message: "Food not found" });
    res.json({ success: true, message: "Food deleted" });
  } catch (error) { next(error); }
};
