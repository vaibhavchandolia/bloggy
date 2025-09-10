import express from "express"
import { getPosts } from "../controllers/post.controller.js"

const router = express.Router()

router.get("/", getPosts)
router.get("/:slug", getPosts)
router.post("/", createPosts)

export default router