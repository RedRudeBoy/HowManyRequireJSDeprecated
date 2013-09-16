/**
 * Very ugly class... includes all the dependencies of App object with Ember.Application.create function
 */
define([
/**
 * Stores
 */
	"DS",
//	"LS",
//	"GSAdapter",

/**
 * Application
 */
	"app/ApplicationView",
	"app/ApplicationController",
	"app/ApplicationRoute",
	"app/IndexRoute",
	"app/Router",

/**
 * Models
 */
	"models/DSModels/HowManyDSModel",
	"models/DSModels/TagDSModel",
	"models/DSModels/UserConfigurationDSModel",
	"GSModels/Calendar",
//	"GSModels/CalendarList",
//	"GSModels/CalendarListEntry",
	"GSModels/Contact",
//	"GSModels/Drive",
	"GSModels/Event",
//	"GSModels/Events",
	"GSModels/Task",

/**
 * Pages
 */
	"pages/Configuration/ConfigurationView",
	"pages/Configuration/ConfigurationRoute",
	"pages/Credits/CreditsView",
	
	//HowMany
	"pages/HowMany/Done/HowManyDoneView",
	"pages/HowMany/Edit/HowManyEditRoute",
	"pages/HowMany/Edit/HowManyEditView",
	"pages/HowMany/Index/HowManyIndexView",
	"pages/HowMany/Index/HowManyIndexNowBtnView",
	"pages/HowMany/Planner/HowManyPlannerView",
	"pages/HowMany/Planning/HowManyPlanningRoute",
	"pages/HowMany/Planning/HowManyPlanningView",
	"pages/HowMany/HowManyController",
	"pages/HowMany/HowManyRoute",
	
	//HowManys
	"pages/HowManys/HowManysController",
//	"pages/HowManys/HowManysRoute",
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
	"pages/Report/ReportView",
	"pages/Wizard/WizardRoute",
	"pages/Wizard/WizardView",
	"pages/Wizard/WizardWelcomeView",
//	"pages/Wizard/WizardBasicInfoView",
//	"pages/Wizard/WizardBodyView",
//	"pages/Wizard/WizardMindView",
//	"pages/Wizard/WizardWorkView",
//	"pages/Wizard/WizardViceView",
//	"pages/Wizard/WizardFinishView"
], function(
	//Stores
	DS,
//	LS,
//	GSAdapter,
//	
	//Application
	ApplicationView, ApplicationController, ApplicationRoute, IndexRoute, Router,

	//Models
	HowManyDSModel,
	TagDSModel,
	UserConfigurationDSModel,
	Calendar,
//	CalendarList,
//	CalendarListEntry,
	Contact,
//	Drive,
	Event,
//	Events,
	Task,

	//Pages
	ConfigurationView,
	ConfigurationRoute,
	CreditsView,
	HowManyDoneView,HowManyEditRoute,HowManyEditView,HowManyIndexView,HowManyIndexNowBtnView,
	HowManyPlannerView,
	HowManyPlanningRoute,
	HowManyPlanningView,
	HowManyController,
	HowManyRoute,
	
	HowManysController,
//	HowManysRoute,
	HowManysView,
	
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
	ReportView,
	WizardRoute,
	WizardView,
	WizardWelcomeView
	) {
	/*Module Pattern*/
	var App = {
/**
 * Ember confs
 */
		LOG_STACKTRACE_ON_DEPRECATION : true,
		LOG_TRANSITIONS               : true,
//		LOG_TRANSITIONS_INTERNAL      : true,
//		LOG_VIEW_LOOKUPS              : true,
//		LOG_ACTIVE_GENERATION         : true,

/**
 * Stores
 */
		ApplicationAdapter: DS.FixtureAdapter.extend(),
		
/**
 * Application
 */
		ApplicationView: ApplicationView,
		ApplicationController: ApplicationController,
//		ApplicationRoute: ApplicationRoute,
		IndexRoute: IndexRoute,
		Router: Router,
		
/**
 * Models
 */
		HowMany: HowManyDSModel,
		Tag: TagDSModel,
		UserConfiguration: UserConfigurationDSModel,
		Calendar: Calendar,
//		CalendarList: CalendarList,
//		CalendarListEntry: CalendarListEntry,
		Contact: Contact,
//		Drive: Drive,
		Event: Event,
//		Events: Events,
		Task: Task,

		ConfigurationView: ConfigurationView,
		ConfigurationRoute: ConfigurationRoute,
		CreditsView: CreditsView,

/**
 * Pages
 */
		HowManyDoneView: HowManyDoneView,
		HowManyEditRoute: HowManyEditRoute,
		HowManyEditView: HowManyEditView,
		HowManyIndexView: HowManyIndexView,
		HowManyIndexNowBtnView : HowManyIndexNowBtnView,
		HowManyPlannerView: HowManyPlannerView,
		HowManyPlanningRoute: HowManyPlanningRoute,
		HowManyPlanningView: HowManyPlanningView,
		HowManyController: HowManyController,
		HowManyRoute: HowManyRoute,

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
		NavbarView: NavbarView,
		NotificationsView: NotificationsView,
		ReportView: ReportView,
		WizardRoute: WizardRoute,
		WizardView: WizardView,
		WizardWelcomeView: WizardWelcomeView
	};
	return App;
});
