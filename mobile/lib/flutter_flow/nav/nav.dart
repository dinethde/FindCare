import 'dart:async';

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '/flutter_flow/flutter_flow_util.dart';

import '/index.dart';

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
          name: WelcomeScreenWidget.routeName,
          path: WelcomeScreenWidget.routePath,
          builder: (context, params) => WelcomeScreenWidget(),
        ),
        FFRoute(
          name: OnboardRoleSelectWidget.routeName,
          path: OnboardRoleSelectWidget.routePath,
          builder: (context, params) => OnboardRoleSelectWidget(
            typeColor: params.getParam(
              'typeColor',
              ParamType.Color,
            ),
          ),
        ),
        FFRoute(
          name: HouseHoldSigninWidget.routeName,
          path: HouseHoldSigninWidget.routePath,
          builder: (context, params) => HouseHoldSigninWidget(),
        ),
        FFRoute(
          name: CareGiverSignInWidget.routeName,
          path: CareGiverSignInWidget.routePath,
          builder: (context, params) => CareGiverSignInWidget(),
        ),
        FFRoute(
          name: RegisterNameWidget.routeName,
          path: RegisterNameWidget.routePath,
          builder: (context, params) => RegisterNameWidget(),
        ),
        FFRoute(
          name: CareTypeWidget.routeName,
          path: CareTypeWidget.routePath,
          builder: (context, params) => CareTypeWidget(
            typeColor: params.getParam(
              'typeColor',
              ParamType.Color,
            ),
          ),
        ),
        FFRoute(
          name: HouseholdsignupWidget.routeName,
          path: HouseholdsignupWidget.routePath,
          builder: (context, params) => HouseholdsignupWidget(),
        ),
        FFRoute(
          name: PatientFirstPageWidget.routeName,
          path: PatientFirstPageWidget.routePath,
          builder: (context, params) => PatientFirstPageWidget(),
        ),
        FFRoute(
          name: PatientDetailsWidget.routeName,
          path: PatientDetailsWidget.routePath,
          builder: (context, params) => PatientDetailsWidget(),
        ),
        FFRoute(
          name: PrimaryCareOptionsWidget.routeName,
          path: PrimaryCareOptionsWidget.routePath,
          builder: (context, params) => PrimaryCareOptionsWidget(),
        ),
        FFRoute(
          name: PatientDiseasesWidget.routeName,
          path: PatientDiseasesWidget.routePath,
          builder: (context, params) => PatientDiseasesWidget(),
        ),
        FFRoute(
          name: PatientRequirementsWidget.routeName,
          path: PatientRequirementsWidget.routePath,
          builder: (context, params) => PatientRequirementsWidget(),
        ),
        FFRoute(
          name: PersonalizationWidget.routeName,
          path: PersonalizationWidget.routePath,
          builder: (context, params) => PersonalizationWidget(),
        ),
        FFRoute(
          name: HomePageWidget.routeName,
          path: HomePageWidget.routePath,
          builder: (context, params) => HomePageWidget(),
        ),
        FFRoute(
          name: PatientInfoWidget.routeName,
          path: PatientInfoWidget.routePath,
          builder: (context, params) => PatientInfoWidget(),
        ),
        FFRoute(
          name: MessageScreenWidget.routeName,
          path: MessageScreenWidget.routePath,
          builder: (context, params) => MessageScreenWidget(),
        ),
        FFRoute(
          name: CaregiverPageWidget.routeName,
          path: CaregiverPageWidget.routePath,
          builder: (context, params) => CaregiverPageWidget(),
        ),
        FFRoute(
          name: PatientReportsWidget.routeName,
          path: PatientReportsWidget.routePath,
          builder: (context, params) => PatientReportsWidget(),
        ),
        FFRoute(
          name: CaregiverPersonalWidget.routeName,
          path: CaregiverPersonalWidget.routePath,
          builder: (context, params) => CaregiverPersonalWidget(),
        ),
        FFRoute(
          name: CaregiverinfoWidget.routeName,
          path: CaregiverinfoWidget.routePath,
          builder: (context, params) => CaregiverinfoWidget(),
        ),
        FFRoute(
          name: ProfilePageWidget.routeName,
          path: ProfilePageWidget.routePath,
          builder: (context, params) => ProfilePageWidget(),
        ),
        FFRoute(
          name: PatientPersonalInfoWidget.routeName,
          path: PatientPersonalInfoWidget.routePath,
          builder: (context, params) => PatientPersonalInfoWidget(),
        ),
        FFRoute(
          name: PatientInformationEDITWidget.routeName,
          path: PatientInformationEDITWidget.routePath,
          builder: (context, params) => PatientInformationEDITWidget(),
        ),
        FFRoute(
          name: MedicalRecordsWidget.routeName,
          path: MedicalRecordsWidget.routePath,
          builder: (context, params) => MedicalRecordsWidget(),
        ),
        FFRoute(
          name: MedicalRecordsINFOWidget.routeName,
          path: MedicalRecordsINFOWidget.routePath,
          builder: (context, params) => MedicalRecordsINFOWidget(),
        ),
        FFRoute(
          name: MedicalRecordUpdateWidget.routeName,
          path: MedicalRecordUpdateWidget.routePath,
          builder: (context, params) => MedicalRecordUpdateWidget(),
        ),
        FFRoute(
          name: PatientCalendarWidget.routeName,
          path: PatientCalendarWidget.routePath,
          builder: (context, params) => PatientCalendarWidget(),
        ),
        FFRoute(
          name: PatientCalendarINFOWidget.routeName,
          path: PatientCalendarINFOWidget.routePath,
          builder: (context, params) => PatientCalendarINFOWidget(),
        ),
        FFRoute(
          name: CaregiverRequirementsWidget.routeName,
          path: CaregiverRequirementsWidget.routePath,
          builder: (context, params) => CaregiverRequirementsWidget(),
        ),
        FFRoute(
          name: HealthInformationWidget.routeName,
          path: HealthInformationWidget.routePath,
          builder: (context, params) => HealthInformationWidget(),
        ),
        FFRoute(
          name: AcademicInfoWidget.routeName,
          path: AcademicInfoWidget.routePath,
          builder: (context, params) => AcademicInfoWidget(),
        ),
        FFRoute(
          name: ExperiencePageWidget.routeName,
          path: ExperiencePageWidget.routePath,
          builder: (context, params) => ExperiencePageWidget(),
        ),
        FFRoute(
          name: SpecializedinPageWidget.routeName,
          path: SpecializedinPageWidget.routePath,
          builder: (context, params) => SpecializedinPageWidget(),
        ),
        FFRoute(
          name: AgencyDetailsWidget.routeName,
          path: AgencyDetailsWidget.routePath,
          builder: (context, params) => AgencyDetailsWidget(),
        ),
        FFRoute(
          name: AgencyGeneralInfoWidget.routeName,
          path: AgencyGeneralInfoWidget.routePath,
          builder: (context, params) => AgencyGeneralInfoWidget(),
        ),
        FFRoute(
          name: AgencyRatingsWidget.routeName,
          path: AgencyRatingsWidget.routePath,
          builder: (context, params) => AgencyRatingsWidget(),
        ),
        FFRoute(
          name: RateAgencyWidget.routeName,
          path: RateAgencyWidget.routePath,
          builder: (context, params) => RateAgencyWidget(),
        ),
        FFRoute(
          name: RateCaregiverWidget.routeName,
          path: RateCaregiverWidget.routePath,
          builder: (context, params) => RateCaregiverWidget(),
        ),
        FFRoute(
          name: RateCareGiverScreenWidget.routeName,
          path: RateCareGiverScreenWidget.routePath,
          builder: (context, params) => RateCareGiverScreenWidget(),
        ),
        FFRoute(
          name: CaregiverReportsWidget.routeName,
          path: CaregiverReportsWidget.routePath,
          builder: (context, params) => CaregiverReportsWidget(),
        ),
        FFRoute(
          name: CaregiverHomeageWidget.routeName,
          path: CaregiverHomeageWidget.routePath,
          builder: (context, params) => CaregiverHomeageWidget(),
        ),
        FFRoute(
          name: CaregiverersonalLinksWidget.routeName,
          path: CaregiverersonalLinksWidget.routePath,
          builder: (context, params) => CaregiverersonalLinksWidget(),
        ),
        FFRoute(
          name: CGQuicklinksWidget.routeName,
          path: CGQuicklinksWidget.routePath,
          builder: (context, params) => CGQuicklinksWidget(),
        ),
        FFRoute(
          name: PersonalInfoWidget.routeName,
          path: PersonalInfoWidget.routePath,
          builder: (context, params) => PersonalInfoWidget(),
        ),
        FFRoute(
          name: PersonalInfoEDITWidget.routeName,
          path: PersonalInfoEDITWidget.routePath,
          builder: (context, params) => PersonalInfoEDITWidget(),
        ),
        FFRoute(
          name: CgAcademicInfoWidget.routeName,
          path: CgAcademicInfoWidget.routePath,
          builder: (context, params) => CgAcademicInfoWidget(),
        ),
        FFRoute(
          name: CgExperienceWidget.routeName,
          path: CgExperienceWidget.routePath,
          builder: (context, params) => CgExperienceWidget(),
        ),
        FFRoute(
          name: CgSpecializedinWidget.routeName,
          path: CgSpecializedinWidget.routePath,
          builder: (context, params) => CgSpecializedinWidget(),
        ),
        FFRoute(
          name: CaregiverfunctionsWidget.routeName,
          path: CaregiverfunctionsWidget.routePath,
          builder: (context, params) => CaregiverfunctionsWidget(),
        ),
        FFRoute(
          name: CgCalendarWidget.routeName,
          path: CgCalendarWidget.routePath,
          builder: (context, params) => CgCalendarWidget(),
        ),
        FFRoute(
          name: CgCalendarinfoWidget.routeName,
          path: CgCalendarinfoWidget.routePath,
          builder: (context, params) => CgCalendarinfoWidget(),
        ),
        FFRoute(
          name: CgAvailabilityWidget.routeName,
          path: CgAvailabilityWidget.routePath,
          builder: (context, params) => CgAvailabilityWidget(),
        ),
        FFRoute(
          name: CgClockinandoutWidget.routeName,
          path: CgClockinandoutWidget.routePath,
          builder: (context, params) => CgClockinandoutWidget(),
        ),
        FFRoute(
          name: CgReportsWidget.routeName,
          path: CgReportsWidget.routePath,
          builder: (context, params) => CgReportsWidget(),
        ),
        FFRoute(
          name: CgAgencyDetailsWidget.routeName,
          path: CgAgencyDetailsWidget.routePath,
          builder: (context, params) => CgAgencyDetailsWidget(),
        ),
        FFRoute(
          name: CgGeneralInfoWidget.routeName,
          path: CgGeneralInfoWidget.routePath,
          builder: (context, params) => CgGeneralInfoWidget(),
        ),
        FFRoute(
          name: CgAgencyRatingsWidget.routeName,
          path: CgAgencyRatingsWidget.routePath,
          builder: (context, params) => CgAgencyRatingsWidget(),
        ),
        FFRoute(
          name: CgRateagencyWidget.routeName,
          path: CgRateagencyWidget.routePath,
          builder: (context, params) => CgRateagencyWidget(),
        ),
        FFRoute(
          name: PatientsListWidget.routeName,
          path: PatientsListWidget.routePath,
          builder: (context, params) => PatientsListWidget(),
        ),
        FFRoute(
          name: PsPatientInfoWidget.routeName,
          path: PsPatientInfoWidget.routePath,
          builder: (context, params) => PsPatientInfoWidget(),
        ),
        FFRoute(
          name: PcQuickLinksWidget.routeName,
          path: PcQuickLinksWidget.routePath,
          builder: (context, params) => PcQuickLinksWidget(),
        ),
        FFRoute(
          name: PcPersonalinfoWidget.routeName,
          path: PcPersonalinfoWidget.routePath,
          builder: (context, params) => PcPersonalinfoWidget(),
        ),
        FFRoute(
          name: PcMedicalRecordsWidget.routeName,
          path: PcMedicalRecordsWidget.routePath,
          builder: (context, params) => PcMedicalRecordsWidget(),
        ),
        FFRoute(
          name: PcMedicalRecordsINFOWidget.routeName,
          path: PcMedicalRecordsINFOWidget.routePath,
          builder: (context, params) => PcMedicalRecordsINFOWidget(),
        ),
        FFRoute(
          name: PcMedicalRecordsEDITWidget.routeName,
          path: PcMedicalRecordsEDITWidget.routePath,
          builder: (context, params) => PcMedicalRecordsEDITWidget(),
        ),
        FFRoute(
          name: PcRequirementsWidget.routeName,
          path: PcRequirementsWidget.routePath,
          builder: (context, params) => PcRequirementsWidget(),
        ),
        FFRoute(
          name: PcHealthInformationWidget.routeName,
          path: PcHealthInformationWidget.routePath,
          builder: (context, params) => PcHealthInformationWidget(),
        ),
        FFRoute(
          name: PcCalendarWidget.routeName,
          path: PcCalendarWidget.routePath,
          builder: (context, params) => PcCalendarWidget(),
        ),
        FFRoute(
          name: PcCalendarINFOWidget.routeName,
          path: PcCalendarINFOWidget.routePath,
          builder: (context, params) => PcCalendarINFOWidget(),
        ),
        FFRoute(
          name: TodotaskWidget.routeName,
          path: TodotaskWidget.routePath,
          builder: (context, params) => TodotaskWidget(),
        ),
        FFRoute(
          name: Todotask2Widget.routeName,
          path: Todotask2Widget.routePath,
          builder: (context, params) => Todotask2Widget(),
        ),
        FFRoute(
          name: MarcketPlaceHomeWidget.routeName,
          path: MarcketPlaceHomeWidget.routePath,
          builder: (context, params) => MarcketPlaceHomeWidget(),
        ),
        FFRoute(
          name: MarketPlaceCaregiverDetailsWidget.routeName,
          path: MarketPlaceCaregiverDetailsWidget.routePath,
          builder: (context, params) => MarketPlaceCaregiverDetailsWidget(),
        ),
        FFRoute(
          name: MessageScreenCaregiverWidget.routeName,
          path: MessageScreenCaregiverWidget.routePath,
          builder: (context, params) => MessageScreenCaregiverWidget(),
        ),
        FFRoute(
          name: MarketPlaceAgencyDetailsWidget.routeName,
          path: MarketPlaceAgencyDetailsWidget.routePath,
          builder: (context, params) => MarketPlaceAgencyDetailsWidget(),
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
