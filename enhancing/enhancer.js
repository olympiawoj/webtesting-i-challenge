module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  let { name, enhancement, durability } = item;
  if (enhancement >= 20) {
    return { ...item, enhancement: 20 };
  } else {
    return { ...item, enhancement: enhancement + 1 };
  }
}

function fail(item) {
  let { name, enhancement, durability } = item;
  enhancement < 15
    ? (durability -= 5)
    : enhancement >= 15
    ? (durability -= 10)
    : enhancement > 16
    ? (enhancement -= 1)
    : null;
  item.durability = durability;
  item.enhancement = enhancement;
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
