import mongoose from "mongoose";

const connectDb = async () =>{
    try{
        
        const conn = await mongoose.connect(process.env.mongo_url);
        console.log(`connected to the ${conn.connection.name} database successfully.`)
    }catch(e){
        console.log(e);
    }
}

export default connectDb