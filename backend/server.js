const app = require("./app"); //importing app file 

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");


//handling Uncaught error
process.on("uncaughtException", (err)=> {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});
//  console.log(youtube); 


//config

dotenv.config({path:"backend/config/config.env"});

//connecting to database
connectDatabase();

const server = app.listen(process.env.PORT,()=>{ //making a server , and it will be listen to env port
    
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

//uncaught error
// console.log(youtube); --referenceError=youtube not defined

//to handle unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error, ${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection`);

    ServerRouter.close(() => {
        process.exit(1);
    });
});