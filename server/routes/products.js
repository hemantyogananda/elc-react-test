const productRoutes = (app, fs) => {

    
  
    // READ
    // Notice how we can make this 'read' operation much more simple now.
    
    app.get('/products', getProducts);
    app.get('/products/:id', getProductsWithId);
  };
  const data = require('../data');
  const getProducts = (req, res, next) => {
    try {
      const { query } = req;
      if (query.search) {
        const regex = new RegExp(query.search, "i");
        const filterProducts = data.filter(
          (product) =>
            (product.name.trim().search(regex) !== -1) &&
            JSON.parse(product.isActive)
        )
        // const items = filterProducts.slice(0, 2) 
        return res.status(200).send({ data: filterProducts });
      }
      return res.status(200).send({data});
    } catch (error) {
      next(error);
    }
  };

  const getProductsWithId = (req, res, next) => {
    const { id } = req.params;
    const filteredData = data.find((x) => x._id === id);
    return res.status(200).send({data:filteredData});
  };
  
  module.exports = productRoutes;