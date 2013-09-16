define(["ember"], function(Ember){
	var HowManysController = Ember.ArrayController.extend({
//		sortProperties: ['name', 'artist'],
//		sortAscending: true // false for descending
		
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