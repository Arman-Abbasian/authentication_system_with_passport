function indexPage(req,res){
    res.render("index",{title:"index"})
}
function loginPage(req,res){
    res.render("login",{title:"login"})
}
function profilePage(req,res){
    res.render("profile",{title:"profile",user:{fullName:"",username:"",password:""}})
}
function registerPage(req,res){
    res.render("register",{title:"register"})
}
module.exports={
    indexPage,
    loginPage,
    profilePage,
    registerPage
}