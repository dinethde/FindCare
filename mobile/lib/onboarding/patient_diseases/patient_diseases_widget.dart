import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import '/onboarding/button_half/button_half_widget.dart';
import '/onboarding/dropdown/dropdown_widget.dart';
import 'package:flutter/material.dart';
import 'patient_diseases_model.dart';
export 'patient_diseases_model.dart';

class PatientDiseasesWidget extends StatefulWidget {
  const PatientDiseasesWidget({super.key});

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
            padding: const EdgeInsetsDirectional.fromSTEB(32.0, 0.0, 32.0, 0.0),
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
                  ].divide(const SizedBox(height: 12.0)),
                ),
                Column(
                  mainAxisSize: MainAxisSize.max,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Step 3/5',
                      style: FlutterFlowTheme.of(context).bodyMedium.override(
                            fontFamily: 'Inter',
                            color: const Color(0xFFFF3355),
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
                          child: const DropdownWidget(
                            lableName: 'Infectious diseases',
                          ),
                        ),
                        wrapWithModel(
                          model: _model.dropdownModel2,
                          updateCallback: () => safeSetState(() {}),
                          child: const DropdownWidget(
                            lableName: 'Deficiency diseases',
                          ),
                        ),
                        wrapWithModel(
                          model: _model.dropdownModel3,
                          updateCallback: () => safeSetState(() {}),
                          child: const DropdownWidget(
                            lableName: 'Hereditary diseases',
                          ),
                        ),
                        wrapWithModel(
                          model: _model.dropdownModel4,
                          updateCallback: () => safeSetState(() {}),
                          child: const DropdownWidget(
                            lableName: 'Physiological diseases',
                          ),
                        ),
                      ].divide(const SizedBox(height: 14.0)),
                    ),
                    Row(
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        wrapWithModel(
                          model: _model.buttonHalfModel,
                          updateCallback: () => safeSetState(() {}),
                          child: const ButtonHalfWidget(
                            btnText: '+ Add notes',
                            btnColor: Color(0xFFFF3355),
                          ),
                        ),
                        Flexible(
                          child: Padding(
                            padding: const EdgeInsetsDirectional.fromSTEB(
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
                      ].divide(const SizedBox(width: 12.0)),
                    ),
                  ].divide(const SizedBox(height: 20.0)),
                ),
                wrapWithModel(
                  model: _model.buttonModel,
                  updateCallback: () => safeSetState(() {}),
                  child: ButtonWidget(
                    btnText: 'Continue',
                    btnColor: FlutterFlowTheme.of(context).primary,
                  ),
                ),
              ].divide(const SizedBox(height: 10.0)),
            ),
          ),
        ),
      ),
    );
  }
}
