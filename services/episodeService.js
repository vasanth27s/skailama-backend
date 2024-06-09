const Episode = require('../models/Episode');

class EpisodeService {
  async createEpisode(episodeData) {
    const newEpisode = new Episode(episodeData);
    await newEpisode.save();
    return newEpisode;
  }
}

module.exports = new EpisodeService();
