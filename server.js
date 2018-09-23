const path = require('path');
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');

const express = require('express');

const app = express();

const server = http.createServer(app);
const cors = require('cors');
var theDictionary = {};
app.use(cors())

// Depending on your own needs, this can be extended
app.use(bodyParser.json({ limit: '50mb', extended: true })); // working mostly in our case
app.use(bodyParser.raw({ limit: '50mb' }));
app.use(bodyParser.text({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));


server.listen(process.env.PORT || 3000, function(aa, bb){
  console.log('these after hours got me charged')
});

// Allowed extensions list can be extended depending on your own needs
const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
  '.gif'
];

app.get('*', (req, res) => {
  
  if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
    
    res.sendFile(path.resolve(`dist/${req.url}`));
  } else {
    res.sendFile(path.resolve('dist/index.html'));
  }
});


