const request = require('request');
const input = process.argv.slice(2);
const breed = `https://api.thecatapiaa.com/v1/breeds/search?q=${input}`;

request(breed, function (error, response, body) {
  if (error) {
    console.log(error);
    return
  }
  const data = JSON.parse(body);
  if (!data.length) {
    console.log('breed not found');
  } else {
    console.log(data[0].description);
  }
});
