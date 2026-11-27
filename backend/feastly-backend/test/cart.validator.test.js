const assert = require("node:assert/strict");
const test = require("node:test");
const { validationResult } = require("express-validator");
const { addToCartRules, updateCartItemRules } = require("../validators/cart.validator");

async function validate(rules, body) {
  const req = { body, params: {}, query: {}, cookies: {}, headers: {} };
  for (const rule of rules) await rule.run(req);
  return { body: req.body, errors: validationResult(req).array() };
}

test("cart additions accept valid IDs and convert integer quantities", async () => {
  const result = await validate(addToCartRules, {
    foodId: "507f1f77bcf86cd799439011",
    quantity: "2",
  });

  assert.deepEqual(result.errors, []);
  assert.equal(result.body.quantity, 2);
});

test("cart additions reject invalid IDs and quantities outside the limit", async () => {
  const result = await validate(addToCartRules, { foodId: "invalid", quantity: "51" });

  assert.equal(result.errors.length, 2);
});

test("cart item updates allow zero for removal but reject quantities above the limit", async () => {
  const removal = await validate(updateCartItemRules, { quantity: "0" });
  const excessive = await validate(updateCartItemRules, { quantity: "51" });

  assert.deepEqual(removal.errors, []);
  assert.equal(removal.body.quantity, 0);
  assert.equal(excessive.errors.length, 1);
});