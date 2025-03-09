import mongoose from "mongoose";

const movieSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    director:{
        type:String,
        required:true,
    },
    releaseYear:{
        type:Number,
        required:true,
    },
    rating:{
        type:Number,
        min:1,
        max:10,
        required:true,
    },
    review:{
        type:String,
        required:true,
    },

},{timestamps:true});

const Movie=mongoose.model("Movie",movieSchema);
const exportModels ={Movie};
module.exports=exportModels;