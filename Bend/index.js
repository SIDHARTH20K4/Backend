const express = require('express');
const app = express();
const mongoose = require('mongoose');
const product = require("./model/product.model.js");
app.use(express.json());

mongoose.connect("mongodb+srv://fitnessbro500:S.K.Sidharth2004@cluster0.zzgseiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("connected to database!");
    }).catch((err) => {
        console.log("connection failed!", err.message);
    });


app.get('/', (req, res) => {
    res.send("Hello from node API");
});


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