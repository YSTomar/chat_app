Router.route('/', function () {
	this.render('home');
});

Router.route('/room', function () {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    Router.redirect('/');
  } else {
  	this.render('chat');
  }
});

Router.route('/lobby', function () {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    Router.redirect('/');
  } else {
  	this.render('lobby');
  }
});


var mustBeSignedIn = function(pause) {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    Router.redirect('/');
  } else {
    Router.go('room');
  }
};
