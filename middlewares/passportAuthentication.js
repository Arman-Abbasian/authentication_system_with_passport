const passport = require("passport")

function passportAuthentication(strategyName,successRedirect,failureRedirect,flashCondition){
return passport.authenticate(strategyName,{
    successRedirect:`/${successRedirect}`,
    failureRedirect:`/${failureRedirect}`,
    failureFlash:flashCondition
})
};
module.exports={passportAuthentication}