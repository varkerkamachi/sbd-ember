SBD.RemotesView = Ember.View.extend({
  layoutName: 'app/layout/flex_ab',
  templateName: 'app/remotes/remotes',
  classNames: 'full_height',
  
  paneTitle: function() {
    return "Notes"
  },

});
