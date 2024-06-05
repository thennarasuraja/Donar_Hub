import http from "http"
import bodyparser from "body-parser"
import cors from "cors"
import express from "express"

import userRoute from "./routes/userRoute.js"
import userDonation from "./routes/donationRoute.js"
import userApplication from "./routes/applicationRoute.js"



const PORT=5001
const server=express()

server.use(cors());
server.use(bodyparser.json());
server.get('/',(req,res)=>{
    res.send(" response")
})

server.use('/user',userRoute)
server.use('/donation',userDonation)
server.use('/application',userApplication)

server.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})









