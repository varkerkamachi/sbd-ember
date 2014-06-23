SBD.NotesController = Ember.ArrayController.extend({
  notesCount: function() {
    return this.get('length');
  }.property('length'),
  // notesCount: Ember.computed.alias('length'),
  logo: "",
  sortProperties: ['updated_at:desc', 'name:asc'],
  //sortAscending: true,
  allSorted: Ember.computed.sort('notes', 'sortProperties'),
  init: function() {
  },
  
  paneTitle: function() {
    return "Notes"
  }.property(),

  /*
  allAreDone: function(key, value) {
    if (value === undefined) {
      return !!this.get('length') && this.everyProperty('isCompleted', true);
    } else {
      this.setEach('isCompleted', value);
      this.invoke('save');
      return value;
    }
  }.property('@each.isCompleted')
  */
  actions: {
    
    toggleNewForm: function(className) {
      console.log(className + "...class<<");
      var cText = $(className).text();
      console.log('ctext: ' + cText);
      var f = this.send('swapButtonText', className, cText);
      $('.new_form_wrapper').animate({
        visibility: "toggle",
      }, 350, function() { f; });
    },
    
    swapButtonText: function(el, text) {
      $(el).text(text == 'Add New' ? 'Cancel' : 'Add New');
    },
    
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
      this.send('toggleNewForm');
      this.transitionToRoute('notes');
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
