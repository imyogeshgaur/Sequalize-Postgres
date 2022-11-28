import { DataTypes,Sequelize} from "sequelize"
import Product from "./product.entity.js"
const sequelize = new Sequelize('testing', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    logging:false
  });

const User = sequelize.define('User',{
    name:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
})
User.sync({alter:true})
export default User