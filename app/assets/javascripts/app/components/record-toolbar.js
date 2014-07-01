SBD.RecordToolbarComponent = Ember.Component.extend({
  layoutName: 'app/components/record-toolbar',
  onToggleEditClick: function() {
    this.sendAction('action', this.model);
  },
});