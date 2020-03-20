const express = require('express');

 const router = express.Router();

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'PuDGA8E2VmeyCrelccQumDfHN',
    consumer_secret: 'zK4n9JX8Qw3Q2Z68ecMXP1gyBfqVZjG6P3VmNKi0O83NOkCxWU',
    access_token_key: '808673829497270272-topjKNGMT57JKLvsKR7ufzdLwB5tRRL',
    access_token_secret: 'rXnunXSgG9ckyBlBdpXvRygsMU4BzfN9xQLvUfTvW3pHt'
  });


  client.get('favorites/list', function(error, tweets, response) {
    if(error) throw error;
    //console.log(tweets);  // The favorites.
    tweets.map(element => {
        //console.log(element.user.screen_name);
    });
   // console.log(response);  // Raw response object.
  });

  module.exports = router;