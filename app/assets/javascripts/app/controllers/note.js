SBD.NoteController = Ember.ObjectController.extend({
  isEditing: false,
  edit: function() {
    this.set('isEditing', true);
  },
  
  // actions: {
  //   deleteNote: function() {
  //     var elm = this.get('model');
  //     elm.deleteRecord();
  //     elm.save();
  //   }
  // }
});