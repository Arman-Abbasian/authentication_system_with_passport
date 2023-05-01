const express=require("express");
const expressLayout=require("express-ejs-layouts");
const { NotFoundError, ErrorHandler } = require("./middlewares/errorHandling");
require('dotenv').config()
require("./config/mongo.config");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(expressLayout);
app.set("view engine","ejs")
app.set("layout","./layout/main.ejs")

app.use(NotFoundError);
app.use(ErrorHandler);
app.listen(3000,()=>{
    console.log("web server run successfully on port 3000")
})