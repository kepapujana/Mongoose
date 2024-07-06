const Product = require('../models/Product')

const ProductController = {
 async create(req, res) {
   try {
     const product = await Product.create(req.body)
     res.status(201).send(product)
   } catch (error) {
     console.error(error)
     res
       .status(500)
       .send({ message: 'Ha habido un problema al crear el producto' })
   }
 },

 async getAll(req, res) {
  try {
    const products = await Product.find()
    res.send(products)
  } catch (error) {
    console.error(error)
  }
  },

  async getById(req, res) {
    try {
      const product = await Product.findById(req.params._id)
      res.send(product)
    } catch (error) {
      console.error(error)
    }
  }, 

  async getProductsByName(req, res) {
    try {
      const name = new RegExp(req.params.name, 'i')
      const products = await Product.find({ name })
      res.send(products)
    } catch (error) {
      console.log(error)
    }
  },
 

}
module.exports = ProductController