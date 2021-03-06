
/*
 * GET home page.
 */
var http = require('http');
var mongo = require('./mongo');

exports.getHelloWorld = function(req, res) {
	console.log("Hello");
	var options = {
		host : mongo.URL,
		port : mongo.PORT,
		path : "/getHelloWorld",
		method : 'GET'
	};

	callback = function(response) {
		var str = '';
		console.log(response.statusCode);
		response.on('error', function() {
			console.log("Error in response: " + "\n" + str);

		})
		response.on('data', function(chunk) {
			str += chunk;
		});

		response.on('end', function() {
			var data = JSON.parse(str);
			res.status(200).send(data);
		});
	}

	http.get(options, callback).end();
};

exports.putHelloWorld = function(req, res) {
	console.log("Hello");
	var options = {
		host : mongo.URL,
		port : mongo.PORT,
		path : "/putHelloWorld",
		method : 'GET'
	};

	callback = function(response) {
		var str = '';
		console.log(response.statusCode);
		response.on('error', function() {
			console.log("Error in response: " + "\n" + str);

		})
		response.on('data', function(chunk) {
			str += chunk;
		});

		response.on('end', function() {
			var data = JSON.parse(str);
			res.status(200).send(data);
		});
	}

	http.get(options, callback).end();
};
exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};