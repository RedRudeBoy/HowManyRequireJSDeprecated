define([
	"app/IndexRoute",
	"app/ApplicationView",
	"app/ApplicationController",
	"app/router",
	
	"pages/HMCRUD/HMCRUDView",
	"pages/HMDone/HMDoneView",
	"pages/HMList/HMListView",
	
	"pages/HMListTags/HMListTagsRoute",
	"pages/HMListTags/HMListTagsDefaultRoute",
	"pages/HMListTags/HMListTagsBigIconsRoute",
	
	"pages/HMListTags/HMListTagsView",
	"pages/HMListTags/HMListTagsToolbarView",
	"pages/HMListTags/HMListTagsBigIconsView",
	"pages/HMListTags/HMListTagsHistoryView",
	"pages/HMListTags/HMListTagsUsersView",
	"pages/HMListTags/HMListTagsWindRoseView",
	
	"pages/HMLogin/HMLoginView",
	"pages/HMLogin/HMDoLoginView",
	
	"pages/HMView/HMViewView",
	"pages/HMView/HMViewNowBtnView"
	
], function(
	IndexRoute, ApplicationView, ApplicationController, Router,
	HMCRUDView, HMDoneView, HMListView, 
	HMListTagsRoute, HMListTagsDefaultRoute, HMListTagsBigIconsRoute,
	HMListTagsView, HMListTagsToolbarView, 
	HMListTagsBigIconsView, HMListTagsHistoryView, HMListTagsUsersView, HMListTagsWindRoseView,
	HMLoginView, HMDoLoginView,
	HMViewView, HMViewNowBtnView
	) {
	/*Module Pattern*/
	var App = {
		LOG_TRANSITIONS: true,
		
		IndexRoute: IndexRoute,
		ApplicationView: ApplicationView,
		ApplicationController: ApplicationController,
		Router: Router,
		
		HMCRUDView:HMCRUDView, HMDoneView:HMDoneView, HMListView:HMListView,
		
		HMListTagsRoute:HMListTagsRoute, HMListTagsDefaultRoute:HMListTagsDefaultRoute, HMListTagsBigIconsRoute:HMListTagsBigIconsRoute,
		
		HMListTagsView:HMListTagsView, HMListTagsToolbarView:HMListTagsToolbarView, 
		HMListTagsBigIconsView:HMListTagsBigIconsView, HMListTagsHistoryView:HMListTagsHistoryView, 
		HMListTagsUsersView:HMListTagsUsersView, HMListTagsWindRoseView:HMListTagsWindRoseView,
		
		HMLoginView: HMLoginView, HMDoLoginView: HMDoLoginView,
		HMViewView:HMViewView, HMViewNowBtnView:HMViewNowBtnView
	};
	return App;
});
