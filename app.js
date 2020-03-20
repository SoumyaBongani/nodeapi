 const express = require('express');
 const app = express();
 const morgan = require('morgan');
 const bodyParser = require('body-parser');
 const productRoutes = require('./api/routes/products');
 const orderRoutes = require('./api/routes/orders');
 const twilio = require('./api/routes/twilio');
 const twApi = require('./api/routes/tw-api');

 app.use(morgan('dev'));
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(bodyParser.json());

//  app.use((req,res,next)=>{
//      res.header("Access-Control-Allow-Origin","*");
//      res.header(
//          "Access-Control-Allow-Headers",
//          "Origin, X-requested-with, Content-Type, Accept, Authorization"
//      );
//      if(req.method == 'OPTIONS'){
//          res.header(
//              'Access-Controrl-Allow-Methods',
//              'PUT,POST,PATCH,DELETE,GET'
//         );
//         return res.status(200).json({});
//      }
//      next();
//  })
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



 app.use('/products',productRoutes);
 app.use('/orders',orderRoutes);
 app.use('/urls',twilio);
 app.use('/hsocial/v1/smartfinder',orderRoutes); 


app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status=404;
    next(error);
   // res.status(error)
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
})

 module.exports = app;


//mongodb+srv://SoumyaBongani:<password>@db-8z08s.mongodb.net/test?retryWrites=true&w=majority

//password : somusomu

//  const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://SoumyaBongani:<password>@db-8z08s.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });