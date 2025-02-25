import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_rightside/app_bar_rightside_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import '/index.dart';
import 'package:flutter/material.dart';
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
                    Padding(
                      padding:
                          EdgeInsetsDirectional.fromSTEB(25.0, 0.0, 25.0, 0.0),
                      child: wrapWithModel(
                        model: _model.appBarRightsideModel,
                        updateCallback: () => safeSetState(() {}),
                        child: AppBarRightsideWidget(
                          secLable: 'Done',
                        ),
                      ),
                    ),
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
                                        fontFamily: 'Inter',
                                        letterSpacing: 0.0,
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
                                        Icons.calendar_month,
                                        size: 16.0,
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
                                        Icons.add_circle_sharp,
                                        color: Color(0xFFFCA827),
                                        size: 16.0,
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
                                        Icons.info,
                                        color: Color(0xFFCC2444),
                                        size: 16.0,
                                      ),
                                      lable: 'Reports',
                                    ),
                                  ),
                                ),
                              ].divide(SizedBox(height: 12.0)),
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
                                        fontFamily: 'Inter',
                                        letterSpacing: 0.0,
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
                                        Icons.document_scanner,
                                        color: Color(0xFF456BB4),
                                        size: 16.0,
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
