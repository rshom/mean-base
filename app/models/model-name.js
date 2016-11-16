// app/models/model-name.js

// get mongoose module
var mongoose = require('mongoose');

// put either a single model or multiple models here

module.exports = mongoose.model(

    'model-name', {
	name: {type : String, default: ''}
    }
    
);
