import express from 'express';

// HTTP Server Setup
const app = express();
app.use(express.static('.'));
app.listen(8080);