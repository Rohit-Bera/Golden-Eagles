//selectors
const { request, response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const app = express();
//importing schema from USer file for mongodb
const User = require("./User");

//Shared resources through CORS Allows to share Data from backend-to-front-end ...
app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "http://localhost:3000");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin , X-Requested-With , Content-Type ,Accept"
  );
  next();
});

//connection to database
mongoose
  .connect(
    "mongodb+srv://RohanNaruto:NeverGiveUp@cluster0.qwi7t.mongodb.net/UserDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    console.log("congrats your database got connected :)");
  })
  .catch((error) => {
    console.log("Sorry your database didn't get connect :(");
  });

//make sure to use body-parser to get data..
app.use(bodyparser.json());

//post-api-to-database
app.post("/addUser", async (request, response) => {
  try {
    const person = request.body;

    const exist = await User.findOne({ Firstname: person.Firstname });

    if (exist) {
      console.log("data already exist..");
      response.json("data already exist in database...");
    } else {
      //declaration
      const newUser = new User(person);

      //saving of the user
      await newUser.save();

      console.log("the new user is ::", newUser);
      response.json(newUser);
    }
  } catch (error) {
    console.log("error: ", error);
  }
});

//getApi-to-get-data-from-database
app.get("/getUser", async (reuqest, response) => {
  await User.find((error, person) => {
    if (error) {
      console.log("No data exist..");
    } else {
      console.log("Users from DataBase are ::", person);
      response.json(person);
    }
  });
});
//----------------------------------------------------------------------------------
//to run in localhost:6500
const port = 6500;
app.listen(port, () => {
  console.log("server is live on port:6500");
});
