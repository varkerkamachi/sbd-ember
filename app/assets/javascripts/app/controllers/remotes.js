SBD.RemotesController = Ember.ArrayController.extend({
  remotesCount: function() {
    return this.get('length');
  }.property('length'),
  // notesCount: Ember.computed.alias('length'),
  logo: "",
  sortProperties: ['name'],
  sortAscending: true,
  init: function(remote) {
    console.log("\nediting?" + this.get('remotesCount'));
    // noneInEditMode();
  },
  
  paneTitle: function() {
    return "Remotes";
  }.property(),

  actions: {

    toggleNewForm: function(className) {
      var cText = $(className).text();
      var f = this.send('swapButtonText', className, cText);
      $('.new_form_wrapper').animate({
        visibility: "toggle",
      }, 150, function() { f; });
    },
    
    swapButtonText: function(el, text) {
      $(el).text(text == 'Add New' ? 'Cancel' : 'Add New');
    },
    
    createRemote: function() {
      var name = this.get('name');
      var note = this.get('note');
      var url = this.get('url');

      var newObj = this.store.createRecord('remote', {
          name: name,
          note: note,
          url:  url
        });
      this.set('name', '');
      this.set('note', '');
      this.set('url', '');

      newObj.save();
      this.send('toggleNewForm');
      this.transitionToRoute('remotes');
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
