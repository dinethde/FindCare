import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import '/onboarding/text_box/text_box_widget.dart';
import '/index.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'patient_details_model.dart';
export 'patient_details_model.dart';

class PatientDetailsWidget extends StatefulWidget {
  const PatientDetailsWidget({super.key});

  static String routeName = 'PatientDetails';
  static String routePath = '/patientDetails';

  @override
  State<PatientDetailsWidget> createState() => _PatientDetailsWidgetState();
}

class _PatientDetailsWidgetState extends State<PatientDetailsWidget> {
  late PatientDetailsModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => PatientDetailsModel());
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
            child: SingleChildScrollView(
              child: Column(
                mainAxisSize: MainAxisSize.max,
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Padding(
                    padding:
                        EdgeInsetsDirectional.fromSTEB(32.0, 0.0, 32.0, 0.0),
                    child: Column(
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        Column(
                          mainAxisSize: MainAxisSize.max,
                          children: [
                            Text(
                              'Initial patient details',
                              style: FlutterFlowTheme.of(context)
                                  .displaySmall
                                  .override(
                                    fontFamily: 'Inter',
                                    letterSpacing: 0.0,
                                    fontWeight: FontWeight.bold,
                                  ),
                            ),
                            Text(
                              'Lorem ipsum dolor sit amet consectetur. Dictum pulvinar dolor',
                              textAlign: TextAlign.center,
                              style: FlutterFlowTheme.of(context)
                                  .bodyMedium
                                  .override(
                                    fontFamily: 'Inter',
                                    letterSpacing: 0.0,
                                    fontWeight: FontWeight.w500,
                                  ),
                            ),
                          ].divide(SizedBox(height: 12.0)),
                        ),
                        Column(
                          mainAxisSize: MainAxisSize.max,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'Step 1/5',
                              style: FlutterFlowTheme.of(context)
                                  .bodyMedium
                                  .override(
                                    fontFamily: 'Inter',
                                    color: Color(0xFFFF3355),
                                    fontSize: 18.0,
                                    letterSpacing: 0.0,
                                    fontWeight: FontWeight.w500,
                                  ),
                            ),
                            Form(
                              key: _model.formKey,
                              autovalidateMode: AutovalidateMode.disabled,
                              child: Column(
                                mainAxisSize: MainAxisSize.max,
                                children: [
                                  wrapWithModel(
                                    model: _model.textBoxModel1,
                                    updateCallback: () => safeSetState(() {}),
                                    child: TextBoxWidget(
                                      textField: 'Name with initials',
                                    ),
                                  ),
                                  wrapWithModel(
                                    model: _model.textBoxModel2,
                                    updateCallback: () => safeSetState(() {}),
                                    child: TextBoxWidget(
                                      textField: 'Date Of Birth',
                                    ),
                                  ),
                                  wrapWithModel(
                                    model: _model.textBoxModel3,
                                    updateCallback: () => safeSetState(() {}),
                                    child: TextBoxWidget(
                                      textField: 'Sex',
                                    ),
                                  ),
                                  wrapWithModel(
                                    model: _model.textBoxModel4,
                                    updateCallback: () => safeSetState(() {}),
                                    child: TextBoxWidget(
                                      textField: 'Weight',
                                    ),
                                  ),
                                  wrapWithModel(
                                    model: _model.textBoxModel5,
                                    updateCallback: () => safeSetState(() {}),
                                    child: TextBoxWidget(
                                      textField: 'Height',
                                    ),
                                  ),
                                ].divide(SizedBox(height: 14.0)),
                              ),
                            ),
                          ].divide(SizedBox(height: 20.0)),
                        ),
                      ].divide(SizedBox(height: 40.0)),
                    ),
                  ),
                  Padding(
                    padding:
                        EdgeInsetsDirectional.fromSTEB(32.0, 0.0, 32.0, 0.0),
                    child: FFButtonWidget(
                      onPressed: () async {
                        context.pushNamed(PrimaryCareOptionsWidget.routeName);
                      },
                      text: '+ Add',
                      options: FFButtonOptions(
                        width: MediaQuery.sizeOf(context).width * 1.0,
                        height: 47.0,
                        padding:
                            EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
                        iconPadding:
                            EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
                        color: FlutterFlowTheme.of(context).primary,
                        textStyle: GoogleFonts.getFont(
                          'Inter Tight',
                          color: Colors.white,
                          fontWeight: FontWeight.w600,
                          fontSize: 16.0,
                        ),
                        borderRadius: BorderRadius.circular(6.0),
                      ),
                      showLoadingIndicator: false,
                    ),
                  ),
                ]
                    .divide(SizedBox(height: 170.0))
                    .addToEnd(SizedBox(height: 90.0)),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
