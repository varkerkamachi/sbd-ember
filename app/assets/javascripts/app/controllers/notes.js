SBD.NotesController = Ember.ArrayController.extend({
  notesCount: function() {
    return this.get('length');
  }.property('length'),
  // notesCount: Ember.computed.alias('length'),
  logo: "",
  sortProperties: ['name'],
  sortAscending: true,
  actions: {
    deleteNote: function(note) {
      // passed by action from view to controller...if not here then it looks in Route
      this.get('store').find('note', note.id).then(function(record){
        record.deleteRecord();
        record.save();
      });
    },
    editNote: function(note) {
      console.log('editing in the controller');
    }
  }
    
});
