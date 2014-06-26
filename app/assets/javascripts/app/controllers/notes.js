SBD.NotesController = Ember.ArrayController.extend({
  notesCount: function() {
    return this.get('length');
  }.property('length'),
  // notesCount: Ember.computed.alias('length'),
  logo: "",
  sortProperties: ['updated_at:desc', 'name:asc'],
  //sortAscending: true,
  allSorted: Ember.computed.sort('notes', 'sortProperties'),
  buttonText: 'Add New',
  isActive: false,
  formWrapperClass: 'new_form_wrapper',
  errors: false,

  paneTitle: function() {
    return "Notes"
  }.property(),

  actions: {
    setActive: Ember.computed(this.isActive, function() {
      return this.isActive == true ? false : true;
    }),

    toggleText: function() {
      // console.log('active/' + this.isActive);
      this.toggleProperty('isActive');
      console.log('notes toggle - active/' + this.isActive);

      this.send('toggleNewForm');
      if( this.isActive == true ) {
        this.set('buttonText', 'Close');
      }
      else {
        this.set('buttonText', 'Add New');
      }
    },
    
    createNote: function() {
      var name = this.get('name');
      var note = this.get('note');
      // if(!name.trim()) { return; }

      //if(this.send('validateForm', this.name, this.note)) {
      //},
      var noteObj = this.store.createRecord('note', {
          name: name,
          note: note
        });
      this.set('name', '');
      this.set('note', '');
        
      noteObj.save();
      //console.log('form vis: ' + this.formIsVisible)
      this.send('toggleText');
      this.transitionToRoute('notes');
    },



    toggleNewForm: function() {
      $('.' + this.formWrapperClass + '').animate({
        visibility: "toggle",
      }, 75);
    },
    
    validateForm: function(name, note) {
      console.log('validating...' + typeof name);
      var valid = true,
          message = 'There was an error ';
      if(typeof name == 'undefined') {
        valid = false;
        this.toggleProperty('errors');
        message += ' - the name must be longer than 4 characters. FIX IT!!!';
        return false;
      }
      else if(typeof note == 'undefined') {
        valid = false;
        this.toggleProperty('errors');
        message += ' - the note must be longer than 4 characters. FIX IT!!!';
        return false;
      }
      else {
        return true;
        message = "No errors - successfully created!"
      }
      return message;
    },

    deleteNote: function(note) {
      // passed by action from view to controller...if not here then it looks in Route
      this.get('store').find('note', note.id).then(function(record){
        record.deleteRecord();
        record.save();
      });
    },
    
  }
    
});
