const express = require("express")
const connect = require("./database/db.config")
const app = express();
const ProductController = require("./controller/product.controller")

connect()
app.use(express.urlencoded({extended:true}))

app.get("/",async(req,res)=>{
    try {
        const productController = new ProductController();
        productController.getAllProducts(req,res);
    } catch (error) {
        console.log("Global Error  "+ error);
    }     
})
app.get("/:name",async(req,res)=>{
    try {
        const productController = new ProductController();
        productController.getAProduct(req,res);
    } catch (error) {
        console.log("Global Error  "+ error);
    }     
})

app.post("/", async (req,res)=>{
    try {
        const productController = new ProductController();
        productController.createProduct(req,res);
    } catch (error) {
        console.log("Global Error  "+ error);
    }

})

app.put("/:name", async(req,res)=>{
    try {
        const productController = new ProductController();
        productController.updateProduct(req,res);
    } catch (error) {
        console.log("Global Error  "+ error);
    }  
})

app.delete("/:name",(req,res)=>{
    try {
       const productController = new ProductController();
       productController.deleteProduct(req,res); 
    } catch (error) {
        console.log("Global Error  "+ error);
    }
})

app.listen(8000)