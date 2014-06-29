SBD.CreateFormView = Ember.View.extend({
  layoutName: 'app/layout/forms/create',

  formTitle: function() {
    var c = this.get('controller');
    console.log('\ncntrl: ' + c);
    //alert(c);
  }
});