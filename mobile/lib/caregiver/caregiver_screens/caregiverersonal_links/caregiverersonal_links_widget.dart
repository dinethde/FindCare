import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/icon_button/icon_button_widget.dart';
import '/index.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'caregiverersonal_links_model.dart';
export 'caregiverersonal_links_model.dart';

class CaregiverersonalLinksWidget extends StatefulWidget {
  const CaregiverersonalLinksWidget({super.key});

  static String routeName = 'CaregiverersonalLinks';
  static String routePath = '/caregiverersonalLinks';

  @override
  State<CaregiverersonalLinksWidget> createState() =>
      _CaregiverersonalLinksWidgetState();
}

class _CaregiverersonalLinksWidgetState
    extends State<CaregiverersonalLinksWidget> {
  late CaregiverersonalLinksModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CaregiverersonalLinksModel());
  }

  @override
  void dispose() {
    _model.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        FocusScope.of(context).unfocus();
        FocusManager.instance.primaryFocus?.unfocus();
      },
      child: Scaffold(
        key: scaffoldKey,
        backgroundColor: FlutterFlowTheme.of(context).primaryBackground,
        body: SafeArea(
          top: true,
          child: Padding(
            padding: EdgeInsetsDirectional.fromSTEB(0.0, 25.0, 0.0, 0.0),
            child: Stack(
              children: [
                Column(
                  mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Container(
                      decoration: BoxDecoration(
                        color: FlutterFlowTheme.of(context).secondaryBackground,
                      ),
                      child: Padding(
                        padding: EdgeInsetsDirectional.fromSTEB(
                            20.0, 5.0, 20.0, 5.0),
                        child: Column(
                          mainAxisSize: MainAxisSize.max,
                          children: [
                            Row(
                              mainAxisSize: MainAxisSize.max,
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  'Caregiver',
                                  style: FlutterFlowTheme.of(context)
                                      .displayMedium
                                      .override(
                                        fontFamily: FlutterFlowTheme.of(context)
                                            .displayMediumFamily,
                                        letterSpacing: 0.0,
                                        useGoogleFonts: GoogleFonts.asMap()
                                            .containsKey(
                                                FlutterFlowTheme.of(context)
                                                    .displayMediumFamily),
                                      ),
                                ),
                                Container(
                                  width: 40.0,
                                  height: 40.0,
                                  clipBehavior: Clip.antiAlias,
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                  ),
                                  child: Image.network(
                                    'https://picsum.photos/seed/385/600',
                                    fit: BoxFit.cover,
                                  ),
                                ),
                              ],
                            ),
                            Column(
                              mainAxisSize: MainAxisSize.max,
                              children: [
                                InkWell(
                                  splashColor: Colors.transparent,
                                  focusColor: Colors.transparent,
                                  hoverColor: Colors.transparent,
                                  highlightColor: Colors.transparent,
                                  onTap: () async {
                                    context.pushNamed(
                                        CGQuicklinksWidget.routeName);
                                  },
                                  child: wrapWithModel(
                                    model: _model.iconButtonModel1,
                                    updateCallback: () => safeSetState(() {}),
                                    child: IconButtonWidget(
                                      icon1: Icon(
                                        FFIcons.kpInfo,
                                        color:
                                            FlutterFlowTheme.of(context).error,
                                        size: 19.0,
                                      ),
                                      lable: 'Personal information',
                                    ),
                                  ),
                                ),
                                InkWell(
                                  splashColor: Colors.transparent,
                                  focusColor: Colors.transparent,
                                  hoverColor: Colors.transparent,
                                  highlightColor: Colors.transparent,
                                  onTap: () async {
                                    context.pushNamed(
                                        CaregiverfunctionsWidget.routeName);
                                  },
                                  child: wrapWithModel(
                                    model: _model.iconButtonModel2,
                                    updateCallback: () => safeSetState(() {}),
                                    child: IconButtonWidget(
                                      icon1: Icon(
                                        FFIcons.kcogAlt,
                                        color: FlutterFlowTheme.of(context)
                                            .secondary,
                                        size: 19.0,
                                      ),
                                      lable: 'Functions',
                                    ),
                                  ),
                                ),
                                InkWell(
                                  splashColor: Colors.transparent,
                                  focusColor: Colors.transparent,
                                  hoverColor: Colors.transparent,
                                  highlightColor: Colors.transparent,
                                  onTap: () async {
                                    context
                                        .pushNamed(CgReportsWidget.routeName);
                                  },
                                  child: wrapWithModel(
                                    model: _model.iconButtonModel3,
                                    updateCallback: () => safeSetState(() {}),
                                    child: IconButtonWidget(
                                      icon1: Icon(
                                        FFIcons.kdocText,
                                        color: FlutterFlowTheme.of(context)
                                            .primaryText,
                                        size: 19.0,
                                      ),
                                      lable: 'Reports',
                                    ),
                                  ),
                                ),
                              ],
                            ),
                            Column(
                              mainAxisSize: MainAxisSize.max,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Agency',
                                  style: FlutterFlowTheme.of(context)
                                      .displaySmall
                                      .override(
                                        fontFamily: FlutterFlowTheme.of(context)
                                            .displaySmallFamily,
                                        letterSpacing: 0.0,
                                        useGoogleFonts: GoogleFonts.asMap()
                                            .containsKey(
                                                FlutterFlowTheme.of(context)
                                                    .displaySmallFamily),
                                      ),
                                ),
                                InkWell(
                                  splashColor: Colors.transparent,
                                  focusColor: Colors.transparent,
                                  hoverColor: Colors.transparent,
                                  highlightColor: Colors.transparent,
                                  onTap: () async {
                                    context.pushNamed(
                                        CgAgencyDetailsWidget.routeName);
                                  },
                                  child: wrapWithModel(
                                    model: _model.iconButtonModel4,
                                    updateCallback: () => safeSetState(() {}),
                                    child: IconButtonWidget(
                                      icon1: Icon(
                                        FFIcons.kpInfo,
                                        color:
                                            FlutterFlowTheme.of(context).error,
                                        size: 19.0,
                                      ),
                                      lable: 'Caregiver agency’s information',
                                    ),
                                  ),
                                ),
                              ].divide(SizedBox(height: 12.0)),
                            ),
                          ].divide(SizedBox(height: 50.0)),
                        ),
                      ),
                    ),
                  ].divide(SizedBox(height: 32.0)),
                ),
                wrapWithModel(
                  model: _model.navBarModel,
                  updateCallback: () => safeSetState(() {}),
                  child: NavBarWidget(
                    page: 2,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
