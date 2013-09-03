define([
	"app/IndexRoute",
	"app/ApplicationView",
	"app/ApplicationController",
	"app/Router",
	
	"pages/Configuration/ConfigurationView",
	"pages/Credits/CreditsView",
	
	//HowMany
	"pages/HowMany/Done/HowManyDoneView",
	"pages/HowMany/Edit/HowManyEditView",
	"pages/HowMany/Index/HowManyIndexView",
	"pages/HowMany/Index/HowManyIndexNowBtnView",
	
	//HowManys
	"pages/HowManys/HowManysRoute",
	"pages/HowManys/HowManysView",
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
	IndexRoute, ApplicationView, ApplicationController, Router,
	ConfigurationView,
	CreditsView,
	HowManyDoneView,HowManyEditView,HowManyIndexView,HowManyIndexNowBtnView,
	
	HowManysRoute,HowManysView,
	
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
		LOG_TRANSITIONS: true,
		
		IndexRoute: IndexRoute,
		ApplicationView: ApplicationView,
		ApplicationController: ApplicationController,
		Router: Router,
		
		ConfigurationView: ConfigurationView,
		CreditsView: CreditsView,
		
		HowManyDoneView: HowManyDoneView,
		HowManyEditView: HowManyEditView,
		HowManyIndexView: HowManyIndexView,
		HowManyIndexNowBtnView : HowManyIndexNowBtnView,
	
		HowManysRoute: HowManysRoute,
		HowManysView: HowManysView,
	
		HowManysBigIconsRoute: HowManysBigIconsRoute,HowManysBigIconsView: HowManysBigIconsView,
		HowManysHistoryView: HowManysHistoryView,
		HowManysIndexRoute: HowManysIndexRoute,
		HowManysListRoute: HowManysListRoute,
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
