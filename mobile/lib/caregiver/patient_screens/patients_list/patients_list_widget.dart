import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_rightside/app_bar_rightside_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import '/index.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'patients_list_model.dart';
export 'patients_list_model.dart';

class PatientsListWidget extends StatefulWidget {
  const PatientsListWidget({super.key});

  static String routeName = 'PatientsList';
  static String routePath = '/patientsList';

  @override
  State<PatientsListWidget> createState() => _PatientsListWidgetState();
}

class _PatientsListWidgetState extends State<PatientsListWidget> {
  late PatientsListModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => PatientsListModel());
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
                                  'Patient - 1\nDineth De Silva',
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
                                        PsPatientInfoWidget.routeName);
                                  },
                                  child: wrapWithModel(
                                    model: _model.iconButtonModel1,
                                    updateCallback: () => safeSetState(() {}),
                                    child: IconButtonWidget(
                                      icon1: Icon(
                                        Icons.document_scanner,
                                        color: Color(0xFF456BB4),
                                        size: 16.0,
                                      ),
                                      lable: 'Patient 1 - Dineth Silva',
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
                                        PsPatientInfoWidget.routeName);
                                  },
                                  child: wrapWithModel(
                                    model: _model.iconButtonModel2,
                                    updateCallback: () => safeSetState(() {}),
                                    child: IconButtonWidget(
                                      icon1: Icon(
                                        Icons.document_scanner,
                                        color: Color(0xFF456BB4),
                                        size: 16.0,
                                      ),
                                      lable: 'Patient 1 - Dineth Silva',
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
                                        PsPatientInfoWidget.routeName);
                                  },
                                  child: wrapWithModel(
                                    model: _model.iconButtonModel3,
                                    updateCallback: () => safeSetState(() {}),
                                    child: IconButtonWidget(
                                      icon1: Icon(
                                        Icons.document_scanner,
                                        color: Color(0xFF456BB4),
                                        size: 16.0,
                                      ),
                                      lable: 'Patient 1 - Dineth Silva',
                                    ),
                                  ),
                                ),
                              ],
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
                    page: 1,
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
