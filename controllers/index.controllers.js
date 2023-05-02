const { hashSync } = require("bcrypt")
const { UserModel } = require("../models/user.model")

function indexPage(req,res,next){
    try {
        res.render("index",{title:"index"})
    } catch (error) {
        next(error)
    }
}
function loginPage(req,res,next){
   try {
    res.render("login",{title:"login"})
   } catch (error) {
    next(error)
   }
}
function profilePage(req,res,next){
    try {
        res.render("profile",{title:"profile",user:{fullName:"",username:"",password:""}})
    } catch (error) {
        next(error)
    }
}
function registerPage(req,res,next){
   try {
    res.render("register",{title:"register"})
   } catch (error) {
    next(error)
   }
}
async function registerNewUser(req,res,next){
    try {
        const {fullname,username,password}=req.body;
        const user=await UserModel.findOne({username});
        if(user){
           const d= req.flash("error","this username already exist");
           console.log(d)
            res.redirect("/register")
        }
       await UserModel.create({
            fullName:req.body.fullname,username:req.body.username,password:hashSync(req.body.password,10)
        })
        req.flash("success","account made successfully");
        res.redirect("/register")
    } catch (error) {
        next(error)
    }
}
async function loginUser(req,res,next){
    res.redirect("/profile")
}
module.exports={
    indexPage,
    loginPage,
    profilePage,
    registerPage,
    registerNewUser,
    loginUser
}