newsApp.factory('UtilitiesFactory', function UtilitiesFactory($http) {

    var dataObj = [];


    $http.get('data/data.json').success(function(data) {
        dataObj = data;
        console.log(dataObj);
    });

    $http.post('data/articles.json', {msg:"Hello"}).success(function(status) {
        console.log("success");
        console.log(status);
    });



    return dataObj;
});
