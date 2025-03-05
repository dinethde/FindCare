import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_rightside/app_bar_rightside_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import '/household/nav_bar_house/nav_bar_house_widget.dart';
import '/index.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'caregiverinfo_model.dart';
export 'caregiverinfo_model.dart';

class CaregiverinfoWidget extends StatefulWidget {
  const CaregiverinfoWidget({super.key});

  static String routeName = 'Caregiverinfo';
  static String routePath = '/caregiverinfo';

  @override
  State<CaregiverinfoWidget> createState() => _CaregiverinfoWidgetState();
}

class _CaregiverinfoWidgetState extends State<CaregiverinfoWidget> {
  late CaregiverinfoModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CaregiverinfoModel());
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
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      wrapWithModel(
                        model: _model.appBarRightsideModel,
                        updateCallback: () => safeSetState(() {}),
                        child: AppBarRightsideWidget(
                          secLable: 'Done',
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
                                  fontFamily: 'Inter',
                                  letterSpacing: 0.0,
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
                          context.pushNamed(CaregiverPersonalWidget.routeName);
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
                            'Proficiency',
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
                              context.pushNamed(AcademicInfoWidget.routeName);
                            },
                            child: wrapWithModel(
                              model: _model.iconButtonModel2,
                              updateCallback: () => safeSetState(() {}),
                              child: IconButtonWidget(
                                icon1: Icon(
                                  FFIcons.kbookReader,
                                  color: Color(0xFFDDAA1B),
                                  size: 16.0,
                                ),
                                lable: 'Academic Skills',
                              ),
                            ),
                          ),
                          InkWell(
                            splashColor: Colors.transparent,
                            focusColor: Colors.transparent,
                            hoverColor: Colors.transparent,
                            highlightColor: Colors.transparent,
                            onTap: () async {
                              context.pushNamed(ExperiencePageWidget.routeName);
                            },
                            child: wrapWithModel(
                              model: _model.iconButtonModel3,
                              updateCallback: () => safeSetState(() {}),
                              child: IconButtonWidget(
                                icon1: Icon(
                                  FFIcons.kbriefcase,
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
                                  .pushNamed(SpecializedinPageWidget.routeName);
                            },
                            child: wrapWithModel(
                              model: _model.iconButtonModel4,
                              updateCallback: () => safeSetState(() {}),
                              child: IconButtonWidget(
                                icon1: Icon(
                                  FFIcons.kaward,
                                  color: FlutterFlowTheme.of(context).error,
                                  size: 22.0,
                                ),
                                lable: 'Specializations',
                              ),
                            ),
                          ),
                        ],
                      ),
                    ].divide(SizedBox(height: 48.0)),
                  ),
                ),
                wrapWithModel(
                  model: _model.navBarHouseModel,
                  updateCallback: () => safeSetState(() {}),
                  child: NavBarHouseWidget(
                    page: 3,
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
