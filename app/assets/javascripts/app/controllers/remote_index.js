SBD.RemoteIndexController = Ember.ObjectController.extend({
  isEditing: false,  
  actions: {
    updateRemote: function(model) {
      //identify record to update
      var obj = this.get('model');
      //grab new values
      var objName = obj.get('name');
      var objUrl = obj.get('url');
      var objNote = obj.get('note');
      //set record data to new values
      obj.set('name', objName);
      obj.set('url', objUrl);
      obj.set('note', objNote);
      //save
      obj.save();
      //reset editing property to false
      this.send('toggleEdit');
      //bounce back to index
      this.transitionToRoute('remotes');
      //this.view.reset();
    },
    toggleEdit: function() {
      this.toggleProperty('isEditing');
    },
    toggleEditTo: function(input) {
      this.set('isEditing', input);
    },
        
  }
});