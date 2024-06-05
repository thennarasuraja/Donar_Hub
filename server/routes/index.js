import express from "express";
const router = express.Router();

// Define a route for the root URL ('/')

console.log("dsfhks");
router.get("/", (req, res) => {
  res.send("Hello, World from the Router!");
});

export default router;
