const Sequelize = require('sequelize');
const db = require('../config/db');
const Video = require('./Video');

const Dialog_Timestamps = db.define('Dialog_Timestamps', {
  dialog_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  dialog_sequence_num: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  dialog_start_time: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  dialog_end_time: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  dialog_duration: {
    allowNull: false,
    type: Sequelize.STRING,
  },
});

//Associations
Dialog_Timestamps.belongsTo(Video, {
  through: 'timestamps_video_relation',
});

module.exports = Dialog_Timestamps;
