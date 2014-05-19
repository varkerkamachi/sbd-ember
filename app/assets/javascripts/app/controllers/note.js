SBD.NoteController = Ember.ObjectController.extend({
  isEditing: false,
  edit: function() {
    this.set('isEditing', true);
  }
});