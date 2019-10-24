var db = require('./db');

module.exports={

	getById: function(id, callback){

		var sql = "select * from blog where id=?";
		db.getResults(sql, [id], function(result){

			//console.log(result);
			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},

	getAll : function(callback){
		var sql = "select * from blog";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	
	getAllbyID : function(id, callback){
		var sql = "select * from menu where rid=?";

		db.getResults(sql, [id], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	
	insert : function(blog, callback){
		var sql = "insert into blog values('', ?, ?)";
		db.execute(sql, [blog.blogname, blog.password], function(status){
			callback(status);
		});
	},
	update : function(blog, callback){
		var sql = "update blog set blogname=?, password=? where id=?";		
			db.execute(sql, [blog.blogname, blog.password, blog.id], function(status){
				callback(status);
			});
		
	},
	delete : function(blog, callback){
		//var sql = "insert into blog values('','"+ blog.blogname+"', '"+blog.password+"')";
		db.execute(sql, [],  function(status){
			callback(status);
		});
	}
}	


