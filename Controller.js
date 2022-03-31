//"ngResource": ngResource module sirve para crear objetos RESTfull que se puede comunicar con una REST API
//Una de las formas de crear controladores a traves de modulos y que tambien se puedan crear directivas y servicios a traves del modulo, es creando una variable como se ve a continuacion:

/* var app = angular.module("MyApp", []); //ngResource module sirve para crear objetos RESTfull que se puede comunicar con una REST API
app.controller("FirstController", function($scope){
    $scope.nombre = 'Uriel';
}) */

//otra forma es encadenando los metodos:

angular.module("MyApp", [])

.controller("FirstController", function($scope){
    $scope.nombre = 'Uriel';
    $scope.comentarios = [
    {
        comentario: "comentario 1",
        username: "usuario1"
    },
    {
        comentario: "comentario 2",
        username: "usuario2"
    }
    ];
    $scope.agregarComentario = () => {
        $scope.comentarios.push($scope.nuevoComentario);
    }

}).controller("secondController", function ($scope, $http){
    
    $scope.posts = [];
    $scope.newPost = {}; 

    $http({
        method:'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
    }).then(function successCallback(response){
        console.log(response.data);
        $scope.posts = response.data;
    }, function errorCallback(response) {  
          
    });

    $scope.addPost = function(){
        $http({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            userId: 1,
            title: $scope.newPost.title,
            body: $scope.newPost.body          
        }).then(function (data, status, headers, config){
            $scope.posts.push($scope.newPost);
            console.log(data);
            $scope.addPost = {};
        }),(function(error, status, headers, config){
            console.log(error)
        })
    }
} );

