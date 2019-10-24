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
		var sql = "select * from blog where rid=?";

		db.getResults(sql, [id], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	
	
}	


