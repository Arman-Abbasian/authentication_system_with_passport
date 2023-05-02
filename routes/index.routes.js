const {Router}=require("express");
const { indexPage, loginPage, profilePage, registerPage, registerNewUser, loginUser } = require("../controllers/index.controllers");
const { passportAuthentication } = require("../middlewares/passportAuthentication");
const router=Router();
function initRoutes(passport){
    router.get("/",indexPage)
router.get("/login",loginPage)
router.get("/profile",profilePage)
router.get("/register",registerPage)
router.post("/register",registerNewUser);
router.post("/login",passportAuthentication('local','profile','login',true),loginUser);
return router;
}
module.exports={
   AllRoutes:initRoutes
}