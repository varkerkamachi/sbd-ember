SBD.NotesView = Ember.View.extend({
  layoutName: 'app/layout/flex_ab',
  templateName: 'app/notes/notes',
  classNames: 'full_height',
  
  paneTitle: function() {
    return "Notes"
  },

});
