SBD.PanedataListitemComponent = Ember.Component.extend({
  layoutName: 'app/components/panedata-listitem',
  deleteDialog: false,
      
  prepareToDelete: function() {
    this.toggleProperty('deleteDialog');
  },
    
  cancelDelete: function() {
    this.toggleProperty('deleteDialog');
    return false;
  },
  onDeleteClick: function() {
    this.sendAction('action', this.model);
  },

});