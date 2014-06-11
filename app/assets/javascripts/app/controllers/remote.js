SBD.RemoteController = Ember.Controller.extend({
  isEditing: false,

  paneTitle: function() {
    return "Remotes";
  }.property(),

  actions: {
    updateRemote: function(remote) {
      //identify record to update
      var remote = this.get('remote');
      //grab new values
      var remoteName = remote.get('name');
      var remoteNote = remote.get('note');
      var remoteUrl = remote.get('url');
      //set record data to new values
      remote.set('name', remoteName);
      remote.set('url', remoteUrl);
      remote.set('note', remoteNote);
      //save
      remote.save();
      //reset editing property to false
      this.toggleProperty('isEditing');
      //bounce back to index
      this.transitionToRoute('remotes');
    },
    editRemote: function(remote) {
      console.log('controller: ' + this.get('controller'));
      
      this.toggleProperty('isEditing');
      // this.transitionToRoute('note/:note_id');
    },
    
  }
});