Router.route('/', function () {
  this.render('home');
});

Router.route('/room', function () {
  this.render('chat');
});

Router.route('/lobby', function () {
  this.render('lobby');
});


var mustBeSignedIn = function(pause) {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    Router.go('home');
  } else {
    Router.go('room');
  }
};
