const enhancer = require("./enhancer.js");
// test away!

it("should accept an item object and return a new object w/ durability restored to 100", () => {
  const item = { name: "item", durability: 0, enhancement: 10 };
  expect(enhancer.repair(item)).toEqual({
    name: "item",
    durability: 100,
    enhancement: 10
  });
});
