var db = require('./db');

module.exports={

	getById: function(id, callback){

		var sql = "select * from restaurant where id=?";
		db.getResults(sql, [id], function(result){

			//console.log(result);
			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	//validate: function(restaurant, callback){
	//	var sql = "select * from restaurant where restaurantname=? and password=?";
//
	//	db.getResults(sql, [restaurant.restaurantname, restaurant.password], function(result){
//
	//		if(result.length > 0 ) {
		//		callback(true);
			//}else{
				//callback(false);
			//}
		//});
	//},
	getAll : function(callback){
		var sql = "select * from restaurant";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	insert : function(restaurant, callback){
		var sql = "insert into restaurant values('', ?, ?)";
		db.execute(sql, [restaurant.restaurantname, restaurant.password], function(status){
			callback(status);
		});
	},
	update : function(restaurant, callback){
		var sql = "update restaurant set restaurantname=?, password=? where id=?";		
			db.execute(sql, [restaurant.restaurantname, restaurant.password, restaurant.id], function(status){
				callback(status);
			});
		
	},
	delete : function(restaurant, callback){
		//var sql = "insert into restaurant values('','"+ restaurant.restaurantname+"', '"+restaurant.password+"')";
		db.execute(sql, [],  function(status){
			callback(status);
		});
	}
}	


