const express = require('express');
const Datastore = require('nedb');

const { response } = require('express');
const app = express();
app.listen(3000, () => console.log("Listening at 3000"));
app.use(express.static('public'));
app.use(express.json({limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/API', (request, response) => {
    console.log("I got a request!");
    console.log(request.body);
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json({
        status: "Succes",
        latitude: data.lat,
        longitude: data.lng,
        timestamp: data.timestamp
    });
});