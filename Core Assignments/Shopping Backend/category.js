const Products = require("./database/data");

exports.menProducts = () => {
  const men = Products.filter(
    (product) => (product.genre == "Men") | (product.genre == "Both")
  );

  return men;
};

exports.womenProducts = () => {
  const women = Products.filter(
    (product) => (product.genre == "Women") | (product.genre == "Both")
  );

  return women;
};
