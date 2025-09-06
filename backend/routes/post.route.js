import express from "express"
// import Post from "../models/post.model"

const router = express.Router()

router.get("/", async (req,res)=>{

    // const posts = await Post.find()
    res.send("Hello Postman")
})

export default router