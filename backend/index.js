import express from "express"
import userRouter from "./routes/user.route"
import postRouter from "./routes/post.route"
import commentRouter from "./routes/comment.route"

const app = express()

console.log(process.env.test)

app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

app.listen(3000, ()=>{
    console.log("server is running")
})