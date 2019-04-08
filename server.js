const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

const { PORT } = process.env;

function listenCB () {
    console.log('now we\'re running server on port: ' + PORT);
}

// Now let's add the static files with express middleware

app.use(cors());
app.get('/comics', (req, res)=>{ 
  axios.get(req._parsedUrl.query)
  .then(function(response) {
    res.status(200);
    res.json(response.data)
  })
  .catch(function (error) {
  }); 
})

app.listen(PORT, listenCB);