SBD.NotesView = Ember.View.extend({
  layoutName: 'app/notes/notesindex',
  templateName: 'app/notes/notes',
  attributeBindings: ['draggable'],
  draggable: true,
  classNames: 'full_height',
  
  paneTitle: function() {
    return "Notes"
  }
});
