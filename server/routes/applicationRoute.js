import express from "express"
import { ApplicationControler } from "../controler/applicationcontroler.js"

const route = express.Router()

route.post("/create", ApplicationControler.create)
route.put("/update", ApplicationControler.update)
route.get("/get", ApplicationControler.getapplication)
route.get((req, res) => {
    res.send("get application router")
})























export default route;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 