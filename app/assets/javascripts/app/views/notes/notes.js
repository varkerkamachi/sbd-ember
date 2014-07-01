SBD.NotesView = Ember.View.extend({
  layoutName: 'app/container/flex_ab',
  templateName: 'app/notes/notes',
  classNames: 'full_height',
  
  paneTitle: function() {
    return "Notes"
  },

});
