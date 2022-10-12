// const express = require("express");

import express from "express";

import dotenv from "dotenv";
import cors from "cors";
import dataBase from "../config/database.js";
import visitorRoutes from "../routes/visitor.routes.js";

const app = express();

dotenv.config();
// middleware  handlers  express routes


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.get("/",async (req,res)=>{

  try {
    
    res.status(200).send({
      success:true,
      message:"good"
    })

  } catch (error) {
    res.status(500).send({
      success:false,
      message:"not good"
    })
  }

})

app.use("/portfolio/api", visitorRoutes);



app.listen(process.env.PORT|| '5050', async () => {
  try {

    await dataBase();

    console.log(`http://localhost:${process.env.PORT|| '5050'}`);
  } catch (error) {
    console.log(`${error.message}`);
  }
});
