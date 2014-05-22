SBD.NotesController = Ember.ArrayController.extend({
  notesCount: function() {
    return this.get('length');
  }.property('length'),
  // notesCount: Ember.computed.alias('length'),
  logo: "",
  sortProperties: ['name'],
  sortAscending: true,
  
  // actions: {
  //   deleteNote: function(note) {
  //     this.removeObject(note);
  //     alert(this.get('model').length);//save();
  //   }
  // }
});
