const express = require('express');
const Datastore = require('nedb');

const { response } = require('express');
const app = express();
app.listen(3000, () => console.log("Listening at 3000"));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();


app.get("/api", (request, response) => {
    database.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    })
});


app.post('/API', (request, response) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
});