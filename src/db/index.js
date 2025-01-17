import mongoose from 'mongoose';
import {DB_NAME} from "../constant.js"

const connectDB=async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected || DB HOST: 
            ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("MONGODB connection erroe ",error)
        process.exit(1);//process exited due node server failure
    }
}

export default connectDB