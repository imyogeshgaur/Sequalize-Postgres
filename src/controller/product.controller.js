const ProductServices = require("../services/product.service")

class ProductController {
    constructor() {
        this.producrServices = new ProductServices();
    }
    async createProduct(req, res) {
        try {
            const body = req.body;
            const productCreated = await this.producrServices.createProduct(body);
            return res.status(200).send(productCreated)
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal Server Error !!!")
        }
    }
    async getAProduct(req, res) {
        try {
            const name = req.body.name;
            const singleProduct = await this.producrServices.getAProduct(name);
            return res.status(200).send(singleProduct)
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal Server Error !!!")
        }
    }
    async getAllProducts(req, res) {
        try {
            const productsList = await this.producrServices.getAllProducts();
            return res.status(200).send(productsList);
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal Server Error !!!")
        }
    }
    async updateProduct(req, res) {
        try {
            const name = req.params.name;
            const data = req.body;
            await this.producrServices.updateProduct(name, data);
            return res.status(200).send("Product Updated !!!")
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal Server Error !!!")
        }
    }
    async deleteProduct(req, res) {
        try {
            const name = req.params.name;
            await this.producrServices.deleteProduct(name);
            return res.status(200).send("Product Deleted !!!")
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal Server Error !!!")
        }
    }
}

module.exports = ProductController;
