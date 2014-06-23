/***** Instantiate App *****/
SBD = Ember.Application.create({
  LOG_TRANSITIONS: true
});

/* Router */
SBD.Router = Ember.Router.extend();
SBD.Router.map(function() {
  this.route('about', { path: '/about' });

  this.resource('remotes', function() {
    this.route('new');
    this.route('edit', { path: ':remote_id/edit' });
  });
  this.resource('remote', { path: 'remotes/:remote_id' });

  this.resource('notes', function(){
    this.resource('note', { path: '/:note_id' }, function() {
      this.route('edit');
    });
    this.route('create');
  });
  this.route('missing', { path: '/*path'});
  // this.resource('notes', function(){
  //   this.route('new');
  //   this.route('edit', { path: ':note_id/edit' });
  // });
  // // this is so we can use a template that doesn't inherit from "notes"
  // this.resource('note', { path: 'notes/:note_id' });
});

SBD.MissingRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('remotes.index');
  }
})

/* Store and models */
SBD.ApplicationAdapter = DS.RESTAdapter.extend();


/* routes */
SBD.AboutRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('about', "model");
  }
});
SBD.RemotesRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('remote');
  },
  setupController: function(controller, model) {
    controller.set('remotes', model);
  }
});
SBD.RemoteRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('remote', params.remote_id);
  },
  setupController: function(controller, model) {
    controller.set('remote', model);
    console.log("model: " + model);
}
});
SBD.RemotesNewRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'modelForm' });
  }
});
SBD.RemotesEditRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('remote', params.remote_id);
  },
  renderTemplate: function() {
    this.render({ outlet: 'modelForm' });
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

SBD.NoteIndexRoute = Ember.Route.extend({
  controllerName: 'note.index',
  renderTemplate: function(note) {
    this.controller.set('isEditing', false);
    this.render('app/notes/note/index');
  }
});

SBD.NotesNewRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'modelForm' });
  }
});
//this probably isn't needed...
SBD.NoteEditRoute = Ember.Route.extend({
  controllerName: 'note.index',
  renderTemplate: function(note) {
    this.get('controller').send('toggleEditTo', 'true');
    this.render('app/notes/note/index');
  },

});