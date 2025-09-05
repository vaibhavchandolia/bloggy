import mongoose from "mongoose"

const connectDB = async () => {
    // console.log("fn is running"
    try{
        // console.log("hello!!")
        await mongoose.connect(process.env.MONGO)
        console.log("mongoDB is connected")
    } 
    catch(err){
        console.log(err)
    }
}


export default connectDB