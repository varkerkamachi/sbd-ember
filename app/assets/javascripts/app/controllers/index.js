SBD.IndexController = Ember.Controller.extend({
  time: function() {
    return (new Date()).toDateString()
  }.property()  
});
