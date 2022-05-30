require("./db/connection"); // This runs all lines in connection.js connecting us to Database.
const yargs = require("yargs")// Lets us use Yargs
const mongoose = require("mongoose");
const { addMovie } = require("./movie/functions");
const { deleteMovie } = require("./movie/functions");
const { updateMovie } = require("./movie/functions");



const app = async (yargsObj) => {
    if(yargsObj.addMovie){ // Terminal Call: node src/app.js --addMovie --title "Batman" --actor "Christian Bale"  //adds movie to database from yargs input
       
       await addMovie({title: yargsObj.title, actor: yargsObj.actor })
    } else if (yargsObj.list){


    } else if (yargsObj.updateMovie) { // Terminal Call: --updateMovie --title "Batman 2" --newTitle "new film title"
         await updateMovie({
         title: yargsObj.newTitle,
         actor: yargsObj.newActor, 

         })
   
    } else if (yargsObj.deleteMovie) { // Call deleteMovie in terminal 
      await deleteMovie()
   

      console.log('Previous movie has been deleted');
    } else {
   
    }
    await mongoose.disconnect();


}


app(yargs.argv)