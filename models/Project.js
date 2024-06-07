
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  episodes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Episode',
  }],
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
