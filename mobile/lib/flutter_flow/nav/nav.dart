import 'dart:async';

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '/index.dart';
import '/flutter_flow/flutter_flow_util.dart';

export 'package:go_router/go_router.dart';
export 'serialization_util.dart';

const kTransitionInfoKey = '__transition_info__';

GlobalKey<NavigatorState> appNavigatorKey = GlobalKey<NavigatorState>();

class AppStateNotifier extends ChangeNotifier {
  AppStateNotifier._();

  static AppStateNotifier? _instance;
  static AppStateNotifier get instance => _instance ??= AppStateNotifier._();

  bool showSplashImage = true;

  void stopShowingSplashImage() {
    showSplashImage = false;
    notifyListeners();
  }
}

GoRouter createRouter(AppStateNotifier appStateNotifier) => GoRouter(
      initialLocation: '/',
      debugLogDiagnostics: true,
      refreshListenable: appStateNotifier,
      navigatorKey: appNavigatorKey,
      errorBuilder: (context, state) => WelcomeScreenWidget(),
      routes: [
        FFRoute(
          name: '_initialize',
          path: '/',
          builder: (context, _) => WelcomeScreenWidget(),
        ),
        FFRoute(
          name: 'WelcomeScreen',
          path: '/welcomeScreen',
          builder: (context, params) => WelcomeScreenWidget(),
        ),
        FFRoute(
          name: 'onboardRoleSelect',
          path: '/onboardRoleSelect',
          builder: (context, params) => OnboardRoleSelectWidget(
            typeColor: params.getParam(
              'typeColor',
              ParamType.Color,
            ),
          ),
        ),
        FFRoute(
          name: 'houseHoldSignin',
          path: '/houseHoldSignin',
          builder: (context, params) => HouseHoldSigninWidget(),
        ),
        FFRoute(
          name: 'careGiverSignIn',
          path: '/careGiverSignIn',
          builder: (context, params) => CareGiverSignInWidget(),
        ),
        FFRoute(
          name: 'registerName',
          path: '/registerName',
          builder: (context, params) => RegisterNameWidget(),
        ),
        FFRoute(
          name: 'careType',
          path: '/careType',
          builder: (context, params) => CareTypeWidget(
            typeColor: params.getParam(
              'typeColor',
              ParamType.Color,
            ),
          ),
        ),
        FFRoute(
          name: 'Householdsignup',
          path: '/householdsignup',
          builder: (context, params) => HouseholdsignupWidget(),
        ),
        FFRoute(
          name: 'PatientFirstPage',
          path: '/patientFirstPage',
          builder: (context, params) => PatientFirstPageWidget(),
        ),
        FFRoute(
          name: 'PatientDetails',
          path: '/patientDetails',
          builder: (context, params) => PatientDetailsWidget(),
        ),
        FFRoute(
          name: 'PrimaryCareOptions',
          path: '/primaryCareOptions',
          builder: (context, params) => PrimaryCareOptionsWidget(),
        ),
        FFRoute(
          name: 'PatientDiseases',
          path: '/patientDiseases',
          builder: (context, params) => PatientDiseasesWidget(),
        ),
        FFRoute(
          name: 'PatientRequirements',
          path: '/patientRequirements',
          builder: (context, params) => PatientRequirementsWidget(),
        ),
        FFRoute(
          name: 'Personalization',
          path: '/personalization',
          builder: (context, params) => PersonalizationWidget(),
        ),
        FFRoute(
          name: 'homePage',
          path: '/homePage',
          builder: (context, params) => HomePageWidget(),
        ),
        FFRoute(
          name: 'PatientInfo',
          path: '/patientInfo',
          builder: (context, params) => PatientInfoWidget(),
        ),
        FFRoute(
          name: 'MessageScreen',
          path: '/messageScreen',
          builder: (context, params) => MessageScreenWidget(),
        ),
        FFRoute(
          name: 'Marketplace',
          path: '/marketplace',
          builder: (context, params) => MarketplaceWidget(),
        ),
        FFRoute(
          name: 'CaregiverPage',
          path: '/caregiverPage',
          builder: (context, params) => CaregiverPageWidget(),
        ),
        FFRoute(
          name: 'PatientReports',
          path: '/patientReports',
          builder: (context, params) => PatientReportsWidget(),
        ),
        FFRoute(
          name: 'CaregiverPersonal',
          path: '/caregiverPersonal',
          builder: (context, params) => CaregiverPersonalWidget(),
        ),
        FFRoute(
          name: 'Caregiverinfo',
          path: '/caregiverinfo',
          builder: (context, params) => CaregiverinfoWidget(),
        ),
        FFRoute(
          name: 'profilePage',
          path: '/profilePage',
          builder: (context, params) => ProfilePageWidget(),
        ),
        FFRoute(
          name: 'PatientPersonalInfo',
          path: '/patientPersonalInfo',
          builder: (context, params) => PatientPersonalInfoWidget(),
        ),
        FFRoute(
          name: 'PatientInformationEDIT',
          path: '/patientInformationEDIT',
          builder: (context, params) => PatientInformationEDITWidget(),
        ),
        FFRoute(
          name: 'MedicalRecords',
          path: '/medicalRecords',
          builder: (context, params) => MedicalRecordsWidget(),
        ),
        FFRoute(
          name: 'MedicalRecordsINFO',
          path: '/medicalRecordsINFO',
          builder: (context, params) => MedicalRecordsINFOWidget(),
        ),
        FFRoute(
          name: 'MedicalRecordUpdate',
          path: '/medicalRecordUpdate',
          builder: (context, params) => MedicalRecordUpdateWidget(),
        ),
        FFRoute(
          name: 'PatientCalendar',
          path: '/patientCalendar',
          builder: (context, params) => PatientCalendarWidget(),
        ),
        FFRoute(
          name: 'PatientCalendarINFO',
          path: '/patientCalendarINFO',
          builder: (context, params) => PatientCalendarINFOWidget(),
        ),
        FFRoute(
          name: 'CaregiverRequirements',
          path: '/caregiverRequirements',
          builder: (context, params) => CaregiverRequirementsWidget(),
        ),
        FFRoute(
          name: 'HealthInformation',
          path: '/healthInformation',
          builder: (context, params) => HealthInformationWidget(),
        ),
        FFRoute(
          name: 'AcademicInfo',
          path: '/academicInfo',
          builder: (context, params) => AcademicInfoWidget(),
        ),
        FFRoute(
          name: 'ExperiencePage',
          path: '/experiencePage',
          builder: (context, params) => ExperiencePageWidget(),
        ),
        FFRoute(
          name: 'SpecializedinPage',
          path: '/specializedinPage',
          builder: (context, params) => SpecializedinPageWidget(),
        ),
        FFRoute(
          name: 'AgencyDetails',
          path: '/agencyDetails',
          builder: (context, params) => AgencyDetailsWidget(),
        ),
        FFRoute(
          name: 'AgencyGeneralInfo',
          path: '/agencyGeneralInfo',
          builder: (context, params) => AgencyGeneralInfoWidget(),
        ),
        FFRoute(
          name: 'AgencyRatings',
          path: '/agencyRatings',
          builder: (context, params) => AgencyRatingsWidget(),
        ),
        FFRoute(
          name: 'RateAgency',
          path: '/rateAgency',
          builder: (context, params) => RateAgencyWidget(),
        ),
        FFRoute(
          name: 'RateCaregiver',
          path: '/rateCaregiver',
          builder: (context, params) => RateCaregiverWidget(),
        ),
        FFRoute(
          name: 'RateCareGiverScreen',
          path: '/rateCareGiverScreen',
          builder: (context, params) => RateCareGiverScreenWidget(),
        ),
        FFRoute(
          name: 'CaregiverReports',
          path: '/caregiverReports',
          builder: (context, params) => CaregiverReportsWidget(),
        ),
        FFRoute(
          name: 'CaregiverHomeage',
          path: '/caregiverHomeage',
          builder: (context, params) => CaregiverHomeageWidget(),
        ),
        FFRoute(
          name: 'testingPage',
          path: '/testingPage',
          builder: (context, params) => TestingPageWidget(),
        ),
        FFRoute(
          name: 'CaregiverersonalLinks',
          path: '/caregiverersonalLinks',
          builder: (context, params) => CaregiverersonalLinksWidget(),
        ),
        FFRoute(
          name: 'CGQuicklinks',
          path: '/cGQuicklinks',
          builder: (context, params) => CGQuicklinksWidget(),
        ),
        FFRoute(
          name: 'PersonalInfo',
          path: '/personalInfo',
          builder: (context, params) => PersonalInfoWidget(),
        ),
        FFRoute(
          name: 'personalInfoEDIT',
          path: '/personalInfoEDIT',
          builder: (context, params) => PersonalInfoEDITWidget(),
        ),
        FFRoute(
          name: 'cgAcademicInfo',
          path: '/cgAcademicInfo',
          builder: (context, params) => CgAcademicInfoWidget(),
        ),
        FFRoute(
          name: 'cgExperience',
          path: '/cgExperience',
          builder: (context, params) => CgExperienceWidget(),
        ),
        FFRoute(
          name: 'cgSpecializedin',
          path: '/cgSpecializedin',
          builder: (context, params) => CgSpecializedinWidget(),
        ),
        FFRoute(
          name: 'Caregiverfunctions',
          path: '/caregiverfunctions',
          builder: (context, params) => CaregiverfunctionsWidget(),
        ),
        FFRoute(
          name: 'cgCalendar',
          path: '/cgCalendar',
          builder: (context, params) => CgCalendarWidget(),
        ),
        FFRoute(
          name: 'cgCalendarinfo',
          path: '/cgCalendarinfo',
          builder: (context, params) => CgCalendarinfoWidget(),
        ),
        FFRoute(
          name: 'cgAvailability',
          path: '/cgAvailability',
          builder: (context, params) => CgAvailabilityWidget(),
        ),
        FFRoute(
          name: 'cgClockinandout',
          path: '/cgClockinandout',
          builder: (context, params) => CgClockinandoutWidget(),
        ),
        FFRoute(
          name: 'cgReports',
          path: '/cgReports',
          builder: (context, params) => CgReportsWidget(),
        ),
        FFRoute(
          name: 'cgAgencyDetails',
          path: '/cgAgencyDetails',
          builder: (context, params) => CgAgencyDetailsWidget(),
        ),
        FFRoute(
          name: 'cgGeneralInfo',
          path: '/cgGeneralInfo',
          builder: (context, params) => CgGeneralInfoWidget(),
        ),
        FFRoute(
          name: 'cgAgencyRatings',
          path: '/cgAgencyRatings',
          builder: (context, params) => CgAgencyRatingsWidget(),
        ),
        FFRoute(
          name: 'cgRateagency',
          path: '/cgRateagency',
          builder: (context, params) => CgRateagencyWidget(),
        ),
        FFRoute(
          name: 'PatientsList',
          path: '/patientsList',
          builder: (context, params) => PatientsListWidget(),
        ),
        FFRoute(
          name: 'psPatientInfo',
          path: '/psPatientInfo',
          builder: (context, params) => PsPatientInfoWidget(),
        ),
        FFRoute(
          name: 'pcQuickLinks',
          path: '/pcQuickLinks',
          builder: (context, params) => PcQuickLinksWidget(),
        ),
        FFRoute(
          name: 'pcPersonalinfo',
          path: '/pcPersonalinfo',
          builder: (context, params) => PcPersonalinfoWidget(),
        ),
        FFRoute(
          name: 'pcMedicalRecords',
          path: '/pcMedicalRecords',
          builder: (context, params) => PcMedicalRecordsWidget(),
        ),
        FFRoute(
          name: 'pcMedicalRecordsINFO',
          path: '/pcMedicalRecordsINFO',
          builder: (context, params) => PcMedicalRecordsINFOWidget(),
        ),
        FFRoute(
          name: 'pcMedicalRecordsEDIT',
          path: '/pcMedicalRecordsEDIT',
          builder: (context, params) => PcMedicalRecordsEDITWidget(),
        ),
        FFRoute(
          name: 'pcRequirements',
          path: '/pcRequirements',
          builder: (context, params) => PcRequirementsWidget(),
        ),
        FFRoute(
          name: 'pcHealthInformation',
          path: '/pcHealthInformation',
          builder: (context, params) => PcHealthInformationWidget(),
        ),
        FFRoute(
          name: 'pcCalendar',
          path: '/pcCalendar',
          builder: (context, params) => PcCalendarWidget(),
        ),
        FFRoute(
          name: 'pcCalendarINFO',
          path: '/pcCalendarINFO',
          builder: (context, params) => PcCalendarINFOWidget(),
        ),
        FFRoute(
          name: 'todotask',
          path: '/todotask',
          builder: (context, params) => TodotaskWidget(),
        ),
        FFRoute(
          name: 'todotask2',
          path: '/todotask2',
          builder: (context, params) => Todotask2Widget(),
        ),
        FFRoute(
          name: 'MarcketPlace1',
          path: '/marcketPlace1',
          builder: (context, params) => MarcketPlace1Widget(),
        ),
        FFRoute(
          name: 'MarketPlace2',
          path: '/marketPlace2',
          builder: (context, params) => MarketPlace2Widget(),
        ),
        FFRoute(
          name: 'MarketPlace3',
          path: '/marketPlace3',
          builder: (context, params) => MarketPlace3Widget(),
        ),
        FFRoute(
          name: 'marketplace',
          path: '/marketplace',
          builder: (context, params) => MarketplaceWidget(),
        )
      ].map((r) => r.toRoute(appStateNotifier)).toList(),
    );

extension NavParamExtensions on Map<String, String?> {
  Map<String, String> get withoutNulls => Map.fromEntries(
        entries
            .where((e) => e.value != null)
            .map((e) => MapEntry(e.key, e.value!)),
      );
}

extension NavigationExtensions on BuildContext {
  void safePop() {
    // If there is only one route on the stack, navigate to the initial
    // page instead of popping.
    if (canPop()) {
      pop();
    } else {
      go('/');
    }
  }
}

extension _GoRouterStateExtensions on GoRouterState {
  Map<String, dynamic> get extraMap =>
      extra != null ? extra as Map<String, dynamic> : {};
  Map<String, dynamic> get allParams => <String, dynamic>{}
    ..addAll(pathParameters)
    ..addAll(uri.queryParameters)
    ..addAll(extraMap);
  TransitionInfo get transitionInfo => extraMap.containsKey(kTransitionInfoKey)
      ? extraMap[kTransitionInfoKey] as TransitionInfo
      : TransitionInfo.appDefault();
}

class FFParameters {
  FFParameters(this.state, [this.asyncParams = const {}]);

  final GoRouterState state;
  final Map<String, Future<dynamic> Function(String)> asyncParams;

  Map<String, dynamic> futureParamValues = {};

  // Parameters are empty if the params map is empty or if the only parameter
  // present is the special extra parameter reserved for the transition info.
  bool get isEmpty =>
      state.allParams.isEmpty ||
      (state.allParams.length == 1 &&
          state.extraMap.containsKey(kTransitionInfoKey));
  bool isAsyncParam(MapEntry<String, dynamic> param) =>
      asyncParams.containsKey(param.key) && param.value is String;
  bool get hasFutures => state.allParams.entries.any(isAsyncParam);
  Future<bool> completeFutures() => Future.wait(
        state.allParams.entries.where(isAsyncParam).map(
          (param) async {
            final doc = await asyncParams[param.key]!(param.value)
                .onError((_, __) => null);
            if (doc != null) {
              futureParamValues[param.key] = doc;
              return true;
            }
            return false;
          },
        ),
      ).onError((_, __) => [false]).then((v) => v.every((e) => e));

  dynamic getParam<T>(
    String paramName,
    ParamType type, {
    bool isList = false,
  }) {
    if (futureParamValues.containsKey(paramName)) {
      return futureParamValues[paramName];
    }
    if (!state.allParams.containsKey(paramName)) {
      return null;
    }
    final param = state.allParams[paramName];
    // Got parameter from `extras`, so just directly return it.
    if (param is! String) {
      return param;
    }
    // Return serialized value.
    return deserializeParam<T>(
      param,
      type,
      isList,
    );
  }
}

class FFRoute {
  const FFRoute({
    required this.name,
    required this.path,
    required this.builder,
    this.requireAuth = false,
    this.asyncParams = const {},
    this.routes = const [],
  });

  final String name;
  final String path;
  final bool requireAuth;
  final Map<String, Future<dynamic> Function(String)> asyncParams;
  final Widget Function(BuildContext, FFParameters) builder;
  final List<GoRoute> routes;

  GoRoute toRoute(AppStateNotifier appStateNotifier) => GoRoute(
        name: name,
        path: path,
        pageBuilder: (context, state) {
          fixStatusBarOniOS16AndBelow(context);
          final ffParams = FFParameters(state, asyncParams);
          final page = ffParams.hasFutures
              ? FutureBuilder(
                  future: ffParams.completeFutures(),
                  builder: (context, _) => builder(context, ffParams),
                )
              : builder(context, ffParams);
          final child = page;

          final transitionInfo = state.transitionInfo;
          return transitionInfo.hasTransition
              ? CustomTransitionPage(
                  key: state.pageKey,
                  child: child,
                  transitionDuration: transitionInfo.duration,
                  transitionsBuilder:
                      (context, animation, secondaryAnimation, child) =>
                          PageTransition(
                    type: transitionInfo.transitionType,
                    duration: transitionInfo.duration,
                    reverseDuration: transitionInfo.duration,
                    alignment: transitionInfo.alignment,
                    child: child,
                  ).buildTransitions(
                    context,
                    animation,
                    secondaryAnimation,
                    child,
                  ),
                )
              : MaterialPage(key: state.pageKey, child: child);
        },
        routes: routes,
      );
}

class TransitionInfo {
  const TransitionInfo({
    required this.hasTransition,
    this.transitionType = PageTransitionType.fade,
    this.duration = const Duration(milliseconds: 300),
    this.alignment,
  });

  final bool hasTransition;
  final PageTransitionType transitionType;
  final Duration duration;
  final Alignment? alignment;

  static TransitionInfo appDefault() => TransitionInfo(hasTransition: false);
}

class RootPageContext {
  const RootPageContext(this.isRootPage, [this.errorRoute]);
  final bool isRootPage;
  final String? errorRoute;

  static bool isInactiveRootPage(BuildContext context) {
    final rootPageContext = context.read<RootPageContext?>();
    final isRootPage = rootPageContext?.isRootPage ?? false;
    final location = GoRouterState.of(context).uri.toString();
    return isRootPage &&
        location != '/' &&
        location != rootPageContext?.errorRoute;
  }

  static Widget wrap(Widget child, {String? errorRoute}) => Provider.value(
        value: RootPageContext(true, errorRoute),
        child: child,
      );
}

extension GoRouterLocationExtension on GoRouter {
  String getCurrentLocation() {
    final RouteMatch lastMatch = routerDelegate.currentConfiguration.last;
    final RouteMatchList matchList = lastMatch is ImperativeRouteMatch
        ? lastMatch.matches
        : routerDelegate.currentConfiguration;
    return matchList.uri.toString();
  }
}
