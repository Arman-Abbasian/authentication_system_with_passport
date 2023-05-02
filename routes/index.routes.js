const {Router}=require("express");
const { indexPage, loginPage, profilePage, registerPage, registerNewUser, loginUser } = require("../controllers/index.controllers");
const { passportAuthentication, redirectIfIsAuth, checkAuthentication, logout } = require("../middlewares/passportAuthentication");
const router=Router();
function initRoutes(passport){
    router.get("/",indexPage)
router.get("/login",redirectIfIsAuth,loginPage)
router.get("/profile",checkAuthentication,profilePage)
router.get("/register",redirectIfIsAuth,registerPage)
router.post("/register",redirectIfIsAuth,registerNewUser);
router.post("/login",redirectIfIsAuth,passportAuthentication('local','profile','login',true),loginUser);
router.get("/logout",checkAuthentication,logout)
return router;
}
module.exports={
   AllRoutes:initRoutes
}