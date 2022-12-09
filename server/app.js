const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();
const cors = require("cors");

//--------------------------------------- END OF IMPORTS -----------------------------------------//

// const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/gourmand-hall";
mongoose
  .connect("mongodb://localhost:27017/time-billing")
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log(error.message));

//MIDDLEWARE
//bodyParser allow the usage of req.body
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//SESSION
// const sessionConfig = {
//     secret: "badsecret",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       httpOnly: true,
//       expries: Date.now() + 1000 * 60 * 60 * 24 * 7,
//       maxAge: 1000 * 60 * 60 * 24 * 7,
//     },
//   };

//   app.use(session(sessionConfig));

//   app.use(passport.initialize());
//   app.use(passport.session());
//   require("./passportConfig")(passport);

//   app.use((req, res, next) => {
//     res.locals.currentUser = req.user;
//     next();
//   });

//--------------------------------------- END OF MIDDLEWARE -----------------------------------------//

//--------------------------------------- END OF ROUTES -----------------------------------------//

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
