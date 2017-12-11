/**
 * Created by Lorvenka003 on 10/25/2017.
 */
var app = angular.module('myApp',['ui.router','oc.lazyLoad']);

app.config(function($stateProvider, $urlRouterProvider,$locationProvider){
    $urlRouterProvider.otherwise('/');
   //$locationProvider.html5Mode(true);
    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',


        })
        .state('addCategories', {
            url: '/addCategories',
            templateUrl: 'views/addCategories.html',
            controller: 'AddCategoriesController',
            controllerAs:'addCategoriesCtrl',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                            'controllers/addCategoriesController.js',
                            'services/categoriesService.js',
                        ]
                    });
                }]
            }
        }) .state('subCategories', {
        url: '/subCategories',
        templateUrl: 'views/subCategories.html',
        controller: 'SubCategoriesController',
        controllerAs:'subCategoriesCtrl',
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'controllers/subCategoriesController.js',
                        'services/categoriesService.js',
                        'services/subCategoriesService.js',
                    ]
                });
            }]
        }
    }).state('words', {
        url: '/words',
        templateUrl: 'views/words.html',
        controller: 'WordsController',
        controllerAs:'wordsCtrl',
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'controllers/wordsController.js',
                        'services/wordService.js',
                        'services/categoriesService.js',
                        'services/subCategoriesService.js',
                        'services/phonicService.js'
                    ]
                });
            }]
        }
    }).state('phonics', {
        url: '/phonics',
        templateUrl: 'views/addPhonics.html',
        controller: 'PhonicsController',
        controllerAs:'phonicCtrl',
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'controllers/phonicController.js',
                        'services/phonicService.js',
                        'services/categoriesService.js',
                        'services/subCategoriesService.js',
                    ]
                });
            }]
        }
    });



})