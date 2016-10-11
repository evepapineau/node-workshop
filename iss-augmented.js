var prompt = require('prompt');

prompt.get("What is your location?", function(err, input) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(input);
        var request = require('request');
        request('https://maps.googleapis.com/maps/api/geocode/json?address=montreal', function(err, input) {
            if (err) {
                console.log(err);
            }
            else {
                var value = JSON.parse(input.body);
                console.log(value.results[0].geometry.bounds.northeast.lat);
                console.log(value.results[0].geometry.bounds.northeast.lng);
            };
        });
    };
});



