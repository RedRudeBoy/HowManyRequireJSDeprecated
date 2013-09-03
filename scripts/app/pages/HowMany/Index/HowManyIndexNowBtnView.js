define(["ember","jquery"], function(Ember,$) {
	var HowManyIndexNowBtnView = Ember.View.extend({
		click: function() {
			$('#HowManyIndexWhen,#HowManyIndexDuration').toggle();
			$("#"+this.elementId).children('.btn').toggleClass('active');
		}
	});
	return HowManyIndexNowBtnView;
});
