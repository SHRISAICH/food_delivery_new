require("dotenv").config();
const mongoose = require("mongoose");
const Food = require("../models/Food");
const User = require("../models/User");
const connectDB = require("../config/db");

const foods = [
  { name: "Margherita Royale", category: "pizza", price: 349, description: "Hand-tossed crust with San Marzano tomatoes, fresh mozzarella, and fragrant basil.", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80", rating: 4.8, preparationTime: "22 min", available: true },
  { name: "BBQ Chicken Pizza", category: "pizza", price: 429, description: "Smoky BBQ sauce, grilled chicken, red onion, and a three-cheese blend.", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80", rating: 4.6, preparationTime: "28 min", available: true },
  { name: "Double Smash Burger", category: "burger", price: 299, description: "Two smashed beef patties, American cheese, secret sauce, pickles, and brioche bun.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", rating: 4.9, preparationTime: "18 min", available: true },
  { name: "Crispy Chicken Burger", category: "burger", price: 259, description: "Double-fried crispy chicken thigh with chipotle mayo and coleslaw.", image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80", rating: 4.7, preparationTime: "20 min", available: true },
  { name: "Salmon Sushi Platter", category: "sushi", price: 699, description: "Fresh Atlantic salmon nigiri and maki with wasabi, pickled ginger, and soy.", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80", rating: 4.9, preparationTime: "30 min", available: true },
  { name: "Truffle Carbonara", category: "pasta", price: 389, description: "Rigatoni with guanciale, egg yolk cream, pecorino, black pepper, and shaved truffle.", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80", rating: 4.8, preparationTime: "25 min", available: true },
  { name: "Mango Tango Smoothie", category: "drinks", price: 179, description: "Fresh Alphonso mango blended with yogurt, cardamom, and a hint of saffron.", image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&q=80", rating: 4.6, preparationTime: "10 min", available: true },
  { name: "Tiramisu", category: "dessert", price: 299, description: "Classic Italian tiramisu with espresso-soaked ladyfingers and mascarpone cream.", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80", rating: 4.8, preparationTime: "5 min", available: true },
  { name: "Buddha Bowl", category: "healthy", price: 349, description: "Quinoa, roasted sweet potato, avocado, chickpeas, tahini dressing.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80", rating: 4.7, preparationTime: "20 min", available: true },
];

const seedDB = async () => {
  await connectDB();
  await Food.deleteMany({});
  await User.deleteMany({});

  await Food.insertMany(foods);
  console.log("Foods seeded!");

  // Create admin user
  await User.create({ name: "Admin", email: "admin@feastly.com", password: "admin123", role: "admin" });
  // Create test user
  await User.create({ name: "Test User", email: "user@feastly.com", password: "user123", role: "user" });
  console.log("Users seeded! Admin: admin@feastly.com / admin123");

  process.exit(0);
};

seedDB().catch((err) => { console.error(err); process.exit(1); });
