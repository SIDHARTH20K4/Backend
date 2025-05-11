const express = require('express');
const app = express();
const mongoose = require('mongoose');
const product = require("./model/product.model.js");
const Product = require('./model/product.model.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://fitnessbro500:S.K.Sidharth2004@cluster0.zzgseiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("connected to database!");
    }).catch((err) => {
        console.log("connection failed!", err.message);
    });


app.get('/', (req, res) => {
    res.send("Hello from node API");
});

app.get('/api/products', async(req, res) => {
    try {
        const products = await product.find({});
        res.status(500).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.get('/api/products/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const Product = await product.findById(id);
        res.status(200).json(Product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.put('/api/products/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const Product = await product.findByIdAndUpdate(id, req.body);
        if (!Product) {
            return res.status(404).json({ message: "product not found" });
        }

    }
})

app.post("/api/products", async(req, res) => {
    try {
        console.log("Request Body:", req.body); // 👈 log this to see what you're getting
        const createdProduct = await product.create(req.body);
        res.status(200).json({ createdProduct });
    } catch (error) {
        console.error(error); // 👈 log full error
        res.status(500).json({ message: error.message });
    }
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});



//mongodb+srv://fitnessbro500:S.K.Sidharth2004@cluster0.zzgseiz.mongodb.net/

//mongodb+srv://fitnessbro500:<db_password>@cluster0.zzgseiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0