const passport = require("passport")

function passportAuthentication(strategyName,successRedirect,failureRedirect,flashCondition){
return passport.authenticate(strategyName,{
    successRedirect:`/${successRedirect}`,
    failureRedirect:`/${failureRedirect}`,
    failureFlash:flashCondition
})
};
//this middleware use in the pages that authenticated user is need
function checkAuthentication(req,res,next){
    if(req.isAuthenticated()) return next();
    return res.redirect("/login")
}
//this route is used when autheticated user want to go to register or login page 
function redirectIfIsAuth(req,res,next){
    if(req.isAuthenticated()) res.redirect ("/profile")
    return next()
}
module.exports={
    passportAuthentication,
    checkAuthentication,
    redirectIfIsAuth
}