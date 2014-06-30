SBD.NotesView = Ember.View.extend({
  layoutName: 'app/manage/split-pane',
  templateName: 'app/notes/notes',
  classNames: 'full_height',
  
  paneTitle: function() {
    return "Notes"
  },

});
