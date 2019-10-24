var express = require('express');
var restaurantModel = require('./../models/restaurant-model');
var router = express.Router();



router.get('/restaurentList', function(req, res){

		restaurantModel.getAll(function(results){
			
				res.render('restaurant/index', {restaurant: results});
			
		});
});



module.exports = router;
