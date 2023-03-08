const express = require("express");
const {connectDB} = require('./config/db')
const PORT = 8000;

const app = express();

connectDB()

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});