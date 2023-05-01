const {Router}=require("express");
const { indexPage } = require("../controllers/index.controllers");
const router=Router();
router.get("/",indexPage)
module.exports={
    AllRoutes:router
}