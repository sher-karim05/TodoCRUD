const express = require("express");
const {connectDB} = require('./config/db')
const PORT = 8000;

const app = express();

connectDB()
const routes = require('./routes/router')
const PORT = 8000;

const app = express();
app.use('/api/',routes)
 routes
app.listen(PORT, async () => {
  console.log(`server up on port:http://localhost:${PORT}`);
});