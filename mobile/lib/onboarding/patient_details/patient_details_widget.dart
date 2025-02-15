import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import '/onboarding/text_box/text_box_widget.dart';
import 'package:flutter/material.dart';
import 'patient_details_model.dart';
export 'patient_details_model.dart';

class PatientDetailsWidget extends StatefulWidget {
  const PatientDetailsWidget({super.key});

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
            padding: const EdgeInsetsDirectional.fromSTEB(32.0, 0.0, 32.0, 0.0),
            child: Column(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Column(
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    Text(
                      'Initial patient details',
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
                      'Step 1/5',
                      style: FlutterFlowTheme.of(context).bodyMedium.override(
                            fontFamily: 'Inter',
                            color: const Color(0xFFFF3355),
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
                            child: const TextBoxWidget(
                              textField: 'Name with initials',
                            ),
                          ),
                          wrapWithModel(
                            model: _model.textBoxModel2,
                            updateCallback: () => safeSetState(() {}),
                            child: const TextBoxWidget(
                              textField: 'Date Of Birth',
                            ),
                          ),
                          wrapWithModel(
                            model: _model.textBoxModel3,
                            updateCallback: () => safeSetState(() {}),
                            child: const TextBoxWidget(
                              textField: 'Sex',
                            ),
                          ),
                          wrapWithModel(
                            model: _model.textBoxModel4,
                            updateCallback: () => safeSetState(() {}),
                            child: const TextBoxWidget(
                              textField: 'Weight',
                            ),
                          ),
                          wrapWithModel(
                            model: _model.textBoxModel5,
                            updateCallback: () => safeSetState(() {}),
                            child: const TextBoxWidget(
                              textField: 'Height',
                            ),
                          ),
                        ].divide(const SizedBox(height: 14.0)),
                      ),
                    ),
                  ].divide(const SizedBox(height: 20.0)),
                ),
                wrapWithModel(
                  model: _model.buttonModel,
                  updateCallback: () => safeSetState(() {}),
                  child: ButtonWidget(
                    btnText: '+ Add',
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
