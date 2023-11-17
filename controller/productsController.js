let productList = [
  {
    id: 1,
    brand: "Samsung",
    name: "Flip",
    price: 3000,
    description: "test message",
    image:
      "https://motorolain.vtexassets.com/arquivos/ids/158270/razr-40-ultra-ecom-render-12-viva-magenta-z55zdrkf.png?v=638229688338270000",
    cartCount: 0,
    isAdded: false,
  },
  {
    id: 2,
    brand: "Moto",
    name: "Razr",
    price: 8000,
    description: "test message",
    image:
      "https://motorolain.vtexassets.com/arquivos/ids/158270/razr-40-ultra-ecom-render-12-viva-magenta-z55zdrkf.png?v=638229688338270000",
    cartCount: 0,
    isAdded: false,
  },
  {
    id: 3,
    brand: "Apple",
    name: "iPhone12",
    price: 7000,
    description: "test message",
    image:
      "https://motorolain.vtexassets.com/arquivos/ids/158270/razr-40-ultra-ecom-render-12-viva-magenta-z55zdrkf.png?v=638229688338270000",
    cartCount: 0,
    isAdded: false,
  },
];

const getAllProducts = (req, res) => {
  try {
    res.status(200);
    return res.json({
      message: "Success! Displaying all products",
      products: productList,
    });
  } catch (err) {
    console.log(err);
    res.status(500);
    return res.json({ message: "Internal server error!" });
  }
};

const addProduct = (req, res) => {
  let { id,brand, name, price, description, image } = req.body;

  try {
    if (id , brand && name && price && description && image) {
      const newProduct = {
        id:id,
        brand: brand,
        name: name,
        price: price,
        description: description,
        image: image,
      };
      productList = [...productList, newProduct];
      res.status(200);
      return res.json({
        message: "Added new product successfully!",
        products: productList,
      });
    } else {
      res.status(400);
      return res.json({ message: "Bad request! Missing required field." });
    }
  } catch (err) {
    console.log(err);
    res.status(500);
    return res.json({ message: "Internal server error!" });
  }
};

const editProduct = (req, res) => {
  let { id, brand, name, price, description, image } = req.body;

  try {
    if (id && brand && name && price && description && image) {
      productList = productList.map((itm) => {
        if (itm.id == id) {
          itm.brand = brand;
          itm.name = name;
          itm.price = price;
          itm.description = description;
          itm.image = image;
          return itm;
        }
        return itm;
      });
      res.status(200);
      return res.json({
        message: "Edited product successfully!",
        products: productList,
      });
    } else {
      res.status(400);
      return res.json({ message: "Bad request! Missing required field." });
    }
  } catch (err) {
    console.log(err);
    res.status(500);
    return res.json({ message: "Internal server error!" });
  }
};

const deleteProduct = (req, res) => {
  const { id } = req.body;
  try {
    if (id) {
      productList = productList.filter((itm) => itm.id !== id);
      res.status(200);
      return res.json({
        message: "Deleted successfully!",
        products: productList,
      });
    } else {
      res.status(400);
      return res.json({ message: "Bad request! Missing required field." });
    }
  } catch (err) {
    console.log(err);
    res.status(500);
    return res.json({ message: "Internal server error!" });
  }
};

const searchProduct = (req, res) => {
  const { name } = req.body;
  try {
    if (name) {
      let searchedItm = productList.filter((itm) => itm.name == name);
      res.status(200);
      return res.json({
        message: "Search successfull!",
        products: searchedItm,
      });
    } else {
      res.status(200);
      return res.json({
        message: "No itmes selected to search.",
        products: productList,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500);
    return res.json({ message: "Internal server error!" });
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  editProduct,
  deleteProduct,
  searchProduct,
};
