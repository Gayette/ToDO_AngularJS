
'use strict';


/**
 * Déclaration de l'application demoApp
 */
var App = angular.module('App', [
    // Dépendances du "module"
    'todoList'
]);

/**
 * Déclaration du module todoList
 */
var todoList = angular.module('todoList',[]);


/**
 * Contrôleur
 */
todoList.controller('todoCtrl', ['$scope',
    function ($scope) {

        // On initialise les todos avec un tableau vide : []
        var todos = $scope.todos = [];

        // Ajouter un todo
        $scope.addTodo = function () {
            // .trim() permet de supprimer les espaces inutiles
            // en début et fin d'une chaîne de caractères
            var newTodo = $scope.newTodo.trim();
            if (!newTodo.length) {
                // éviter les todos vides
                return;
            }
            todos.push({
                // on ajoute le todo au tableau des todos
                title: newTodo,
                completed: false
            });
            // Réinitialisation de la variable newTodo
            $scope.newTodo = '';
        };

        // Enlever un todo
        $scope.removeTodo = function (todo) {
            todos.splice(todos.indexOf(todo), 1);
        };

        // Cocher / Décocher tous les todos
        $scope.markAll = function (completed) {
            todos.forEach(function (todo) {
                todo.completed = !completed;
            });
        };

        // Enlever tous les todos cochés
        $scope.clearCompletedTodos = function () {
            $scope.todos = todos = todos.filter(function (todo) {
                return !todo.completed;
            });
        };
    }
]);