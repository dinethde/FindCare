import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_rightside/app_bar_rightside_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import '/household/nav_bar_house/nav_bar_house_widget.dart';
import '/index.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'agency_details_model.dart';
export 'agency_details_model.dart';

class AgencyDetailsWidget extends StatefulWidget {
  const AgencyDetailsWidget({super.key});

  static String routeName = 'AgencyDetails';
  static String routePath = '/agencyDetails';

  @override
  State<AgencyDetailsWidget> createState() => _AgencyDetailsWidgetState();
}

class _AgencyDetailsWidgetState extends State<AgencyDetailsWidget> {
  late AgencyDetailsModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => AgencyDetailsModel());
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
                            'Find care',
                            style: FlutterFlowTheme.of(context)
                                .displayMedium
                                .override(
                                  fontFamily: 'Inter',
                                  letterSpacing: 0.0,
                                ),
                          ),
                        ].divide(SizedBox(height: 10.0)),
                      ),
                      Column(
                        mainAxisSize: MainAxisSize.max,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Notes',
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
                              context.pushNamed(MessageScreenWidget.routeName);
                            },
                            child: wrapWithModel(
                              model: _model.iconButtonModel1,
                              updateCallback: () => safeSetState(() {}),
                              child: IconButtonWidget(
                                icon1: Icon(
                                  FFIcons.kcgInformationpgMessage,
                                  color:
                                      FlutterFlowTheme.of(context).primaryText,
                                  size: 16.0,
                                ),
                                lable: 'Message',
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
                                  .pushNamed(AgencyGeneralInfoWidget.routeName);
                            },
                            child: wrapWithModel(
                              model: _model.iconButtonModel2,
                              updateCallback: () => safeSetState(() {}),
                              child: IconButtonWidget(
                                icon1: Icon(
                                  FFIcons.kpInfo,
                                  color: Color(0xFFFF2D55),
                                  size: 16.0,
                                ),
                                lable: 'General Info',
                              ),
                            ),
                          ),
                          InkWell(
                            splashColor: Colors.transparent,
                            focusColor: Colors.transparent,
                            hoverColor: Colors.transparent,
                            highlightColor: Colors.transparent,
                            onTap: () async {
                              context.pushNamed(AgencyRatingsWidget.routeName);
                            },
                            child: wrapWithModel(
                              model: _model.iconButtonModel3,
                              updateCallback: () => safeSetState(() {}),
                              child: IconButtonWidget(
                                icon1: Icon(
                                  Icons.star_outlined,
                                  color: Color(0xFFF8A038),
                                  size: 18.0,
                                ),
                                lable: 'Ratings',
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
