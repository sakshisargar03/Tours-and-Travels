const Package = require('../models/package');

exports.getHomePage = async (req, res) => {
  try {
    
    const packages = await Package.find(); // DB मधून packages आणतो
    const types = ['Dream Holiday', 'Honeymoon', 'Adventure', 'Family', 'Cultural'];

    res.render('home', { 
      packages,
      types,
      apiKey: process.env.GOOGLE_MAPS_API_KEY 
    });

  } catch (err) {
    console.log(err);
    res.status(500).send("Error loading home page");
  }
};
