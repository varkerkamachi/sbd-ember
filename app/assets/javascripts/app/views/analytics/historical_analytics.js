SBD.HistoricalAnalyticsView = Ember.View.extend({
  layoutName: 'app/layout/flex_rows_abb',
  templateName: 'app/analytics/historical/index',
  classNames: 'full_height',
  
  paneTitle: function() {
    return "Analytics"
  },

});
