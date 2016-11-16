// app/routes.js

// grab your model from /app/models/
var Modelname = require('./models/model-name');

module.exports = function(app) {

    // sever routes ===========================
    // handle api calls
    // authentication routes


    // sample api routes

    
    // route to handle get
    app.get('/api/name', function(req,res) {
	// execute code
	console.log('get /api/name');

	//// maybe get something from a database
	Modelname.find(function(err, data){
	    

	    // if there is an error, send the error
	    if (err){ 
		res.send(err);// nothing will execute after this
	    }
	    
	    // else return your data
	    res.send('TODO api/name get call');
	    //res.json(data);
	    
	});
    });

    // route to handle post

    // route to handle delete



    // frontend routes===================================
    // route to handle all angular requests
    app.get('*', function(req,res) {
	// single page application always shows index
	//// type anything into url and get this
	//// angular handles the rest
	var options = {
	    // options are required for relative filenames
	    // this changes root to /public/
	    //// we are currently in /app/ so we have to back out one
	    root: __dirname + '/../public/'
	};
	res.sendFile('./index.html',options);
    });

};
