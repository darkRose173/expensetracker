import mongoose from "mongoose";

async function dbConnect(){
    try {
        await mongoose.connect("mongodb+srv://nihalraghuraj:jWVkhj1Xbn2dlqPV@cluster0.5stanh9.mongodb.net/?retryWrites=true&w=majority")
        console.log("Mongo DB is Connected")
    } catch (error) {
        console.log(error)
    }
}

export default dbConnect