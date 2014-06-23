SBD.Note = DS.Model.extend({
  name:   DS.attr('string'),
  note:   DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date')
});