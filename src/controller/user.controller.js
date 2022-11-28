import UserService from "../services/user.service.js";

class UserController {
    constructor() {
        this.userServices = new UserService();
    }
    async createUser(req, res) {
        try {
            const body = req.body;
            const user = await this.userServices.createUser(body);
            return res.status(200).send(user)
        } catch (error) {
            console.log(error);
            return res.status(200).send("Internal Server Error !!!")
        }
    }
    async getUsers(req, res) {
        try {
            const email = req.params.email;
            const user = await this.userServices.getUsers(email);
            return res.status(200).send(user)
        } catch (error) {
            console.log(error);
            return res.status(200).send("Internal Server Error !!!")
        }
    }
}

export default UserController;