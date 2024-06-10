import express from "express"
import  {UserControler}  from "../controler/usercontroler.js";

const route=express.Router()

route.post("/register",UserControler.creatuser)
route.post("/login",UserControler.loginuser)
route.get("/userdata",UserControler.getuser)
route.put("/userupdate",UserControler.update)
console.log('fghjk')
route.get("/",(req,res)=>{
    res.send("get router response")
    console.log("dgdfgdg")
})

export default route;