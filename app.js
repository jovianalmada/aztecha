const path = require("path");
const port = process.env.PORT || 80;

const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const siteRoutes = require("./routes/site");
app.use(siteRoutes);

//clear spaces in POST
function postTrimmer(req, res, next) {
  if (req.method === "POST") {
    for (const [key, value] of Object.entries(req.body)) {
      if (typeof value === "string") req.body[key] = value.trim();
    }
  }
  next();
}

//Parsing middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
//Parse application for JSON
app.use(express.json());
//white space trimmer
app.use(postTrimmer);
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`Listening on port ${port}`));
