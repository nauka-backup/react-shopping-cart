const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost/react-shopping-cart-db', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

// define the product model
const Product = mongoose.model(
    'products',
    new mongoose.Schema({
        _id: { type: String, default: shortid.generate },
        title: String,
        description: String,
        image: String,
        price: Number,
        producer: String,
    })
);
// define the first endpoint
app.get('/api/products', async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

// create an endpoint to create a product in database
app.post('/api/products', async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

// delete product
app.delete('/api/products/:id', async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('serve at http://localhost:5000'));
