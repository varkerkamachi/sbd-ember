SBD.NotesView = Ember.View.extend({
  layoutName: 'app/notes/notesindex',
  templateName: 'app/notes/notes',
  attributeBindings: ['draggable'],
  draggable: true,
  
  paneTitle: function() {
    return "Notes"
  }
});
