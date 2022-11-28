import { Router } from "express";
const userRouter = Router();
import UserController from "../controller/user.controller.js"

userRouter.get("/:email", async (req, res) => {
    try {
        const userController = new UserController();
        userController.getUsers(req, res);
    } catch (error) {
        console.log("Global Error  " + error);
    }
})

userRouter.post("/", async (req, res) => {
    try {
        const userController = new UserController();
        userController.createUser(req, res);
    } catch (error) {
        console.log("Global Error  " + error);
    }

})
export default userRouter;
