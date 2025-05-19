const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoute = require('./routes/product.rout');

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

app.use("/api/products", productRoute);

app.listen(3000, () => {
    console.log('server is running on port 3000');
});



//mongodb+srv://fitnessbro500:S.K.Sidharth2004@cluster0.zzgseiz.mongodb.net/

//mongodb+srv://fitnessbro500:<db_password>@cluster0.zzgseiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0