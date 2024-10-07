import express from "express";




//  create  an express app

const app = express();


// create server
app.listen(3000, () => {
    console.log("app is listening");
});