import mongoose from "mongoose"

const connection = mongoose.connect("mongodb+srv://mongodbuser:l5VZbVzrdsiBtzyX@cluster0.remy0uy.mongodb.net/?retryWrites=true&w=majority" , {
    UseNewurlParser:true , 
    UseUnifiedTopology: true , 
})



export default connection