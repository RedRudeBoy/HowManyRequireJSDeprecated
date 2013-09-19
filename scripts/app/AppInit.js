/**
 * Very ugly class... includes all the dependencies of App object with Ember.Application.create function
 */
define([
/**
 * Stores
 */
	"DS",
	"LS",
//	"GSAdapter",

/**
 * Application
 */
	"app/ApplicationView",
	"app/ApplicationController",
//	"app/ApplicationRoute",
	"app/IndexRoute",
	"app/Router",

/**
 * Models
 */
	"models/DSModels/WizardQuestionDSModel",
	"models/DSModels/WizardAnswerDSModel",
	"models/DSModels/UserConfigurationDSModel",
	"models/DSModels/TagDSModel",
	"models/DSModels/NotificationDSModel",
	"models/DSModels/MessageDSModel",
	"models/DSModels/HowManyDSModel",
	"GSModels/Calendar",
//	"GSModels/CalendarList",
//	"GSModels/CalendarListEntry",
	"GSModels/Contact",
//	"GSModels/Drive",
	"GSModels/Event",
//	"GSModels/Events",
	"GSModels/File",
	"GSModels/Task",

/**
 * Pages
 */
	"pages/Configuration/ConfigurationView",
	"pages/Configuration/ConfigurationRoute",
	"pages/Credits/CreditsView",
	
	//HowMany
	"pages/HowMany/Done/HowManyDoneView",
	"pages/HowMany/Edit/HowManyEditController",
	"pages/HowMany/Edit/HowManyEditRoute",
	"pages/HowMany/Edit/HowManyEditSatisfactionView",
	"pages/HowMany/Edit/HowManyEditView",
	"pages/HowMany/Index/HowManyIndexNowBtnView",
	"pages/HowMany/Index/HowManyIndexRoute",
	"pages/HowMany/Index/HowManyIndexView",
	"pages/HowMany/Planner/HowManyPlannerView",
	"pages/HowMany/Planning/HowManyPlanningRoute",
	"pages/HowMany/Planning/HowManyPlanningView",
	"pages/HowMany/HowManyController",
	"pages/HowMany/HowManyRoute",
	
	//HowManys
//	"pages/HowManys/HowManysController",
//	"pages/HowManys/HowManysRoute",
	"pages/HowManys/HowManysView",
	"pages/HowManys/BigIcons/HowManysBigIconsController",
//	"pages/HowManys/BigIcons/HowManysBigIconsItemController",
//	"pages/HowManys/BigIcons/HowManysBigIconsItemView",
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
	"pages/Notifications/NotificationsRoute",
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
	LS,
//	GSAdapter,
//	
	//Application
	ApplicationView, ApplicationController,
//	ApplicationRoute,
	IndexRoute, Router,

	//Models
	WizardQuestionDSModel,
	WizardAnswerDSModel,
	UserConfigurationDSModel,
	TagDSModel,
	NotificationDSModel,
	MessageDSModel,
	HowManyDSModel,
	Calendar,
//	CalendarList,
//	CalendarListEntry,
	Contact,
//	Drive,
	Event,
//	Events,
	File,
	Task,

	//Pages
	ConfigurationView,
	ConfigurationRoute,
	CreditsView,
	
	HowManyDoneView,
	HowManyEditController,
	HowManyEditRoute,
	HowManyEditSatisfactionView,
	HowManyEditView,
	HowManyIndexNowBtnView,
	HowManyIndexRoute,
	HowManyIndexView,
	HowManyPlannerView,
	HowManyPlanningRoute,
	HowManyPlanningView,
	HowManyController,
	HowManyRoute,
	
//	HowManysController,
//	HowManysRoute,
	HowManysView,
	
	HowManysBigIconsController,
//	HowManysBigIconsItemController,HowManysBigIconsItemView,
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
	NotificationsRoute,
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
 * Stores: DS, LS & GSAdapter
 */
		ApplicationAdapter: DS.FixtureAdapter.extend(),
//		ApplicationAdapter: DS.LSAdapter.extend({
//		  namespace: 'HM'
//		}),
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
		WizardQuestion: WizardQuestionDSModel,
		WizardAnswer: WizardAnswerDSModel,
		UserConfiguration: UserConfigurationDSModel,
		Tag: TagDSModel,
		Notification: NotificationDSModel,
		Message: MessageDSModel,
		HowMany: HowManyDSModel,
		Calendar: Calendar,
//		CalendarList: CalendarList,
//		CalendarListEntry: CalendarListEntry,
		Contact: Contact,
//		Drive: Drive,
		Event: Event,
//		Events: Events,
		File: File,
		Task: Task,

		ConfigurationView: ConfigurationView,
		ConfigurationRoute: ConfigurationRoute,
		CreditsView: CreditsView,

/**
 * Pages
 */
		HowManyDoneView: HowManyDoneView,
		HowManyEditController: HowManyEditController,
		HowManyEditRoute: HowManyEditRoute,
		HowManyEditSatisfactionView: HowManyEditSatisfactionView,
		HowManyEditView: HowManyEditView,
		HowManyIndexNowBtnView : HowManyIndexNowBtnView,
		HowManyIndexRoute: HowManyIndexRoute,
		HowManyIndexView: HowManyIndexView,
		HowManyPlannerView: HowManyPlannerView,
		HowManyPlanningRoute: HowManyPlanningRoute,
		HowManyPlanningView: HowManyPlanningView,
		HowManyController: HowManyController,
		HowManyRoute: HowManyRoute,

//		HowManysController: HowManysController,
//		HowManysRoute: HowManysRoute,
		HowManysView: HowManysView,

		HowManysBigIconsController: HowManysBigIconsController,
//		HowManysBigIconsItemController: HowManysBigIconsItemController,
//		HowManysBigIconsItemView: HowManysBigIconsItemView,
		HowManysBigIconsRoute: HowManysBigIconsRoute,
		HowManysBigIconsView: HowManysBigIconsView,
		HowManysHistoryView: HowManysHistoryView,
		HowManysIndexRoute: HowManysIndexRoute,
		HowManysListRoute: HowManysListRoute,
		HowManysListView: HowManysListView,
		HowManysToolbarView: HowManysToolbarView,
		HowManysUsersView: HowManysUsersView,
		HowManysWindRoseView: HowManysWindRoseView,

		LoginView: LoginView, DoLoginView: DoLoginView,
		NavbarView: NavbarView,
		NotificationsRoute: NotificationsRoute,
		NotificationsView: NotificationsView,
		ReportView: ReportView,
		WizardRoute: WizardRoute,
		WizardView: WizardView,
		WizardWelcomeView: WizardWelcomeView
	};
	return App;
});
