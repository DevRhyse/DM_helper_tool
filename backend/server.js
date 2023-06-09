const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")
// const logger = require("morgan");
const connectDB = require("./config/database");
const homeRoutes = require("./routes/main");
const encounterRoutes = require("./routes/encounterRoutes");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
// app.use(logger("dev"));

//Connect To Database
connectDB().then(conn => {
  // Setup Sessions - stored in MongoDB
  app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ client: mongoose.connection.getClient() }),
    })
  );

  // Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

  //Setup Routes For Which The Server Is Listening
  app.use("/", homeRoutes);
  app.use("/encounters", encounterRoutes);


  //Server Running
  app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
  });
});