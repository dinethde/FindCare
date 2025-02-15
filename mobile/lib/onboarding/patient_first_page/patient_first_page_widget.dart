import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import '/onboarding/invisible_buttonashe/invisible_buttonashe_widget.dart';
import 'package:flutter/material.dart';
import 'patient_first_page_model.dart';
export 'patient_first_page_model.dart';

class PatientFirstPageWidget extends StatefulWidget {
  const PatientFirstPageWidget({super.key});

  @override
  State<PatientFirstPageWidget> createState() => _PatientFirstPageWidgetState();
}

class _PatientFirstPageWidgetState extends State<PatientFirstPageWidget> {
  late PatientFirstPageModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => PatientFirstPageModel());
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
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Column(
                mainAxisSize: MainAxisSize.max,
                children: [
                  Text(
                    'Add your first patient',
                    style: FlutterFlowTheme.of(context).displaySmall.override(
                          fontFamily: 'Inter',
                          letterSpacing: 0.0,
                          fontWeight: FontWeight.bold,
                        ),
                  ),
                  Text(
                    'Select your role and start your journey',
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
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Padding(
                    padding:
                        const EdgeInsetsDirectional.fromSTEB(32.0, 0.0, 32.0, 0.0),
                    child: wrapWithModel(
                      model: _model.buttonModel,
                      updateCallback: () => safeSetState(() {}),
                      child: ButtonWidget(
                        btnText: '+ Add',
                        btnColor: FlutterFlowTheme.of(context).primary,
                      ),
                    ),
                  ),
                  Padding(
                    padding:
                        const EdgeInsetsDirectional.fromSTEB(30.0, 0.0, 0.0, 0.0),
                    child: wrapWithModel(
                      model: _model.invisibleButtonasheModel,
                      updateCallback: () => safeSetState(() {}),
                      child: const InvisibleButtonasheWidget(
                        lableName: 'skip for now',
                      ),
                    ),
                  ),
                ].divide(const SizedBox(height: 12.0)),
              ),
            ]
                .divide(const SizedBox(height: 40.0))
                .addToStart(const SizedBox(height: 120.0)),
          ),
        ),
      ),
    );
  }
}
