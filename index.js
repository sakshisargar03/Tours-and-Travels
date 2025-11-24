const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Public static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
const homeRoutes = require("./routes/homeRoutes");
app.use("/", homeRoutes);

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
