const fetchBreedDescription = function(breedName, callback) {
  const request = require('request');
  const input = process.argv.slice(2);
  const breed = `https://api.thecatapi.com/v1/breeds/search?q=${input}`;

  request(breed, function(error, response, body) {
    if (error) {
      return callback(error);
    }
    const data = JSON.parse(body);
    if (!data.length) {
      return callback('breed not found');
    }
    return callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
