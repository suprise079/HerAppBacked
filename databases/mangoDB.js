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
  //configure mongoose
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to Mongoose Atlas!"))
    .catch((err) => console.log("Error connecting to Mongoose Atlas: " + err));

  try {
    await client.connect().then(console.log("Connected to MongoDB Atlas!"));
    client.db("test");
    return client;
  } catch (e) {
    console.error("error connecting database: " + e);
  }
};

module.exports = { ConnectDB };
