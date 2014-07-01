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
  formWrapperClass: 'new_form_wrapper',
  errors: false,

  paneTitle: function() {
    return "Remotes"
  }.property(),


  actions: {
    setActive: Ember.computed(this.isActive, function() {
      return this.isActive == true ? false : true;
    }),

    toggleText: function() {
      // console.log('active/' + this.isActive);
      this.toggleProperty('isActive');
      console.log('remotes toggle - active/' + this.isActive);

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

      //if(this.send('validateForm', this.name, this.note)) {
      //},
      var obj = this.store.createRecord('note', {
          name: name,
          url: url,
          note: note
        });
      this.set('name', '');
      this.set('url', '');
      this.set('note', '');
        
      obj.save();
      //console.log('form vis: ' + this.formIsVisible)
      this.send('toggleText');
      this.transitionToRoute('remotes');
    },

    toggleNewForm: function() {
      $('.' + this.formWrapperClass + '').animate({
        visibility: "toggle",
      }, 75);
    },
 
    deleteRemote: function(model) {
      // passed by action from view to controller...if not here then it looks in Route
      this.get('store').find('remote', model.id).then(function(record){
        record.deleteRecord();
        record.save();
      });
    }    
  }
    
});
