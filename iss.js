//Getting some data
var request = require('request');

request('http://api.open-notify.org/iss-now.json', function(err, result) {
    if (err) {
        console.log(err);
    }
    else {
        var value = JSON.parse(result.body);
        console.log(value.iss_position.latitude.toFixed(2));
        console.log(value.iss_position.longitude.toFixed(2));
    }
});


