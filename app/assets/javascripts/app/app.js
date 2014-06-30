/***** Instantiate App *****/
SBD = Ember.Application.create({
  LOG_TRANSITIONS: true
});

/* special components */
// SBD.FormController = Ember.ObjectController.extend({

//   toggleNewForm: function(className) {
//     console.log('haha!!' + className);
//     // $('.' + this.formWrapperClass + '').animate({
//     //   visibility: "toggle",
//     // }, 75);
//   },
  
// });
/* Router */
SBD.Router = Ember.Router.extend();
SBD.Router.map(function() {
  this.route('about', { path: '/about' });

  this.route('dashboard', { path: '/sbd-dash'});
  
  //this.route('manage', { path: '/manage'});

  this.resource('remotes', function() {
    this.route('new');
    this.route('edit', { path: ':remote_id/edit' });
  });
  this.resource('remote', { path: 'remotes/:remote_id' });

  this.resource('manage', function() {
    this.resource('notes', function(){
      this.resource('note', { path: '/:note_id' }, function() {
        this.route('edit');
      });
      this.route('create');
    });

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

SBD.NoteEditRoute = Ember.Route.extend({
  controllerName: 'note.index',
  renderTemplate: function(note) {
    this.get('controller').send('toggleEditTo', 'true');
    this.render('app/notes/note/index');
  },

});

SBD.DashboardRoute = Ember.Route.extend({
  controllerName: 'dashboard',
  renderTemplate: function() {
    this.render('app/dashboard/index');
  },
  renderView: function() {
    this.render('app/dashboard/index');
  }
});

SBD.ManageRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('app/manage/index');
  }
});


