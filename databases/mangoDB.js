const mongoose = require("mongoose");
const { config } = require("dotenv");
const dns = require("dns");

config();
dns.setDefaultResultOrder("ipv4first");

const uri = process.env.DB_URI;

// Log the host only — never log the full URI (contains password)
const getHost = (connectionUri) => {
  try {
    return new URL(connectionUri).host;
  } catch {
    return "<invalid URI>";
  }
};

mongoose.connection.on("disconnected", () =>
  console.warn("MongoDB: disconnected")
);
mongoose.connection.on("reconnected", () =>
  console.log("MongoDB: reconnected")
);
mongoose.connection.on("error", (err) =>
  console.error("MongoDB connection error:", err.message)
);

const ConnectDB = async () => {
  if (process.env.MOCK_MODE === "true") {
    console.log("Mock mode enabled — skipping database connection.");
    return;
  }

  console.log(`Connecting to MongoDB host: ${getHost(uri)}`);

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB Atlas!");
  } catch (err) {
    console.error("Failed to connect to MongoDB Atlas:", err.message);
    process.exit(1);
  }
};

module.exports = { ConnectDB };
