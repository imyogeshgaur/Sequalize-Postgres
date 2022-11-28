import User from "../model/user.entity.js";
import Product from "../model/product.entity.js"
class UserService {
    async createUser(body) {
        const { name, email, password } = body;
        const createdProduct = await User.create({ name, email, password });
        return createdProduct.dataValues;
    }
    async getUsers(email) {
        User.belongsTo(Product,{foreignKey:'id'});
        const user = await User.findOne({
            where:{email},
            attributes:['name','email','password'],
            include:[
                {
                    model:Product,
                    attributes:['name','qty']
                }
            ]
        })
        return user.dataValues
    }
}

export default UserService