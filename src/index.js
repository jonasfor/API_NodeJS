const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))




require('./controllers/localController')(app);
require('./controllers/stationController')(app);

app.listen(3000)
