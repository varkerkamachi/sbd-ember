SBD.ListNotesView = Ember.View.extend({
  templateName: 'app/templates/notes/list',
  notesBinding: 'SBD.notesController',
  
  refreshListing: function() {
    SBD.notesController.findAll();
  }
});