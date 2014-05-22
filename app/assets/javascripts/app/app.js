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
  });
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
  },
  actions: {
    deleteNote: function(note) {
      // v removes record from UI but not from model..
      // var nm = this.store.find('note', note.id);
      // nm.deleteRecord();
      // this.store.deleteRecord();
      // this.store.save();
      // nm.destroyRecord();
      // var nms = this.store.findAll('note');
      // alert(nms.length);
      // nm.save();
      // alert(this.modelFor('notes') + "\n\n" + this.get('model'));
      // elm.removeObject(note);
      // elm.save();
      // console.log(elms + "\n" + this.get('model') + "\nlen: " + elms.length);
      // elms.removeObject(note);
    }
  }
});

SBD.NoteRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('note', params.note_id);
  }  
});

SBD.NotesNewRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'modelForm' });
  }
});