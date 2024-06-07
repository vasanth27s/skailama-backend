const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');
const episodeRoutes = require('./routes/episodeRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/projects', projectRoutes);
app.use('/user', userRoutes);
app.use('/episodes', episodeRoutes);

const mongoURI = process.env.NODE_ENV === "users" ? process.env.MONGO_URI_PROD : "mongodb://localhost:27017/skailama";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.json({
    hello: "welcome User",
  });
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
