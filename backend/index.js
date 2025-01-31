const connectMongo = require("./db");
const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
connectMongo();

const port = 5000;

// Availble Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNoteBook backend listening at http://localhost:${port}`);
});
