import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import '/onboarding/button_half/button_half_widget.dart';
import '/onboarding/selection_button/selection_button_widget.dart';
import 'package:flutter/material.dart';
import 'primary_care_options_model.dart';
export 'primary_care_options_model.dart';

class PrimaryCareOptionsWidget extends StatefulWidget {
  const PrimaryCareOptionsWidget({super.key});

  @override
  State<PrimaryCareOptionsWidget> createState() =>
      _PrimaryCareOptionsWidgetState();
}

class _PrimaryCareOptionsWidgetState extends State<PrimaryCareOptionsWidget> {
  late PrimaryCareOptionsModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => PrimaryCareOptionsModel());
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
                      'What is the primary care?',
                      style: FlutterFlowTheme.of(context).displaySmall.override(
                            fontFamily: 'Inter',
                            letterSpacing: 0.0,
                            fontWeight: FontWeight.bold,
                          ),
                    ),
                    Text(
                      'Choose the care that matters most tailored to their unique needs.',
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
                      'Step 2/5',
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
                          model: _model.selectionButtonModel1,
                          updateCallback: () => safeSetState(() {}),
                          child: SelectionButtonWidget(
                            btnText: 'Personal Care',
                            btnColor: FlutterFlowTheme.of(context)
                                .secondaryBackground,
                          ),
                        ),
                        wrapWithModel(
                          model: _model.selectionButtonModel2,
                          updateCallback: () => safeSetState(() {}),
                          child: SelectionButtonWidget(
                            btnText: 'Household Tasks',
                            btnColor: FlutterFlowTheme.of(context)
                                .secondaryBackground,
                          ),
                        ),
                        wrapWithModel(
                          model: _model.selectionButtonModel3,
                          updateCallback: () => safeSetState(() {}),
                          child: SelectionButtonWidget(
                            btnText: 'Mobility Assistance ',
                            btnColor: FlutterFlowTheme.of(context)
                                .secondaryBackground,
                          ),
                        ),
                        wrapWithModel(
                          model: _model.selectionButtonModel4,
                          updateCallback: () => safeSetState(() {}),
                          child: SelectionButtonWidget(
                            btnText: 'Transportation Assistance',
                            btnColor: FlutterFlowTheme.of(context)
                                .secondaryBackground,
                          ),
                        ),
                        wrapWithModel(
                          model: _model.selectionButtonModel5,
                          updateCallback: () => safeSetState(() {}),
                          child: SelectionButtonWidget(
                            btnText: 'Memory Care',
                            btnColor: FlutterFlowTheme.of(context)
                                .secondaryBackground,
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
