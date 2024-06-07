
const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema({
  episodeName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, 
});

const Episode = mongoose.model("Episode", episodeSchema);

module.exports = Episode;
