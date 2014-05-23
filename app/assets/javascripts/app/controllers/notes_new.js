SBD.NotesNewController = Ember.Controller.extend({
  actions: {
    createNote: function() {
      var name = this.get('noteName');
      var note = this.get('noteNote');
      // if(!name.trim()) { return; }
  
      var noteObj = this.store.createRecord('note', {
          name: name,
          note: note
        });
      this.set('noteName', '');
      this.set('noteNote', '');
        
      noteObj.save();
      this.transitionToRoute('notes');
    },
  }  
});