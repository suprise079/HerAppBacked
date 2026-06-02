const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const { config } = require("dotenv");

config();
const uri = process.env.DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    deprecationErrors: true,
  },
});

const ConnectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to Mongoose Atlas!");
  } catch (err) {
    console.error("Error connecting to Mongoose Atlas:", err.message);
    process.exit(1);
  }

  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!!!");
    client.db("test");
    return client;
  } catch (e) {
    console.error("Error connecting to MongoDB native client:", e.message);
  }
};

module.exports = { ConnectDB };
