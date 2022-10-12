

import mongoose from "mongoose";

import dotenv from 'dotenv'


dotenv.config()

const dataBase = async() =>{

    try {
        
      let data =  await  mongoose.connect(process.env.DATABASE,{useNewUrlParser: true,
        useUnifiedTopology: true});

      console.log(`database connected`);

    } catch (error) {
     
        console.log(`${error.message}`);
        
    }
}

export default dataBase