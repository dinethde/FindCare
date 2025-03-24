import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/content_textbox/content_textbox_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import 'package:flutter/material.dart';
import 'caregiver_requirements_model.dart';
export 'caregiver_requirements_model.dart';

class CaregiverRequirementsWidget extends StatefulWidget {
  const CaregiverRequirementsWidget({super.key});

  static String routeName = 'CaregiverRequirements';
  static String routePath = '/caregiverRequirements';

  @override
  State<CaregiverRequirementsWidget> createState() =>
      _CaregiverRequirementsWidgetState();
}

class _CaregiverRequirementsWidgetState
    extends State<CaregiverRequirementsWidget> {
  late CaregiverRequirementsModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CaregiverRequirementsModel());
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
          child: Column(
            mainAxisSize: MainAxisSize.max,
            children: [
              Padding(
                padding: EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
                child: wrapWithModel(
                  model: _model.appBarLeftsideModel,
                  updateCallback: () => safeSetState(() {}),
                  child: AppBarLeftsideWidget(
                    fLable: 'Profile',
                  ),
                ),
              ),
              Padding(
                padding: EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
                child: Column(
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    Column(
                      mainAxisSize: MainAxisSize.max,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Health Information',
                          style: FlutterFlowTheme.of(context)
                              .displayMedium
                              .override(
                                fontFamily: 'Inter',
                                letterSpacing: 0.0,
                              ),
                        ),
                        Text(
                          'Provide the patient’s health details to ensure personalized care and appropriate caregiver assignment.',
                          style:
                              FlutterFlowTheme.of(context).bodyMedium.override(
                                    fontFamily: 'Inter',
                                    fontSize: 16.0,
                                    letterSpacing: 0.0,
                                  ),
                        ),
                      ]
                          .divide(SizedBox(height: 12.0))
                          .addToStart(SizedBox(height: 14.0)),
                    ),
                    Column(
                      mainAxisSize: MainAxisSize.max,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Infectious Diseases',
                          style: FlutterFlowTheme.of(context)
                              .displaySmall
                              .override(
                                fontFamily: 'Inter',
                                letterSpacing: 0.0,
                              ),
                        ),
                        wrapWithModel(
                          model: _model.contentTextboxModel1,
                          updateCallback: () => safeSetState(() {}),
                          child: ContentTextboxWidget(
                            textField: 'HIV/AIDS',
                            readOnly: true,
                          ),
                        ),
                      ].divide(SizedBox(height: 12.0)),
                    ),
                    Column(
                      mainAxisSize: MainAxisSize.max,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Deficiency Diseases',
                          style: FlutterFlowTheme.of(context)
                              .displaySmall
                              .override(
                                fontFamily: 'Inter',
                                letterSpacing: 0.0,
                              ),
                        ),
                        wrapWithModel(
                          model: _model.iconButtonModel,
                          updateCallback: () => safeSetState(() {}),
                          child: IconButtonWidget(
                            icon1: Icon(
                              Icons.no_backpack_outlined,
                              color: FlutterFlowTheme.of(context).error,
                              size: 24.0,
                            ),
                            lable: 'Patient doesn\'t have any disease ',
                          ),
                        ),
                      ].divide(SizedBox(height: 12.0)),
                    ),
                    Column(
                      mainAxisSize: MainAxisSize.max,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Hereditary Diseases',
                          style: FlutterFlowTheme.of(context)
                              .displaySmall
                              .override(
                                fontFamily: 'Inter',
                                letterSpacing: 0.0,
                              ),
                        ),
                        wrapWithModel(
                          model: _model.contentTextboxModel2,
                          updateCallback: () => safeSetState(() {}),
                          child: ContentTextboxWidget(
                            textField: 'Down Syndrome',
                            readOnly: true,
                          ),
                        ),
                      ].divide(SizedBox(height: 12.0)),
                    ),
                    Column(
                      mainAxisSize: MainAxisSize.max,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Physiological Diseases',
                          style: FlutterFlowTheme.of(context)
                              .displaySmall
                              .override(
                                fontFamily: 'Inter',
                                letterSpacing: 0.0,
                              ),
                        ),
                        wrapWithModel(
                          model: _model.contentTextboxModel3,
                          updateCallback: () => safeSetState(() {}),
                          child: ContentTextboxWidget(
                            textField: 'Asthma',
                            readOnly: true,
                          ),
                        ),
                      ].divide(SizedBox(height: 12.0)),
                    ),
                  ].divide(SizedBox(height: 48.0)),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
