SBD.RemotesView = Ember.View.extend({
  layoutName: 'app/remotes/remotesindex',
  templateName: 'app/remotes/remotes',
  classNames: 'full_height',
  
  paneTitle: function() {
    return "Remotes"
  },

  toggleShowPane: function() {
    console.log('view togglerr');
    $('.' + this.showPaneClass + '').animate({
      right: '+=5%',
    }, 1175);
  },

});
