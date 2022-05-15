const Videos = require('../models/Videos');

// db processing is done here using sequelize models

// find one Video by YouTubeVideoId
exports.getVideobyYoutubeId = async (req, res) => {
  Videos.findOne({
    where: {
      youtube_video_id: req.params.youtubeId,
    },
  })
    .then((videos) => {
      // console.log(videos);
      return res.send(videos);
    })
    .catch((err) => {
      console.log(err);
    });
};
