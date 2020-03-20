const express = require('express');
const router = express.Router();

/****************************** */



 var Twitter = require('twitter');
 var url = require('url');



// var client = new Twitter({
//     consumer_key: 'PuDGA8E2VmeyCrelccQumDfHN',
//     consumer_secret: 'zK4n9JX8Qw3Q2Z68ecMXP1gyBfqVZjG6P3VmNKi0O83NOkCxWU',
//     access_token_key: '808673829497270272-topjKNGMT57JKLvsKR7ufzdLwB5tRRL',
//     access_token_secret: 'rXnunXSgG9ckyBlBdpXvRygsMU4BzfN9xQLvUfTvW3pHt'
//   });


//   client.get('favorites/list', function(error, tweets, response) {
//     if(error) throw error;
//     //console.log(tweets);  // The favorites.
//     tweets.map(element => {
//         console.log(element.user.screen_name);
//     });
//    // console.log(response);  // Raw response object.
//   });

/******************************** */
router.get('/',(req,res,next)=>{


    var client = new Twitter({
        consumer_key: 'PuDGA8E2VmeyCrelccQumDfHN',
        consumer_secret: 'zK4n9JX8Qw3Q2Z68ecMXP1gyBfqVZjG6P3VmNKi0O83NOkCxWU',
        access_token_key: '808673829497270272-topjKNGMT57JKLvsKR7ufzdLwB5tRRL',
        access_token_secret: 'rXnunXSgG9ckyBlBdpXvRygsMU4BzfN9xQLvUfTvW3pHt'
      });


      console.log("params:  "+JSON.stringify(req.params));

        var url_parts = url.parse(req.url, true);
        
     var query = url_parts.query;
    var uri_v = query.mentions;
    console.log(uri_v);
    var search_params = {q:uri_v};
      client.get('search/tweets.json',search_params, function(error, tweets, response) {
        if(error) throw error;
        //console.log(tweets);  // The favorites.
        // tweets.map(element => {
        //     console.log(element.user.screen_name);
        // });

    res.status(200).json({
        
        tweets:tweets.statuses 
   // console.log(response);  // Raw response object.
  });

});

}) 



router.post('/',(req,res,next)=>{
    const data = {
        orderID: req.body.orderID,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: "your Order placed",
        orderDetails: data
    })
})

router.get('/:orderID',(req,res,next)=>{
    res.status(200).json({
        message: "your Order details",
        orderID:req.params.orderID
    })
})



router.delete('/:orderID',(req,res,next)=>{
    res.status(200).json({
        message: "your Order cancelled",
        orderID:req.params.orderID
    })
})

module.exports = router;


// mongodb+srv://soumya:<password>@nodeapp-qkmn5.mongodb.net/test?retryWrites=true&w=majority