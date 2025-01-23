import { Product } from "../Models/Product.js";
//add products

export const addProduct = async (req, res) => {
  let newProduct = await Product.create(req.body);

  res.json({ message: "Products added Successfully", newProduct });
};

//get Products

export const getProducts = async (req, res) => {
  let products = await Product.find();  
  res.json({ message: "fetching all products", products });

  
};

export const productbyID = async (req, res) => {
  let id = req.params.id;
  let productbyid = await Product.findById(id);
  res.json({ msg: "get the data by id", productbyid });
};

export const updateProductByid = async (req, res) => {
  let id = req.params.id;
  let updatedProduct = req.body;

  let product = await Product.findByIdAndUpdate(id, updatedProduct, {
    new: true,
  });
  if(!product) return res.json({msg:"Invalide id"})

    res.json({msg:"Product Updated Succesfully"})
};

export const DeletbyId = async (req,res)=>{
    let id = req.params.id;
    let deletProduct = req.body;
    let product = await Product.findByIdAndDelete(id)

    if(!product) return res.json({msg:"Invalide id"})
        res.json({msg:"Product Deleted Succesfully"})
}