import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import '/index.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'c_g_quicklinks_model.dart';
export 'c_g_quicklinks_model.dart';

class CGQuicklinksWidget extends StatefulWidget {
  const CGQuicklinksWidget({super.key});

  static String routeName = 'CGQuicklinks';
  static String routePath = '/cGQuicklinks';

  @override
  State<CGQuicklinksWidget> createState() => _CGQuicklinksWidgetState();
}

class _CGQuicklinksWidgetState extends State<CGQuicklinksWidget> {
  late CGQuicklinksModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CGQuicklinksModel());
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
                Padding(
                  padding: EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
                  child: Column(
                    mainAxisSize: MainAxisSize.max,
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      wrapWithModel(
                        model: _model.appBarLeftsideModel,
                        updateCallback: () => safeSetState(() {}),
                        child: AppBarLeftsideWidget(
                          fLable: 'Quick links',
                        ),
                      ),
                      Column(
                        mainAxisSize: MainAxisSize.max,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
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
                          Text(
                            'Dineth De Silva',
                            style: FlutterFlowTheme.of(context)
                                .displayMedium
                                .override(
                                  fontFamily: FlutterFlowTheme.of(context)
                                      .displayMediumFamily,
                                  letterSpacing: 0.0,
                                  useGoogleFonts: GoogleFonts.asMap()
                                      .containsKey(FlutterFlowTheme.of(context)
                                          .displayMediumFamily),
                                ),
                          ),
                        ].divide(SizedBox(height: 10.0)),
                      ),
                      InkWell(
                        splashColor: Colors.transparent,
                        focusColor: Colors.transparent,
                        hoverColor: Colors.transparent,
                        highlightColor: Colors.transparent,
                        onTap: () async {
                          context.pushNamed(PersonalInfoWidget.routeName);
                        },
                        child: wrapWithModel(
                          model: _model.iconButtonModel1,
                          updateCallback: () => safeSetState(() {}),
                          child: IconButtonWidget(
                            icon1: Icon(
                              FFIcons.kpInfo,
                              size: 16.0,
                            ),
                            lable: '19 years old, 185cm, 60.0kg ...',
                          ),
                        ),
                      ),
                      Column(
                        mainAxisSize: MainAxisSize.max,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Experience',
                            style: FlutterFlowTheme.of(context)
                                .displaySmall
                                .override(
                                  fontFamily: FlutterFlowTheme.of(context)
                                      .displaySmallFamily,
                                  letterSpacing: 0.0,
                                  useGoogleFonts: GoogleFonts.asMap()
                                      .containsKey(FlutterFlowTheme.of(context)
                                          .displaySmallFamily),
                                ),
                          ),
                          InkWell(
                            splashColor: Colors.transparent,
                            focusColor: Colors.transparent,
                            hoverColor: Colors.transparent,
                            highlightColor: Colors.transparent,
                            onTap: () async {
                              context.pushNamed(CgAcademicInfoWidget.routeName);
                            },
                            child: wrapWithModel(
                              model: _model.iconButtonModel2,
                              updateCallback: () => safeSetState(() {}),
                              child: IconButtonWidget(
                                icon1: Icon(
                                  FFIcons.kbookReader,
                                  color: Color(0xFFFF2D55),
                                  size: 18.0,
                                ),
                                lable: 'Educational Knowledge',
                              ),
                            ),
                          ),
                          InkWell(
                            splashColor: Colors.transparent,
                            focusColor: Colors.transparent,
                            hoverColor: Colors.transparent,
                            highlightColor: Colors.transparent,
                            onTap: () async {
                              context.pushNamed(CgExperienceWidget.routeName);
                            },
                            child: wrapWithModel(
                              model: _model.iconButtonModel3,
                              updateCallback: () => safeSetState(() {}),
                              child: IconButtonWidget(
                                icon1: FaIcon(
                                  FontAwesomeIcons.briefcase,
                                  color:
                                      FlutterFlowTheme.of(context).primaryText,
                                  size: 16.0,
                                ),
                                lable: 'Professional Skills',
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
                                  .pushNamed(CgSpecializedinWidget.routeName);
                            },
                            child: wrapWithModel(
                              model: _model.iconButtonModel4,
                              updateCallback: () => safeSetState(() {}),
                              child: IconButtonWidget(
                                icon1: Icon(
                                  FFIcons.kstars,
                                  color: Color(0xFFEFC347),
                                  size: 19.0,
                                ),
                                lable: 'Specialized in',
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
                            'Availability',
                            style: FlutterFlowTheme.of(context)
                                .displaySmall
                                .override(
                                  fontFamily: FlutterFlowTheme.of(context)
                                      .displaySmallFamily,
                                  letterSpacing: 0.0,
                                  useGoogleFonts: GoogleFonts.asMap()
                                      .containsKey(FlutterFlowTheme.of(context)
                                          .displaySmallFamily),
                                ),
                          ),
                          InkWell(
                            splashColor: Colors.transparent,
                            focusColor: Colors.transparent,
                            hoverColor: Colors.transparent,
                            highlightColor: Colors.transparent,
                            onTap: () async {
                              context.pushNamed(CgAvailabilityWidget.routeName);
                            },
                            child: wrapWithModel(
                              model: _model.iconButtonModel5,
                              updateCallback: () => safeSetState(() {}),
                              child: IconButtonWidget(
                                icon1: Icon(
                                  FFIcons.kcgViewAvailabilityTime,
                                  color: FlutterFlowTheme.of(context).error,
                                  size: 16.0,
                                ),
                                lable: 'View availability times ',
                              ),
                            ),
                          ),
                        ].divide(SizedBox(height: 12.0)),
                      ),
                    ].addToEnd(SizedBox(height: 30.0)),
                  ),
                ),
                Align(
                  alignment: AlignmentDirectional(0.0, 1.0),
                  child: wrapWithModel(
                    model: _model.navBarModel,
                    updateCallback: () => safeSetState(() {}),
                    child: NavBarWidget(
                      page: 2,
                    ),
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
