import express from "express";
import mongoose from "mongoose";
import bodyParse from 'express'
import { addProduct ,getProducts ,productbyID ,updateProductByid,DeletbyId} from "./Controllers/product.js";


const app = express();

const port = 3030;
app.use(bodyParse.json()) 

mongoose
  .connect(
    "mongodb+srv://ankadekrushna01:PbFeu4GuENNYFvpk@productsapi.nenqb.mongodb.net/ProductsAPI?retryWrites=true&w=majority&appName=ProductsAPI",
    )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });



  app.get("/", (req, res) => {
    res.send("hello");
  });

 //products get
 app.get('/products',getProducts) 

 //  products adding 
app.post('/products/add',addProduct)

//get the data by id

app.get('/products/:id',productbyID)

//update by id
app.put("/products/:id",updateProductByid)

//Delete by id

app.delete('/products/:id',DeletbyId)

app.listen(port, () => {
  console.log(`server starts on ${port}`);
});
