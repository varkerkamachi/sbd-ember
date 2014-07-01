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
  this.resource('devices', function() {
    this.resource('remotes', function(){
      this.resource('remote', { path: '/:remote_id' }, function() {
        this.route('edit');
      });
      this.route('create');
    });
  });

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

/* ======== ROUTES ================ */

/** PARENT/ORGANIZATIONAL ROUTES **/
/** DASHBOARD COMING SOON... **/
SBD.DashboardRoute = Ember.Route.extend({
  controllerName: 'dashboard',
  renderTemplate: function() {
    this.render('app/dashboard/index');
  },
  renderView: function() {
    this.render('app/dashboard/index');
  }
});
/** CRUD STUFF... NOTES, ETC **/
SBD.ManageRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('app/manage/index');
  }
});
/** DEVICES...CONFIG, TOPOLOGY... **/
SBD.DevicesRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('app/devices/index');
  }
});

/** REMOTES **/
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
  }
});

SBD.RemoteEditRoute = Ember.Route.extend({
  controllerName: 'remote.index',
  renderTemplate: function(note) {
    this.get('controller').send('toggleEditTo', 'true');
    this.render('app/remotes/remote/index');
  },

});

/** NOTES **/
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



