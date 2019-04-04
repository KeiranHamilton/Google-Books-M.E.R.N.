require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const mongoose = require("mongoose");
const mongoURL =
  process.env.PROD_MONGODB ||
  "mongodb://keiranhamilton:love4kalli@ds117858.mlab.com:17858/heroku_1q2d7w9h";

mongoose.Promise = global.Promise;

mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => {
    console.log("🗄 ==> Successfully connected to mongoDB.");
  })
  .catch(err => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });

require("./routes/api-routes")(app);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
