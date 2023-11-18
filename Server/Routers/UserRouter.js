import  express  from "express";
import { userLogin } from "../Controllers/UserController.js";

const router=express.Router()
router.post('/login',userLogin)
export default router