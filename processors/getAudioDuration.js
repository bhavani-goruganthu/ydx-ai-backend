const { getAudioDurationInSeconds } = require('get-audio-duration');

const getAudioDuration = async (filepath) => {
  const path = filepath.replace('.', './public');
  return await getAudioDurationInSeconds(path).then((duration) => {
    return duration;
  });
};

module.exports = getAudioDuration;
