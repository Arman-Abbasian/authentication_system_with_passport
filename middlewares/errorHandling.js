function NotFoundError(req,res,next){
    res.status(404).json({
        statusCode:res.statusCode,
        error:{
            message:"not found page"
        }
    })
};
function ErrorHandler(err,req,res,next){
    console.log(err)
    res.json({
        statusCode:res?.statusCode ?? res?.status ?? 500,
        error:{
            message:err?.message?? "internal server error"
        }
    })
};
module.exports={
    NotFoundError,
    ErrorHandler
}