const express = require('express');
const app = express();
const cars = require("./src/api/cars")
require('dotenv').config()

app.use(express.json());
app.use('/',cars);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Ping successfully" });
}).all('*', (req, res) => {
    res.status(404).json({ message : 'method and endpoint its not available' })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});

module.exports = app;