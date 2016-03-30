/**
 * Created by User on 17/03/2016.
 */
// modulo
angular.module("phonebook",["LocalStorageModule"]);

// controlador
angular.module('phonebook')
    .controller('bookctrl',
        function($scope, localStorageService){
        //importamos $scope para interactuar con la vista
            if (localStorageService.get("book-list")) {
                $scope.todo = localStorageService.get("book-list");
            } else {
                $scope.todo=[];
            }
            // add default items
            $scope.todo =
                [{
                    name: "Carlos",
                    surname: "Casado",
                    telephone: "987654321"
                }, {
                    name: "Marcos",
                    surname: "González",
                    telepnone: "123456789"
                }]
            localStorageService.set('book-list', JSON.stringify($scope.todo));

            // add new item
            $scope.addContact = function(){
                //Se ejecuta al hacer click sobre el botón submit del formulario / ng-submit
                //introduce la nueva tarea en la lista general de tareas
                $scope.todo.push($scope.newContact);
                //resetea la información para un nuevo contacto
                $scope.newContact = {};
                //guardamos en local nuestro nuevo contacto
                localStorageService.set("book-list", $scope.todo);

            };
            // delete item
            $scope.deleteContact = function(index){
                // elimina el contacto mediante el parametro recibido
                $scope.todo.splice(index, 1);
                // actualiza la base de datos
                localStorageService.set("book-list", $scope.todo);
            };
            $scope.getContact = function(index){
               var test =  localStorageService.get(index);
                console.log(test);
            };
            $scope.updateContact = function(index){

            };
});