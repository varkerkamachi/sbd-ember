SBD.RemoteIndexController = Ember.ObjectController.extend({
  isEditing: false,

  formTitle: function() {
    return "Create new remote"
  }.property(),
  
  actions: {
    updateRemote: function(model) {
      //identify record to update
      var remote = this.get('model');
      //grab new values
      var remoteName = remote.get('name');
      var remoteUrl = remote.get('url');
      var remoteNote = remote.get('note');
      //set record data to new values
      remote.set('name', remoteName);
      remote.set('url', remoteUrl);
      remote.set('note', remoteNote);
      //save
      remote.save();
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