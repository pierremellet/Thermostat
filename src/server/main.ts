import express from "express";
const app = express();
const port = 8080; // default port to listen

 
app.use(express.static('public')); 
app.use(express.static('build/client')); 

// define a route handler for the default home page
app.get( "/", ( req, res ) => { 
    res.redirect("/dashboard.html");
} );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );