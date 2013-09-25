define(["ember"], function(Ember) {
	
	var HowManyEditTagView = Ember.View.extend({
		tagName: "div",
		classNames: ['span','HowManyEditTag'],
		parentOffset: function() {
			return this.$().offset();
		}.property(),
		_isEditing: false,
		mouseMove: function(e) {
			if(this._isEditing) {
//				var parentOffset = this.$().offset();
				var parentOffset = this.get('parentOffset');
				var center = { x: parentOffset.left + 110, y: parentOffset.top + 140 }; //Width / 2
//				var touch = { x: e.originalEvent.layerX, y: e.originalEvent.layerY }; //Not working
				var mouse = { x: e.clientX, y: e.clientY };
				var d = { x: (mouse.x - center.x), y: (mouse.y - center.y) };
				var dr = Math.round(Math.sqrt( d.x * d.x + d.y * d.y ));
				if(dr > 100) dr = 100;
				if(dr < 20) dr = 20;
				this.get('context').set('importance',dr);
//				e.target.setAttribute("r", dr);
//				Ember.Logger.log('mouseMove',dr);
			}
		},
		mouseEnter: function(e) {
//			Ember.Logger.log('mouseEnter',e,this._isEditing);
		},
		mouseLeave: function(e) {
//			Ember.Logger.log('mouseLeave',e,this._isEditing);
			this._isEditing = false;
		},
		mouseUp: function(e) {
//			Ember.Logger.log('mouseUp',e,this._isEditing);
			this._isEditing = false;
		},
		mouseDown: function(e) {
//			Ember.Logger.log('mouseDown',e,this._isEditing);
			this._isEditing = true;
		}
	});
	return HowManyEditTagView;
});