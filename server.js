const express = require('express');
const cors = require('cors');
//routes
const users = require('./routes/users');
const videos = require('./routes/videos');
const dialog_timestamps = require('./routes/dialog_timestamps');
const audio_descriptions = require('./routes/audio_descriptions');
const notes = require('./routes/notes');
const audio_clips = require('./routes/audio_clips');
const app = express();
app.use(cors());
app.use(express.json());

port = 4000;

//User Routes
app.use('/api/users', users);
app.use('/api/videos', videos);
app.use('/api/dialog-timestamps', dialog_timestamps);
app.use('/api/audio-descriptions', audio_descriptions);
app.use('/api/notes', notes);
app.use('/api/audio-clips', audio_clips);
app.listen(port, () => console.log(`YDX Backend server on port ${port}!`));
