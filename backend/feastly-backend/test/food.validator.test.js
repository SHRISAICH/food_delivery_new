const assert = require("node:assert/strict");
const test = require("node:test");
const { validationResult } = require("express-validator");
const { foodQueryRules } = require("../validators/food.validator");

async function validate(query) {
  const req = { body: {}, params: {}, query, cookies: {}, headers: {} };
  for (const rule of foodQueryRules) await rule.run(req);
  return { query: req.query, errors: validationResult(req).array() };
}

test("food filters accept a zero price ceiling", async () => {
  const result = await validate({ maxPrice: "0" });

  assert.deepEqual(result.errors, []);
  assert.equal(result.query.maxPrice, 0);
});

test("food filters reject malformed and reversed price ranges", async () => {
  const malformed = await validate({ minPrice: "not-a-price" });
  const reversed = await validate({ minPrice: "20", maxPrice: "10" });

  assert.equal(malformed.errors.length, 1);
  assert.equal(reversed.errors.length, 1);
});