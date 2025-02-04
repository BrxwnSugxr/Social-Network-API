// Main entry point for the server
// Dependencies
const express = require("express");
const db = require("./config/connection");
const routes = require("./Routes"); //folder start lowercase but error saying upercase?

// Define the port the server will run on
const PORT = 3001;
const app = express();

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Connect to the MongoDB database and start the server after the connection is established
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
