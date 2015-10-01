angular.module('CovalentFitness', ['ionic', 'CovalentFitness.controllers', 'CovalentFitness.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: '../views/menu.html',
    controller: 'AppCtrl'
    })

    // Using views because logout is a subview of menu
    .state('app.logout', {
      url: '/logout',
      views: {
        'menuContent': {
          templateUrl: '../views/logout.html'
        }
      }
    })

    .state('signupLogin', {
    url: '/app/signuplogin',
    abstract: true,
    templateUrl: '../views/signup.html'
    })

    .state('signup', {
    url: '/app/signup',
    abstract: true,
    templateUrl: '../views/signup.html',
    controller: 'SignupCtrl'
    })

    .state('login', {
    url: '/app/login',
    abstract: true,
    templateUrl: '../views/login.html',
    controller: 'LoginCtrl'
    });

//NOTE: none of these are implemented yet!!!!!!!!!!

    // .state('app', {
    // url: '/app',
    // abstract: true,
    // templateUrl: '../views/workouts.html',
    // controller: 'WorkoutsCtrl'
    // });
//   .state('app.search', {
//     url: '/search',
//     views: {
//       'menuContent': {
//         templateUrl: 'templates/search.html'
//       }
//     }
//   })

//   .state('app.browse', {
//       url: '/browse',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/browse.html'
//         }
//       }
//     })
//     .state('app.playlists', {
//       url: '/playlists',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/playlists.html',
//           controller: 'PlaylistsCtrl'
//         }
//       }
//     })

//   .state('app.single', {
//     url: '/playlists/:playlistId',
//     views: {
//       'menuContent': {
//         templateUrl: 'templates/playlist.html',
//         controller: 'PlaylistCtrl'
//       }
//     }
//   });
//   // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/signuplogin');
});