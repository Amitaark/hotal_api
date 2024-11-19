const mongoose = require('mongoose');

// define mongoDB connection URL

const mongoURL = 'mongodb://localhost:27017/star-hotel'

// set up mongo DB Connection 
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Get The Default Connnection
// Mongoose maintains a default conncetion object repesenting the MongoDB Connection
const db = mongoose.connection;

// Define event listener for database connection

db.on('connected', () => {
  console.log("Connected To MongoDB Server");
});
db.on('error', (err) => {
  console.error("MongoDB Database Connection:", err);
});
db.on('disconnected', () => {
  console.log("disConnected To MongoDB Database");
})

//  Export database connection db
module.exports = db;

