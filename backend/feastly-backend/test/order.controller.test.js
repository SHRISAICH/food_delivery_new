const assert = require("node:assert/strict");
const test = require("node:test");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const { placeOrder } = require("../controllers/order.controller");

test("placeOrder rejects deleted or unavailable food without clearing the cart", async (t) => {
  for (const food of [null, { _id: "507f1f77bcf86cd799439011", available: false }]) {
    await t.test(food ? "unavailable food" : "deleted food", async (subtest) => {
      let cartDeleted = false;
      let orderCreated = false;
      const cart = { items: [{ food, quantity: 1 }] };

      subtest.mock.method(Cart, "findOne", () => ({ populate: async () => cart }));
      subtest.mock.method(Cart, "findOneAndDelete", async () => { cartDeleted = true; });
      subtest.mock.method(Order, "create", async () => { orderCreated = true; });

      const response = {
        statusCode: 200,
        status(code) { this.statusCode = code; return this; },
        json(body) { this.body = body; return this; },
      };

      await placeOrder({ user: { _id: "user-id" }, body: {} }, response, (error) => { throw error; });

      assert.equal(response.statusCode, 409);
      assert.equal(orderCreated, false);
      assert.equal(cartDeleted, false);
    });
  }
});