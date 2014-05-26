/***** Instantiate App *****/
SBD = Ember.Application.create({
  LOG_TRANSITIONS: true
});

/* Router */
SBD.Router = Ember.Router.extend();
SBD.Router.map(function() {
  this.route('about', { path: '/about' });

  this.resource('notes', function(){
    this.route('new');
    this.route('edit', { path: ':note_id/edit' });
  });
  // this is so we can use a template that doesn't inherit from "notes"
  this.resource('note', { path: 'notes/:note_id' });
});

/* Store and models */
SBD.ApplicationAdapter = DS.RESTAdapter.extend();


/* routes */
SBD.AboutRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('about', "model");
  }
});

SBD.NotesRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('note');
  },
  setupController: function(controller, model) {
    controller.set('notes', model);
  }
});

SBD.NoteRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('note', params.note_id);
  },
  setupController: function(controller, model) {
    controller.set('note', model);
  }
});

SBD.NotesNewRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'modelForm' });
  }
});

SBD.NotesEditRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('note', params.note_id);
  },
  renderTemplate: function() {
    this.render({ outlet: 'modelForm' });
  }
});