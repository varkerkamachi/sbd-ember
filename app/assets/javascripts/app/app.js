/***** Instantiate App *****/
SBD = Ember.Application.create({
  LOG_TRANSITIONS: true
});

/* special components */
SBD.FormController = Ember.ObjectController.extend({

  toggleNewForm: function(className) {
    console.log('haha!!' + className);
    // $('.' + this.formWrapperClass + '').animate({
    //   visibility: "toggle",
    // }, 75);
  },
  
});
/* Router */
SBD.Router = Ember.Router.extend();
SBD.Router.map(function() {
  this.route('about', { path: '/about' });

  this.resource('remotes', function() {
    this.resource('remote', { path: '/:remote_id' }, function() {
      this.route('edit');
    });
    this.route('create');
  });

  this.resource('notes', function(){
    this.resource('note', { path: '/:note_id' }, function() {
      this.route('edit');
    });
    this.route('create');
  });
  this.route('missing', { path: '/*path'});
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


// ========== REMOTES ================

SBD.RemotesRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('remote');
  },
  setupController: function(controller, model) {
    controller.set('remotes', model);
  }
});

SBD.RemoteIndexRoute = Ember.Route.extend({
  controllerName: 'remote.index',
  renderTemplate: function(note) {
    this.controller.set('isEditing', false);
    this.render('app/remotes/remote/index');
  },
});

SBD.RemoteEditRoute = Ember.Route.extend({
  controllerName: 'remote.index',
  renderTemplate: function(note) {
    this.get('controller').send('toggleEditTo', 'true');
    this.render('app/remotes/remote/index');
  },
});


// ========== NOTES ================

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

SBD.NoteEditRoute = Ember.Route.extend({
  controllerName: 'note.index',
  renderTemplate: function(note) {
    this.get('controller').send('toggleEditTo', 'true');
    this.render('app/notes/note/index');
  },

});