


import nodemailer from 'nodemailer'
import dotenv from 'dotenv'


dotenv.config();



const transporterFunction  = async()=>{

    try {

        const transporter  = await nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure:true,
            // service:"gmail",
            auth: {
            user: "vaibhavj478@gmail.com",
            pass: process.env.Pass,
            },
            // tls:{
            //     rejectUnauthorized:false
            // }
        })


            // verify connection configuration
          await  transporter.verify(function (error, success) {
                if (error) {
                console.log(error);
                } else {
                console.log("Server is ready to take our messages");
                }
            });
        
            return transporter

    } catch (error) {
        console.log(error.message);
    }
}



export default transporterFunction