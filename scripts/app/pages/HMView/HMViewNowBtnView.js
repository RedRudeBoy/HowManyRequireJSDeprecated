define(["ember","jquery"], function(Ember,Template) {
	var HMViewNowBtnView = Ember.View.extend({
		click: function() {
			$('#HMViewWhen,#HMViewDuration').toggle();
			$("#"+this.elementId).children('.btn').toggleClass('active');
		}
	});
	return HMViewNowBtnView;
});
