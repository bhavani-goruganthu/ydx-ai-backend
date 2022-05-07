const Sequelize = require('sequelize');
const db = require('../config/db');

const Videos = db.define('Videos', {
  video_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  youtube_video_id: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  video_name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  video_length: {
    allowNull: false,
    type: Sequelize.FLOAT,
  },
});

module.exports = Videos;