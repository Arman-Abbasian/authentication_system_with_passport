function indexPage(req,res){
    res.render("index.ejs",{title:"index"})
}
module.exports={
    indexPage
}