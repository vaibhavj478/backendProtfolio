

import mongoose from "mongoose";

import dotenv from 'dotenv'


dotenv.config()

const dataBase = async() =>{

    try {
        
        await  mongoose.connect(process.env.DATABASE)

    } catch (error) {
     
        console.log(`${error.message}`);
        
    }
}

export default dataBase