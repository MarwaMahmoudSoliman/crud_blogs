const User = require("../models/user")
const loggerEvent  = require("../services/logger.service")
const logger =loggerEvent ("auth")
const userController = {
    deleteUser : async(req,res) =>{
        try{
logger.info(req.params)
let {id}=req.params
await User.findByIdAndDelete(id)
res.send({
    message:"Account deleted  !!"
})
res.send(id)
        }
        catch(error){
            logger.error(error.message)
        res.status(500).send({
            message:error.message 
        })
    }

    }
}
module.exports =userController ;