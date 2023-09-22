const express = require('express');
const app = express();
const routes = require("./src/routes/route.js")
const car = require('./src/api/cars.js');


app.use(express.json());
app.use('/cars', car);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Ping successfully" });
}).all('*', (req, res) => {
    res.status(404).json({ message : 'method and endpoint its not available' })
})

app.listen(5000, () => {
    console.log('listening on http://localhost:5000');
});

module.exports = app;