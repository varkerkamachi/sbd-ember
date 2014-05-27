SBD.NotesNewController = Ember.Controller.extend({
  actions: {
    createNote: function() {
      var name = this.get('name');
      var note = this.get('note');
      // if(!name.trim()) { return; }
  
      var noteObj = this.store.createRecord('note', {
          name: name,
          note: note
        });
      this.set('name', '');
      this.set('note', '');
        
      noteObj.save();
      // this.toggleNewForm();
      this.transitionToRoute('notes');
    },
  }  
});