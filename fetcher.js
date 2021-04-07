const address = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

//good example  'http://www.example.edu'
request('http://' + address[0], (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  if (error) {
    console.log(error.message);
  } else {
    let data = error + "\n" + response + "\n" + response.statusCode + "\n" + body;
    fs.writeFile('./' + address[1], data, 'utf8', (error, data) => {
      if (error) {
        return undefined;
      }
      console.log("Downloaded and saved "  + response.headers['content-length'] + " bytes to " + address[1]);
    });
  }
});

