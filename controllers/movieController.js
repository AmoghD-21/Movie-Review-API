import {Movie} from "../models/Movie.js";

// get all movies

export const getMovies=async (req,res)=>{
    try{
        const movies=await Movie.find();
        res.json(movies);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

// Add a new movie
export const addMovie=async (req,res)=>{
    try{
        const {title,director,releaseYear,rating,review}=req.body;
        const newMovie=new Movie ({title,director,releaseYear,rating,review});
        await newMovie.save();
        res.status(201).json(newMovie);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

// Update a new movie

export const updateMovie=async (req,res)=>{
    try{
        const updatedMovie=await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(updatedMovie);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

//Delete a movie
export const deleteMovie=async (req,res)=>{
    try{
        await Movie.findByIdAndDelete(req,params.id);
        res.json({message:"Movie deleted successfully"});
    }catch(error){
        res.status(500).json({ message: error.message });
    }
};