import express from "express"
import {DonationControler} from "../controler/donationcontroler.js";



const route=express.Router()
route.post("/submit",DonationControler.createdonation)
route.get("/get",DonationControler.getdonation)
route.put("/:id",DonationControler.updatedonation)
route.get("/donation",DonationControler.getdonationId)
route.get("/",(req,res)=>{
    res.send("get router Response")
})

export default route;