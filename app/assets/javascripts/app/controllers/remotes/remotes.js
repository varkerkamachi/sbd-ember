SBD.RemotesController = Ember.ArrayController.extend({
  remotesCount: function() {
    return this.get('length');
  }.property('length'),
  // notesCount: Ember.computed.alias('length'),
  logo: "",
  sortProperties: ['updated_at:desc', 'name:asc'],
  //sortAscending: true,
  allSorted: Ember.computed.sort('remotes', 'sortProperties'),
  buttonText: 'Add New',
  isActive: false,
  formWrapperClass: 'remote_new_form',
  showPaneClass: 'hover_pane',
  errors: false,

  paneTitle: function() {
    return "Remotes"
  }.property(),

  formTitle: function() {
    return "Create new remote"
  }.property(),

  actions: {
    setActive: Ember.computed(this.isActive, function() {
      return this.isActive == true ? false : true;
    }),

    toggleText: function() {
      // console.log('active/' + this.isActive);
      this.toggleProperty('isActive');
      console.log('notes toggle - rem active/' + this.isActive);

      this.send('toggleNewForm');
      if( this.isActive == true ) {
        this.set('buttonText', 'Close');
      }
      else {
        this.set('buttonText', 'Add New');
      }
    },
    
    createRemote: function() {
      var name = this.get('name');
      var url = this.get('url');
      var note = this.get('note');
      // if(!name.trim()) { return; }

      var dataObj = this.store.createRecord('remote', {
          name: name,
          url: url,
          note: note
        });
      this.set('name', '');
      this.set('url', '');
      this.set('note', '');
        
      dataObj.save();
      //console.log('form vis: ' + this.formIsVisible)
      this.send('toggleText');
      this.transitionToRoute('remotes');
    },

    toggleNewForm: function() {
      $('.' + this.formWrapperClass + '').fadeToggle('75', 'linear');
      // $('.' + this.formWrapperClass + '').animate({
      //   visibility: "toggle",
      // }, 75);
    },
    
    deleteRemote: function(remote) {
      // passed by action from view to controller...if not here then it looks in Route
      this.get('store').find('remote', remote.id).then(function(record){
        // removes from view
        record.deleteRecord();
        //actually deletes from data store
        record.save();
      });
      // in case the user is viewing a record and clicks delete
      // this essentially re-renders the view as a precaution
      this.transitionToRoute('remotes');
    },
    
  }
    
});
