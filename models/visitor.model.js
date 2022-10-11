

import mongoose from "mongoose";


const visitorModel =  mongoose.Schema({


name:{
    type:String,
    maxLength:18,
    trim :true,
    required: true

},
email:{
    type:String,
    lowercase:true,
    required:true,
    trim :true,
    required: true
},

number:{
    type:String,
    trim :true,
    required: true
},


message:{

    type:String,
    trim :true
},

queryAt:{
    type :Date,
    default : Date.now()

},

isAuth:{

    type:Boolean,
    default:false,
    required: true
}


});



const Visitor = mongoose.model("Visitor", visitorModel);


export default Visitor