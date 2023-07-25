const express = require('express');
const fs = require('fs');

const app = express();

const newsDataPath = './scr/news.json';
const travelDataPath = './scr/travelHistory.json';
const busDataPath = './scr/bus.json';
const stationDataPath = './scr/station.json';

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/news', (req, res) => {
  fs.readFile(newsDataPath, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading data');
    }
    const news = JSON.parse(data);
    res.json(news);
  });
});

app.get('/buses', (req, res) => {
  fs.readFile(busDataPath, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading data');
    }
    const buses = JSON.parse(data);
    res.json(buses);
  });
});

app.get('/travel', (req, res) => {
  fs.readFile(travelDataPath, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading data');
    }
    const travel = JSON.parse(data);
    res.json(travel);
  });
});

app.get('/stops', (req, res) => {
  fs.readFile(stationDataPath, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading data');
    }
    const stations = JSON.parse(data);
    res.json(stations);
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
