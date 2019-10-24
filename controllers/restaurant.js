var express = require('express');
var restaurantModel = require('./../models/restaurant-model');
var router = express.Router();



router.get('/restaurentList', function(req, res){

		restaurantModel.getAll(function(results){
			
				res.render('restaurant/index', {restaurant: results});
			
		});
});

router.get('/menu/:id', function(req, res){

		restaurantModel.getAllbyID(req.params.id,function(results){
			//restaurantModel.getAll(function(results1);
			res.render('restaurant/Menu',{menu: results});
			
		});
});



module.exports = router;
