SBD.FlexView = Ember.View.extend({
  layoutName: 'app/layout/resizable',
  // classNames: ['resizable', 'draggable'],
  // attributeBindings: ['resizable', 'draggable'],
  // resizable: true,
  // draggable: true,
  // _resizeHandler: null,

  // init: function() {
  //   this._super();
  //   var view = this;
     
  //   var resizeHandler = function() {
  //     view.rerender();
  //   };
   
  //   this.set('resizeHandler', resizeHandler);
  //   $(window).bind('resize', this.get('resizeHandler'));
  // },
   
  // willDestroy: function() {
  //   $(window).unbind('resize', this.get('resizeHandler'));
  // }
  // didInsertElement: function() {
  //   this.$('.flex_cells').resizable({
  //     handle: 'e',
  //     cancel: 'cancel'
  //   });
  // },

});

