import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import '/onboarding/button_half/button_half_widget.dart';
import '/onboarding/selection_button/selection_button_widget.dart';
import '/index.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'primary_care_options_model.dart';
export 'primary_care_options_model.dart';

class PrimaryCareOptionsWidget extends StatefulWidget {
  const PrimaryCareOptionsWidget({super.key});

  static String routeName = 'PrimaryCareOptions';
  static String routePath = '/primaryCareOptions';

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
            padding: EdgeInsetsDirectional.fromSTEB(32.0, 0.0, 32.0, 0.0),
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
                  ].divide(SizedBox(height: 12.0)),
                ),
                Column(
                  mainAxisSize: MainAxisSize.max,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Step 2/5',
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
                    context.pushNamed(PatientDiseasesWidget.routeName);
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
