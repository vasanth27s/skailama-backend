
const Episode = require('../models/Episode.js');

async function createEpisode(episodeData) {
  try {
   
    const newEpisode = new Episode(episodeData);
    
    await newEpisode.save();
    return newEpisode;
  } catch (error) {
    console.log(error)
    throw error;
  }
}

async function deleteEpisode(episodeId)  {
  try {
    
    await Episode.findByIdAndDelete(episodeId);
  } catch (error) {
    console.error(error);
    throw new Error('Error deleting episode');
  }
}

async function updateEpisodeDescription(episodeId, newDescription) {
  try {
    const updatedEpisode = await Episode.findByIdAndUpdate(
      episodeId,
      { description: newDescription },
      { new: true } // Return the updated document
    );

    return updatedEpisode;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createEpisode,
  deleteEpisode,
  updateEpisodeDescription
};
