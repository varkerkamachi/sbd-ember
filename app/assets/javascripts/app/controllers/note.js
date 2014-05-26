SBD.NoteController = Ember.Controller.extend({
  isEditing: false,  
  actions: {
    updateNote: function(note) {
      //identify record to update
      var note = this.get('note');
      //grab new values
      var noteName = note.get('name');
      var noteNote = note.get('note');
      //set record data to new values
      note.set('name', noteName);
      note.set('note', noteNote);
      //save
      note.save();
      //bounce back to index
      this.transitionToRoute('notes');
    },
    editNote: function(note) {
      this.toggleProperty('isEditing');
      console.log("\nediting?" + this.isEditing);
      console.log('\nediting in the controller');
    },
    
  }
});