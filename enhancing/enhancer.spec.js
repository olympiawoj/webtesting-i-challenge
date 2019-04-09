const enhancer = require("./enhancer.js");
// test away!

const item = { name: "item", durability: 0, enhancement: 10 };
const item1 = { name: "item1", durability: 0, enhancement: 20 };

describe("repair", () => {
  it("should restore durability to 100", () => {
    expect(enhancer.repair(item)).toEqual({
      name: "item",
      durability: 100,
      enhancement: 10
    });
  });
});

describe("succeed", () => {
  it("should increase enhancement by 1", () => {
    expect(enhancer.succeed(item)).toHaveProperty("enhancement", 11);
  });

  it("should not increase the enhancement level above 20", () => {
    expect(enhancer.succeed(item1)).toHaveProperty("enhancement", 20);
  });
});

describe("fail", () => {
  it("if enhancement < 15, it should decrease durability by 5", () => {
    expect(enhancer.fail(item)).toHaveProperty("durability", -5);
  });

  it("if enhancement is >=15, it should decrease durability by 10", () => {
    expect(enhancer.fail(item1)).toHaveProperty("durability", -10);
  });
  //   it("if enhancement > 16, it should reduce enhancement by 1", () => {
  //     expect(enhancer.fail(item1)).toHaveProperty("enhancement", 19);
  //   });
});
