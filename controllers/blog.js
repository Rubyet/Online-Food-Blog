var express = require('express');
var blogModel = require('./../models/blog-model');
var router = express.Router();



router.get('/blog', function(req, res){

		blogModel.getAll(function(results,results1){
			
				res.render('blog/index', {blog: results , user: results1});
			
		});
});




module.exports = router;
