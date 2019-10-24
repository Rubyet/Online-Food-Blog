var express = require('express');
var restaurantModel = require('./../models/blog-model');
var router = express.Router();



router.get('/blog', function(req, res){

		restaurantModel.getAll(function(results){
			
				res.render('blog/index', {blog: results});
			
		});
});




module.exports = router;
