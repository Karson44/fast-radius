require("dotenv").config();
const express = require("express");
const cors = require("cors");
const massive = require("massive");

const app = express();
app.use(cors());
app.use(express.json());

massive({
    connectionString: process.env.CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
  }).then(db => {
    app.set('db', db);
    console.log('db connected');
  });
app.listen(5000, () => {
  console.log("running on port 5000");
});
