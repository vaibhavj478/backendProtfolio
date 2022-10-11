


import express from 'express'
import { addVisitor, confirmMail } from '../controller/visitor.controller.js'
import fieldCheck from '../middleware/fieldCheck.js'



const visitorRoutes  = express.Router()



visitorRoutes.post("/post/data" , fieldCheck , addVisitor)
visitorRoutes.get("/confirm/:id" ,confirmMail )



export default visitorRoutes