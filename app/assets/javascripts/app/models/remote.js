SBD.Remote = DS.Model.extend({
	name: 		DS.attr('string'),
	note: 		DS.attr('string'),
	url: 			DS.attr('string'),
	audit_id: DS.attr('number'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date')

});