import { Schema , model } from "mongoose";

const postschema = new Schema(
    {
        title: {
            type : String , 
            required : true
        } , 
        author: {
            type : String , 
            required : true
        } , 
        content: {
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

    }
) 
 const Post = model("post" , postschema) 
 export default Post ; 