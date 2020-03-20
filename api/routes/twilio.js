//twilio.js

// var twilio = require('twilio');



// var accountSid = 'AC96c79ea4135e802396dad336c8975a92'; // Your Account SID from www.twilio.com/console
// var authToken = '58f20c710d427de5befe8ad075615a01';   // Your Auth Token from www.twilio.com/console


// console.log(accountSid+"  "+authToken)
// var client = new twilio(accountSid, authToken);
// console.log(accountSid+"  client   "+authToken)

// client.messages.create({
//     body: 'Hello from Node',
//     to: '9912539063',  // Text this number
//     from: '9177884922' // From a valid Twilio number
// })
// .then((message) => {
//     console.log("after sucess")
//     console.log(message.sid)
// });

console.log("hey ");
const express = require('express');

const router = express.Router();

var request = require('request');
var cheerio = require("cheerio");

// request({
//     uri: "http://www.sitepoint.com",
//   }, function(error, response, body) {
//     //console.log(body);
//     var $ = cheerio.load(body);
//     var list = $("a");

//     console.log(typeof list);
//     for(tag in list){
//         console.log(list[tag]);
//     }

//   });



// request({
//     uri: "http://www.youtube.com",
//   }, function(error, response, body) {
//     var $ = cheerio.load(body);

//     $("a").each(function() {
//       var link = $(this);
//       var text = link.text();
//       var href = link.attr("href");

//       console.log(href);
//     });
//   });

var url = require('url');
router.get('/', (req, res, next) => {

    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var uri_v = query.url;
    console.log(query.url + "  " + query.url.length);
    //const id = req.params.productId;
    if (uri_v.length <= 0) {
        res.status(200).send("please provide the url");
    } else {
        
            let str = '';
        let mp = new Promise((res, rej) => {
            request({
                uri: uri_v,
            }, (error, response, data) => {
                res(data);
                //rej(new Error("Whoops!"))
            });
        })

        mp.then(data => {
            // console.log(data);
            var $ = cheerio.load(data);
            $("a").each(function () {
                var link = $(this);
                var text = link.text();
                var href = link.attr("href");
                str = str + "<div><a"+" href="+href+">" + href + "</div>";
                //console.log(href);

            });
            console.log();
            if(str.length>0){
                res.status(200).send(str);
            }else{
                res.status(200).send("No results found for this site"); 
            }
            
        }).catch(err => {
            res.status(400).send("Sorry this site is not providing what you are looking for!!!!!!");
        })
        
    }



})


module.exports = router;