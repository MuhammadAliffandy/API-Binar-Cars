const express = require('express');
const app = express();
const cars = require("./src/api/cars")

app.use(express.json());
app.use('/',cars);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Ping successfully" });
}).all('*', (req, res) => {
    res.status(404).json({ message : 'method and endpoint its not available' })
})

app.listen(5000, () => {
    console.log('listening on http://localhost:5000');
});

module.exports = app;