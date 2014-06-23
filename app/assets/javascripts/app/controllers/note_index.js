SBD.NoteIndexController = Ember.ObjectController.extend({
  isEditing: false,  
  actions: {
    updateNote: function(model) {
      //identify record to update
      var note = this.get('model');
      //grab new values
      var noteName = note.get('name');
      var noteNote = note.get('note');
      //set record data to new values
      note.set('name', noteName);
      note.set('note', noteNote);
      //save
      note.save();
      //reset editing property to false
      this.send('toggleEdit');
      //bounce back to index
      this.transitionToRoute('notes');
      //this.view.reset();
    },
    toggleEdit: function() {
      this.toggleProperty('isEditing');
    },
    toggleEditTo: function(input) {
      this.set('isEditing', input);
    }    
  }
});