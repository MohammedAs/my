/**
 * Created by asbanu on 6/16/2016.
 */


myApp.service("blogService", function($http)
{

    return function(cb) {

        $http
        ({
            method: 'GET',
            url: 'data/data.json'

        }). then(function (response) {

            console.log('data received');
            console.log(response);
            cb(response.data);

        }), function (response) {
            console.log(response);

        }
    }
});



// console.log("over and out!!");
// }
//
//
//
// );
