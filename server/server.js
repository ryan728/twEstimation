var http = require("http");
var url = require("url");
var querystring = require("querystring");

function start(route, handle) {
  function onRequest(request, response) {
	var request_url = request.url;
    var pathname = url.parse(request_url).pathname;
    var request_parameter = querystring.parse(url.parse(request_url).query);
	console.log("Request for " + pathname + " received.");

    route(handle, pathname, request_parameter, response);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start