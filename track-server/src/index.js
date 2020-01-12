require('./models/User');
require('./models/Track');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoURI =
  'mongodb+srv://bhvbhushan7:bhav@8826@cluster0-ultyi.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to Mongoose');
});

mongoose.connection.on('error', e => {
  console.log('Error to Mongoose', e);
});

app.get('/', requireAuth, (req, res) => {
  res.send(`Your Email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Listening on Port: 3000');
});
