const express=require("express");
const expressLayout=require("express-ejs-layouts");
const flash=require("express-flash");
const session=require("express-session");
const passport=require("passport");
const {passportInit}=require("./config/passport.config")
const { NotFoundError, ErrorHandler } = require("./middlewares/errorHandling");
const {AllRoutes}=require("./routes/index.routes")
require('dotenv').config()
require("./config/mongo.config");
const app=express();
//setup application
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//error message in page
app.use(flash());
app.use(session({secret:"sercret key",resave:false,saveUninitialized:false}))
//setup view eingine and layout
app.use(expressLayout);
app.set("view engine","ejs")
app.set("layout","./layout/main.ejs")
//setup passport
passportInit(passport);
app.use(passport.initialize());
app.use(passport.session());
//all routes
app.use(AllRoutes(passport))
//error handling
app.use(NotFoundError);
app.use(ErrorHandler);
app.listen(3000,()=>{
    console.log("web server run successfully on port 3000")
})