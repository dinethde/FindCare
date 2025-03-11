import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import '/onboarding/button_half/button_half_widget.dart';
import '/onboarding/dropdown/dropdown_widget.dart';
import '/index.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'patient_diseases_model.dart';
export 'patient_diseases_model.dart';

class PatientDiseasesWidget extends StatefulWidget {
  const PatientDiseasesWidget({super.key});

  static String routeName = 'PatientDiseases';
  static String routePath = '/patientDiseases';

  @override
  State<PatientDiseasesWidget> createState() => _PatientDiseasesWidgetState();
}

class _PatientDiseasesWidgetState extends State<PatientDiseasesWidget> {
  late PatientDiseasesModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => PatientDiseasesModel());
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
            padding: EdgeInsetsDirectional.fromSTEB(32.0, 0.0, 32.0, 0.0),
            child: Column(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Column(
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    Text(
                      'Patient Diseases',
                      style: FlutterFlowTheme.of(context).displaySmall.override(
                            fontFamily: 'Inter',
                            letterSpacing: 0.0,
                            fontWeight: FontWeight.bold,
                          ),
                    ),
                    Text(
                      'Lorem ipsum dolor sit amet consectetur. Dictum pulvinar dolor',
                      textAlign: TextAlign.center,
                      style: FlutterFlowTheme.of(context).bodyMedium.override(
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
                      'Step 3/5',
                      style: FlutterFlowTheme.of(context).bodyMedium.override(
                            fontFamily: 'Inter',
                            color: Color(0xFFFF3355),
                            fontSize: 18.0,
                            letterSpacing: 0.0,
                            fontWeight: FontWeight.w500,
                          ),
                    ),
                    Column(
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        wrapWithModel(
                          model: _model.dropdownModel1,
                          updateCallback: () => safeSetState(() {}),
                          child: DropdownWidget(
                            lableName: 'Infectious diseases',
                          ),
                        ),
                        wrapWithModel(
                          model: _model.dropdownModel2,
                          updateCallback: () => safeSetState(() {}),
                          child: DropdownWidget(
                            lableName: 'Deficiency diseases',
                          ),
                        ),
                        wrapWithModel(
                          model: _model.dropdownModel3,
                          updateCallback: () => safeSetState(() {}),
                          child: DropdownWidget(
                            lableName: 'Hereditary diseases',
                          ),
                        ),
                        wrapWithModel(
                          model: _model.dropdownModel4,
                          updateCallback: () => safeSetState(() {}),
                          child: DropdownWidget(
                            lableName: 'Physiological diseases',
                          ),
                        ),
                      ].divide(SizedBox(height: 14.0)),
                    ),
                    Row(
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        wrapWithModel(
                          model: _model.buttonHalfModel,
                          updateCallback: () => safeSetState(() {}),
                          child: ButtonHalfWidget(
                            btnText: '+ Add notes',
                            btnColor: Color(0xFFFF3355),
                          ),
                        ),
                        Flexible(
                          child: Padding(
                            padding: EdgeInsetsDirectional.fromSTEB(
                                0.0, 0.0, 38.0, 0.0),
                            child: Text(
                              'Add special notes about the care patient needs',
                              style: FlutterFlowTheme.of(context)
                                  .bodyMedium
                                  .override(
                                    fontFamily: 'Inter',
                                    letterSpacing: 0.0,
                                  ),
                            ),
                          ),
                        ),
                      ].divide(SizedBox(width: 12.0)),
                    ),
                  ].divide(SizedBox(height: 20.0)),
                ),
                FFButtonWidget(
                  onPressed: () async {
                    context.pushNamed(PatientRequirementsWidget.routeName);
                  },
                  text: 'Continue',
                  options: FFButtonOptions(
                    width: MediaQuery.sizeOf(context).width * 1.0,
                    height: 47.0,
                    padding: EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
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
              ].divide(SizedBox(height: 10.0)),
            ),
          ),
        ),
      ),
    );
  }
}
