import { Schema, model } from "mongoose";

const data = new Schema({
    firstn: {
        type : String , 
        required : true
    }
   , lastn: {
    type : String , 
     required : true
} ,
email: {
    type : String , 
    required : true 
} ,
password: {
    type : String , 
    required : true
} ,
createdate:{
    type:Date , 
    default:Date.now
} , 
updateDate:{
    type:Date , 
    default:Date.now
}
}) 

const posts = model("post1" ,data)
export default posts