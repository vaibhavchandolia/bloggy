import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webHookRouter from "./routes/webhook.route.js";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";

const app = express();
//middlewares
app.use(cors(process.env.CLIENT_URL));
app.use(clerkMiddleware());
app.use("/webhooks", webHookRouter);
// middleware to accept json
app.use(express.json());

//middleware for imagekit 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 

// app.get("/auth-state", (req, res) => {
//   const authState = req.auth();
//   res.json(authState);
// });

// app.get("/protect", (req, res) => {
//   const {userId} = req.auth();
//   if (!userId) {
//     return res.status(401).json("Unauthorized");
//   }
//   res.status(200).json("content");
// });

// app.get("/protect", (req, res) => {
//   const { userId } = req.auth;
//   if (!userId) {
//     return res.status(401).json("not authenticated");
//   }
//   res.status(200).json("content");
// });

// app.get("/test", (req,res)=>{
//     res.status(200).send("it works!")
// })

// console.log(process.env.CLERK_WEBHOOK_SECRET)

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

// error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "something went wrong",
    status: error.stack,
    stack: error.stack,
  });
});

app.listen(3000, () => {
  connectDB();
  console.log("server is running");
});
