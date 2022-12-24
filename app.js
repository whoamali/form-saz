const path = require("path");

const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const connnectDB = require("./configs/db");

const app = express();

//* env config
dotenv.config({ path: "./configs/config.env" });

//* DB connection
connnectDB();

//* Body parser
app.use(bodyParser.json());

//* CORS
app.use(cors());

//* App static folders
app.use(express.static(path.join(__dirname, "public")));

//* Routes
app.use(require("./routes/AUTH").singup);
app.use(require("./routes/AUTH").login);
app.use(require("./routes/AUTH").auth);
app.use(require("./routes/GET").form);

let PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on posrt ${PORT}`)
);
