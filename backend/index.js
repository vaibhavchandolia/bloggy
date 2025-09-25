import express from "express"
import connectDB from "./lib/connectDB.js"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
import webHookRouter from "./routes/webhook.route.js"

const app = express()

app.use("/webhooks", webHookRouter)
// middleware to accept json
app.use(express.json())

// app.get("/test", (req,res)=>{
//     res.status(200).send("it works!")
// })

// console.log(process.env.CLERK_WEBHOOK_SECRET)

app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

// error handler
app.use((error, req, res, next) =>{

    res.status(error.status || 500)

    res.json({
        messgae: error.messgae || "something went wrong",
        status: error.stack,
        stack: error.stack,
    })

})

app.listen(3000, ()=>{
    connectDB()
    console.log("server is running")
})