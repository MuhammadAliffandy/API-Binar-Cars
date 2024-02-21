const express = require('express');
const app = express();
const cars = require("./src/api/cars")
const cors = require('cors')
require('dotenv').config()

const corsOptions = {
    origin: '*', 
    methods: 'GET,POST,DELETE,PUT', 
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});
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