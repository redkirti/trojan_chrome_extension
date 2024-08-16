const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const logs = require('./models/logs');
var fs = require('fs');
// express app
const app = express();
// app.use(express.static(__dirname + '/public'));
app.listen(3000);

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://redkirti:Strong1234@cluster0.4oandf8.mongodb.net/orderbook?retryWrites=true&w=majority";

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(dbURI,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
        console.log('Listening on Port 3000')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })          


// register view engine
app.set('view engine', 'ejs');
app.use(express.json({
    type: "*/*"
  }))

app.post('/logs', async (req, res) => {
    console.log(req.body);
    const log = new logs(req.body);
    log.save().then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    })
});


