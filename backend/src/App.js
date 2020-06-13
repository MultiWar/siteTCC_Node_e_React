const express = require ('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.urlencoded({ extended: true }));


app.use((error, req, resp, next) => {
    resp.status(error.status || 500);
    resp.json({error: error.message});
})

module.exports = app;