const {Router}=require("express");
const { indexPage, loginPage, profilePage, registerPage } = require("../controllers/index.controllers");
const router=Router();
router.get("/",indexPage)
router.get("/login",loginPage)
router.get("/profile",profilePage)
router.get("/register",registerPage)
module.exports={
    AllRoutes:router
}