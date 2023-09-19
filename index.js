const express = require("express");
const path = require("path");
const routes = require("./routes/routes.js");
const connectToDB = require("./database/db.js");

const app = express();
const port = 3000;

connectToDB();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);


//Route
app.get("/home", (req, res) => {
  res.render("index");
});

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
