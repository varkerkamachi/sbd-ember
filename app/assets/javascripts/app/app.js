SBD = Ember.Application.create({
  init: function() {
    console.log('created');
  }
});

SBD.Router.map(function() {
  this.route('home', { path: '/' });
  this.route('notes', { path: '/notes' });
});