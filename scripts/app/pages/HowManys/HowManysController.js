define(["ember","models/Tags"], function(Ember, Model){
	var HowManysController = Ember.ArrayController.extend({
//		sortProperties: ['name', 'artist'],
//		sortAscending: true // false for descending
//		content: Model,
//		itemController: 'howMany',
//		childrenLength: 0
//		childrenLength: function() {
//			console.log(this);
//			return this.length;
//		}.property('childrens')
	});
	var howManysController = HowManysController.create({ content: Ember.A() });
	return howManysController;
});