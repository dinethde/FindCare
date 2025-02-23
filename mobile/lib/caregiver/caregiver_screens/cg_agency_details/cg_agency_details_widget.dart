import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_rightside/app_bar_rightside_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import '/index.dart';
import 'package:flutter/material.dart';
import 'cg_agency_details_model.dart';
export 'cg_agency_details_model.dart';

class CgAgencyDetailsWidget extends StatefulWidget {
  const CgAgencyDetailsWidget({super.key});

  static String routeName = 'cgAgencyDetails';
  static String routePath = '/cgAgencyDetails';

  @override
  State<CgAgencyDetailsWidget> createState() => _CgAgencyDetailsWidgetState();
}

class _CgAgencyDetailsWidgetState extends State<CgAgencyDetailsWidget> {
  late CgAgencyDetailsModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CgAgencyDetailsModel());
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
                      style:
                          FlutterFlowTheme.of(context).displayMedium.override(
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
                      style: FlutterFlowTheme.of(context).displaySmall.override(
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
                        context
                            .pushNamed(MessageScreenCaregiverWidget.routeName);
                      },
                      child: wrapWithModel(
                        model: _model.iconButtonModel1,
                        updateCallback: () => safeSetState(() {}),
                        child: IconButtonWidget(
                          icon1: Icon(
                            Icons.grain,
                            color: Color(0xFFFF2D55),
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
                        context.pushNamed(CgGeneralInfoWidget.routeName);
                      },
                      child: wrapWithModel(
                        model: _model.iconButtonModel2,
                        updateCallback: () => safeSetState(() {}),
                        child: IconButtonWidget(
                          icon1: Icon(
                            Icons.document_scanner_rounded,
                            color: Color(0xFF046ACC),
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
                        context.pushNamed(CgAgencyRatingsWidget.routeName);
                      },
                      child: wrapWithModel(
                        model: _model.iconButtonModel3,
                        updateCallback: () => safeSetState(() {}),
                        child: IconButtonWidget(
                          icon1: Icon(
                            Icons.medical_information_sharp,
                            color: Color(0xFFC27E2D),
                            size: 16.0,
                          ),
                          lable: 'Ratings',
                        ),
                      ),
                    ),
                  ].divide(SizedBox(height: 12.0)),
                ),
              ].divide(SizedBox(height: 48.0)),
            ),
          ),
        ),
      ),
    );
  }
}
