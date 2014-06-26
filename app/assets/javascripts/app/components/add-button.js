SBD.AddButtonComponent = Ember.Component.extend({
  tagName: 'button',
  classNames: ['new_form_button'],
  layoutName: 'app/components/add-button',
  isActive: false,

  buttonText: 'Add New',
  formIsVisible: false,
  
  actions: {
    setActive: Ember.computed(this.isActive, function() {
      return this.isActive == true ? false : true;
    }),

    toggleText: function() {
      // console.log('active/' + this.isActive);
      this.toggleProperty('isActive');
      console.log('active/' + this.isActive);

      this.send('toggleNewForm');
      if( this.isActive == true ) {
        this.set('buttonText', 'Close');
      }
      else {
        this.set('buttonText', 'Add New');
      }
    },

    toggleNewForm: function(className) {
      $('.' + this.formWrapperClass + '').animate({
        visibility: "toggle",
      }, 75);
    },
    
  },
});