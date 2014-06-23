SBD.NotesView = Ember.View.extend({
  layoutName: 'app/notes/notesindex',
  templateName: 'app/notes/notes',
  classNames: 'full_height',
  
  paneTitle: function() {
    return "Notes"
  },

});
