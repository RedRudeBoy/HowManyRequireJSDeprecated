/**
 * Very ugly class... includes all the dependencies of App
 */
define([
	"app/ApplicationView",
	"app/ApplicationController",
	"app/ApplicationRoute",
	"app/IndexRoute",
	"app/Router",
	
//	"models/Tags",
	"models/TagDSModel",
	
	"pages/Configuration/ConfigurationView",
	"pages/Credits/CreditsView",
	
	//HowMany
	"pages/HowMany/Done/HowManyDoneView",
	"pages/HowMany/Edit/HowManyEditView",
	"pages/HowMany/Index/HowManyIndexView",
	"pages/HowMany/Index/HowManyIndexNowBtnView",
	"pages/HowMany/HowManyController",
	
	//HowManys
	"pages/HowManys/HowManysController",
	"pages/HowManys/HowManysRoute",
	"pages/HowManys/HowManysView",
	"pages/HowManys/BigIcons/HowManysBigIconsController",
	"pages/HowManys/BigIcons/HowManysBigIconsItemController",
	"pages/HowManys/BigIcons/HowManysBigIconsItemView",
	"pages/HowManys/BigIcons/HowManysBigIconsRoute",
	"pages/HowManys/BigIcons/HowManysBigIconsView",
	"pages/HowManys/History/HowManysHistoryView",
	"pages/HowManys/Index/HowManysIndexRoute",
	"pages/HowManys/List/HowManysListRoute",
	"pages/HowManys/List/HowManysListView",
	"pages/HowManys/Toolbar/HowManysToolbarView",
	"pages/HowManys/Users/HowManysUsersView",
	"pages/HowManys/WindRose/HowManysWindRoseView",
	
	"pages/Login/LoginView",
	"pages/Login/DoLoginView",
	"pages/Navbar/NavbarView",
	"pages/Notifications/NotificationsView",
	"pages/Planner/PlannerView",
	"pages/Report/ReportView",
	"pages/Wizard/WizardView"
], function(
	ApplicationView, ApplicationController, ApplicationRoute, IndexRoute, Router,
//	Tags,
	TagDSModel,
	
	ConfigurationView,
	CreditsView,
	HowManyDoneView,HowManyEditView,HowManyIndexView,HowManyIndexNowBtnView,
	HowManyController,
	HowManysController,HowManysRoute,HowManysView,
	
	HowManysBigIconsController,
	HowManysBigIconsItemController,HowManysBigIconsItemView,
	HowManysBigIconsRoute,HowManysBigIconsView,
	HowManysHistoryView,
	HowManysIndexRoute,
	HowManysListRoute,
	HowManysListView,
	HowManysToolbarView,
	HowManysUsersView,
	HowManysWindRoseView,
	
	LoginView, DoLoginView,
	NavbarView,
	NotificationsView,
	PlannerView,
	ReportView,
	WizardView
	) {
	/*Module Pattern*/
	var App = {
		LOG_STACKTRACE_ON_DEPRECATION : true,
		LOG_TRANSITIONS               : true,
//		LOG_TRANSITIONS_INTERNAL      : true,
//		LOG_VIEW_LOOKUPS              : true,
//		LOG_ACTIVE_GENERATION         : true,
		
		ApplicationView: ApplicationView,
		ApplicationController: ApplicationController,
//		ApplicationRoute: ApplicationRoute,
		IndexRoute: IndexRoute,
		Router: Router,
//		tags: Tags,
		ApplicationAdapter: DS.FixtureAdapter.extend(),
		Tag: TagDSModel,
		
		ConfigurationView: ConfigurationView,
		CreditsView: CreditsView,

		HowManyDoneView: HowManyDoneView,
		HowManyEditView: HowManyEditView,
		HowManyIndexView: HowManyIndexView,
		HowManyIndexNowBtnView : HowManyIndexNowBtnView,
		HowManyController: HowManyController,

//		HowManysController: HowManysController,
//		HowManysRoute: HowManysRoute,
		HowManysView: HowManysView,

//		HowManysBigIconsController: HowManysBigIconsController,
//		HowManysBigIconsItemView: HowManysBigIconsItemView,
//		HowManysBigIconsItemController: HowManysBigIconsItemController,
		HowManysBigIconsRoute: HowManysBigIconsRoute,
		HowManysBigIconsView: HowManysBigIconsView,
		HowManysHistoryView: HowManysHistoryView,
		HowManysIndexRoute: HowManysIndexRoute,
//		HowManysListRoute: HowManysListRoute,
		HowManysListView: HowManysListView,
		HowManysToolbarView: HowManysToolbarView,
		HowManysUsersView: HowManysUsersView,
		HowManysWindRoseView: HowManysWindRoseView,

		LoginView: LoginView, DoLoginView: DoLoginView,
		NavbarView:NavbarView,
		NotificationsView:NotificationsView,
		PlannerView:PlannerView,
		ReportView:ReportView,
		WizardView:WizardView
	};
	return App;
});
