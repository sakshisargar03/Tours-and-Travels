const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const packages = [
  {
    _id: "1",
    name: "Goa Trip",
    type: "Beach",
    image: "/images/goa.jpg",
    description: "Enjoy beaches and nightlife",
    price: 10000,
    hotels: ["Hotel A", "Hotel B"],
    places: ["Calangute", "Baga"],
    location: { lat: 15.2993, lng: 74.1240 }
  }
];

const apiKey = "YOUR_GOOGLE_MAP_API_KEY";

// Extract unique types
const types = [...new Set(packages.map(p => p.type))];

app.get("/", (req, res) => {
  res.render("index", { packages, types, apiKey });
});

app.listen(5000, () => console.log("Server running at http://localhost:5000"));
