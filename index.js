var request = require('auth-request');
var options = {
	scheme: 'http::/Lorenzatto:Lorenzatto12345@',
	hostname: '192.168.1.101',
	port: 80,
	path: '/ISAPI/Streaming/channels/201/picture',
	method: 'GET',
    auth: {
        user: 'Lorenzatto',
        pass: 'Lorenzatto12345',
        sendImmediately: false
      }
};
request(options, function (err, result) {
	if (err) return console.log(err);
	console.log(result);
});