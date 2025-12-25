import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo DB Connected Successfully on DB HOST: ${connectionInstance.connection.host} `)
    } catch (error) {
        console.log("Mongo DB connection Failed", error)
    }
}

export default connectDB