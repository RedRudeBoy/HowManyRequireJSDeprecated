define(["DS"], function(DS){

var HowMany = DS.Model.extend({
	calendar: DS.belongsTo('Calendar')
  , task: DS.belongsTo('Task')
//  , events: DS.hasMany('Event')
//  , contacts: DS.hasMany('Contact')
  , tagz: DS.hasMany('Tag', {inverse: 'howmanyz'})

});

HowMany.FIXTURES =
[{
	id: 1,
	calendar: 'redrudeboy@gmail.com',
	task: 'MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE2NjkxNjUwODA',
//	events: [
//		'_8d9lcgrfdpr6asjk60oj6c9gcks34phk6gs32cpp6ph62e35c4s3ec9k6oo3aob3c4p0',
//		'_8d9lcgrfdpr6asjk60rmacpl6sp3aphm6cr38c316kojaopjcdi3ap9jcpj62c1jckqg'
//	],
//	contacts: [],
	tagz: ['24']
}];

	return HowMany;
});
