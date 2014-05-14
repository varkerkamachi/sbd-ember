/***** Instantiate App *****/
SBD = Ember.Application.create({
  LOG_TRANSITIONS: true
});

/* Router */
SBD.Router.map(function() {
  this.route('root', { path: '/' });
  this.route('about', { path: '/about' });
  this.resource('notes', function(){
    this.resource('note', { path: '/:note_id' });
  });
});

/* Store and models */
SBD.ApplicationAdapter = DS.RESTAdapter.extend();


/* routes */
SBD.NotesRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('note');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
SBD.NoteRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('note', params.note_id);
  }
});

/* controllers */
SBD.IndexController = Ember.Controller.extend({
  time: function() {
    return (new Date()).toDateString()
  }.property()  
});
SBD.NotesController = Ember.ArrayController.extend({
  notesCount: function() {
    return this.get('length');
  }.property('length'),
  // notesCount: Ember.computed.alias('length'),
  logo: "",
  sortProperties: ['name'],
  sortAscending: true
});


/* views .... */
SBD.AboutView = Ember.View.extend({
  templateName: 'app/about'
});

SBD.NotesIndexView = Ember.View.extend({
  templateName: 'app/notes'
});
