const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const { config } = require("dotenv");
const dns = require('dns');

config();
const uri = process.env.DB_URI;

dns.setDefaultResultOrder('ipv4first');
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true,
  },
});

const ConnectDB = async () => {
  if (process.env.MOCK_MODE === "true") {
    console.log("Mock mode enabled — skipping database connection.");
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("Connected to Mongoose Atlas!");
  } catch (err) {
    console.error("Error connecting to Mongoose Atlas:", err.message);
    // process.exit(1);
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
