const Movie = require("./model"); //Taking Movie from model constraints 



exports.listMovie = async (movieObj) => {
  try {
    const response = await Movie.find({}) 
    console.log(response)
  } catch (error) {
      console.log(error);
  }
}

 

exports.addMovie = async (movieObj) => {
 try {
     const response = await Movie.create(movieObj) 
     console.log(response);
 } catch (error) {
     console.log(error);
 }
}

exports.deleteMovie = async(movieObj) => {
   try {
       const response = await Movie.deleteOne(movieObj)
       console.log(response)
   } catch (error) {
       console.log(error)
   }

}


exports.updateMovie = async (movieObj) => {
  try {
    const response = await Movie.findOneAndUpdate(movieObj) 
    
  } catch (error) {
      console.log(error);
  }
}

 






