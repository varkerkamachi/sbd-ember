SBD.NotesController = Ember.ArrayController.extend({
  notesCount: function() {
    return this.get('length');
  }.property('length'),
  // notesCount: Ember.computed.alias('length'),
  logo: "",
  sortProperties: ['name'],
  sortAscending: true,
  init: function(note) {
    console.log("\nediting?" + this.notesCount);
    // noneInEditMode();
  },
  
  noneInEditMode: function() {
    console.log('none in edit..');
    return this.setEach('isEditing', false);
  }.property('@each.isEditing'),
  
  /*
  allAreDone: function(key, value) {
    if (value === undefined) {
      return !!this.get('length') && this.everyProperty('isCompleted', true);
    } else {
      this.setEach('isCompleted', value);
      this.invoke('save');
      return value;
    }
  }.property('@each.isCompleted')
  */
  actions: {
    deleteNote: function(note) {
      // passed by action from view to controller...if not here then it looks in Route
      this.get('store').find('note', note.id).then(function(record){
        record.deleteRecord();
        record.save();
      });
    },
    // editNote: function(note) {
    //   this.toggleProperty('isEditing');
    //   console.log("\nediting?" + this.isEditing);
    //   console.log('\nediting in the controller');
    // },
    updateNote: function(note) {
      var name = note.get('name');
      var note = note.get('note');
      
      note.set('name', name);
      note.set('note', note);
      
      note.save();
      transitionToRoute('notes');
    }
    
  }
    
});
