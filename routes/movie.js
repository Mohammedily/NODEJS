import express from "express";
import {
    updateMovieByname,
    getMovieByname,
    getallMovie,
    getMovieById,
    createMovie,
    deleteMovieById,
  } from "../helper.js";


const router = express.Router();


router.route("/").get( async (request, response) => {
    console.log(request.query);
   let filter = request.query; 

   if (filter.rating) {
     filter.rating = parseInt(filter.rating);
   }


   
console.log(filter);


 const movies = await getallMovie(filter);



 response.send(movies);

})
.put( async (request, response) => {
   const { name } = request.query; 
  console.log(request.query, request.body);

  await updateMovieByname(name, request);


 const movie = await getMovieByname(name);

   
   response.send(movie);

}).post( async (request, response) => {
    const data = request.body;
  
   const result = await createMovie(data);
  
  
     
     response.send(result);
    
  
  
  });

router.route("/:id").get( async (request, response) => {
 const { id } = request.params;
 // const movie = movies.find((mv) => mv.id === id);

 const movie = await getMovieById(id);


   
   response.send(movie || {message: "No matching movies"}) 
  


}).delete( async (request, response) => {
 const { id } = request.params;
 // const movie = movies.find((mv) => mv.id === id);

 const movie = await deleteMovieById(id);


   
   response.send(movie || {message: "No matching movies"}) 
  


});




export const  movieRouter = router;