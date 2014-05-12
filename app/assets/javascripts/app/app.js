/***** Instantiate App *****/
SBD = Ember.Application.create({
  LOG_TRANSITIONS: true
});

/* Router */
SBD.Router.map(function() {
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
  }
});
SBD.NoteRoute = Ember.Route.extend({
  model: function(params) {
    records = this.store.find('note', params.note_id);
    return records;
  }
});

/* controllers */
SBD.IndexController = Ember.Controller.extend({
  time: function() {
    return (new Date()).toDateString()
  }.property()  
});
SBD.NotesController = Ember.Controller.extend({
  noteCount: function() {
    return 1;
  }.property(),
  logo: "",
  sortProperties: ['name'],
  sortAscending: true
});
