var express    = require('express');        // call express
var cors = require('cors')
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

// configure app to use bodyParser()
// this will let us get the data from a POST


var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 


var quotes = 
[
		{
	  		quote:"The best preparation for tomorrow is doing your best today.",
	  		author:"H. Jackson Brown, Jr"
	  	},
	  	{
	  		quote:"I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
	     	author:"Jimmy Dean"
	  	},
	  	{
	  		quote:"Try to be a rainbow in someone's cloud.",
	     	author:"Maya Angelou"
	  	},
	  	{
	  		quote:"We must let go of the life we have planned, so as to accept the one that is waiting for us",
	     	author:"Joseph Campbell"
	  	},
	  	{
	  		quote:"Put your heart, mind, and soul into even your smallest acts. This is the secret of success.",
	     	author:"Swami Sivananda"
	  	},
	  	{
	  		quote:"Nothing is impossible, the word itself says I'm possible'!",
	     	author:"Audrey Hepburn"
	  	},
	  	{
	  		quote:"Believe you can and you're halfway there",
	     	author:"Aesop"
	  	},
	  	{
	  		quote:"I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.",
	     	author:"Muhammad Ali"
	  	},
	  	{
	  		quote:"Whoever is happy will make others happy too.",
	     	author:"Anne Frank"
	  	}
];        

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json( quotes );   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);