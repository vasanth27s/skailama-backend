const episodeService = require('../services/episodeService.js');

async function updateEpisodeDescription(req, res) {
  try {
    const { episodeId } = req.params;
    const { newDescription } = req.body;

    const updatedEpisode = await episodeService.updateEpisodeDescription(
      episodeId,
      newDescription
    );

    res.json({ message: 'Description updated successfully', data: updatedEpisode });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = {
  updateEpisodeDescription,
};