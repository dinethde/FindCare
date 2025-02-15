import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import '/onboarding/invisible_button/invisible_button_widget.dart';
import '/onboarding/text_box/text_box_widget.dart';
import '/onboarding/text_boxhalf/text_boxhalf_widget.dart';
import 'package:flutter/material.dart';
import 'householdsignup_model.dart';
export 'householdsignup_model.dart';

class HouseholdsignupWidget extends StatefulWidget {
  const HouseholdsignupWidget({super.key});

  @override
  State<HouseholdsignupWidget> createState() => _HouseholdsignupWidgetState();
}

class _HouseholdsignupWidgetState extends State<HouseholdsignupWidget> {
  late HouseholdsignupModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => HouseholdsignupModel());
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
        backgroundColor: const Color(0xFFFBFAF8),
        body: SafeArea(
          top: true,
          child: Column(
            mainAxisSize: MainAxisSize.max,
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Column(
                mainAxisSize: MainAxisSize.max,
                children: [
                  Text(
                    'Sign up',
                    style: FlutterFlowTheme.of(context).displaySmall.override(
                          fontFamily: 'Inter',
                          letterSpacing: 0.0,
                          fontWeight: FontWeight.bold,
                        ),
                  ),
                  Container(
                    width: 281.0,
                    height: 42.0,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(0.0),
                    ),
                    child: Text(
                      'Lorem ipsum dolor sit amet consectetur. Dictum pulvinar dolor',
                      textAlign: TextAlign.center,
                      style: FlutterFlowTheme.of(context).bodyMedium.override(
                            fontFamily: 'Inter',
                            letterSpacing: 0.0,
                            fontWeight: FontWeight.w500,
                          ),
                    ),
                  ),
                ],
              ),
              Form(
                key: _model.formKey,
                autovalidateMode: AutovalidateMode.disabled,
                child: Column(
                  mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Padding(
                      padding:
                          const EdgeInsetsDirectional.fromSTEB(48.0, 0.0, 48.0, 0.0),
                      child: wrapWithModel(
                        model: _model.textBoxModel1,
                        updateCallback: () => safeSetState(() {}),
                        child: const TextBoxWidget(
                          textField: 'Email',
                        ),
                      ),
                    ),
                    Padding(
                      padding:
                          const EdgeInsetsDirectional.fromSTEB(48.0, 0.0, 48.0, 0.0),
                      child: Row(
                        mainAxisSize: MainAxisSize.max,
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          wrapWithModel(
                            model: _model.textBoxhalfModel1,
                            updateCallback: () => safeSetState(() {}),
                            child: const TextBoxhalfWidget(
                              textField: 'First name',
                            ),
                          ),
                          Flexible(
                            child: wrapWithModel(
                              model: _model.textBoxhalfModel2,
                              updateCallback: () => safeSetState(() {}),
                              child: const TextBoxhalfWidget(
                                textField: 'Last name',
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    Padding(
                      padding:
                          const EdgeInsetsDirectional.fromSTEB(48.0, 0.0, 48.0, 0.0),
                      child: wrapWithModel(
                        model: _model.textBoxModel2,
                        updateCallback: () => safeSetState(() {}),
                        child: const TextBoxWidget(
                          textField: 'Mobile',
                        ),
                      ),
                    ),
                    Padding(
                      padding:
                          const EdgeInsetsDirectional.fromSTEB(48.0, 0.0, 48.0, 0.0),
                      child: wrapWithModel(
                        model: _model.textBoxModel3,
                        updateCallback: () => safeSetState(() {}),
                        child: const TextBoxWidget(
                          textField: 'Address',
                        ),
                      ),
                    ),
                    Padding(
                      padding:
                          const EdgeInsetsDirectional.fromSTEB(48.0, 0.0, 48.0, 0.0),
                      child: wrapWithModel(
                        model: _model.textBoxModel4,
                        updateCallback: () => safeSetState(() {}),
                        child: const TextBoxWidget(
                          textField: 'Password',
                        ),
                      ),
                    ),
                    Padding(
                      padding:
                          const EdgeInsetsDirectional.fromSTEB(48.0, 0.0, 48.0, 0.0),
                      child: wrapWithModel(
                        model: _model.textBoxModel5,
                        updateCallback: () => safeSetState(() {}),
                        child: const TextBoxWidget(
                          textField: 'Confirm the password',
                        ),
                      ),
                    ),
                    Padding(
                      padding:
                          const EdgeInsetsDirectional.fromSTEB(48.0, 0.0, 48.0, 0.0),
                      child: Row(
                        mainAxisSize: MainAxisSize.max,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Theme(
                            data: ThemeData(
                              checkboxTheme: CheckboxThemeData(
                                visualDensity: VisualDensity.compact,
                                materialTapTargetSize:
                                    MaterialTapTargetSize.shrinkWrap,
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(4.0),
                                ),
                              ),
                              unselectedWidgetColor:
                                  FlutterFlowTheme.of(context).alternate,
                            ),
                            child: Checkbox(
                              value: _model.checkboxValue ??= true,
                              onChanged: (newValue) async {
                                safeSetState(
                                    () => _model.checkboxValue = newValue!);
                              },
                              side: BorderSide(
                                width: 2,
                                color: FlutterFlowTheme.of(context).alternate,
                              ),
                              activeColor: FlutterFlowTheme.of(context).primary,
                              checkColor: FlutterFlowTheme.of(context).info,
                            ),
                          ),
                          Flexible(
                            child: Text(
                              'Agreeing all the inputed data is correct.',
                              textAlign: TextAlign.start,
                              style: FlutterFlowTheme.of(context)
                                  .bodyMedium
                                  .override(
                                    fontFamily: 'Inter',
                                    letterSpacing: 0.0,
                                  ),
                            ),
                          ),
                        ].divide(const SizedBox(width: 12.0)),
                      ),
                    ),
                  ].divide(const SizedBox(height: 16.0)),
                ),
              ),
              Column(
                mainAxisSize: MainAxisSize.max,
                children: [
                  Padding(
                    padding:
                        const EdgeInsetsDirectional.fromSTEB(32.0, 0.0, 32.0, 0.0),
                    child: wrapWithModel(
                      model: _model.buttonModel,
                      updateCallback: () => safeSetState(() {}),
                      child: ButtonWidget(
                        btnText: 'Find a Caregiver',
                        btnColor: FlutterFlowTheme.of(context).primary,
                      ),
                    ),
                  ),
                  Container(
                    width: 338.0,
                    height: 26.0,
                    decoration: const BoxDecoration(),
                    child: Padding(
                      padding:
                          const EdgeInsetsDirectional.fromSTEB(85.0, 8.0, 0.0, 0.0),
                      child: Row(
                        mainAxisSize: MainAxisSize.max,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Text(
                            'Already sign up?',
                            style: FlutterFlowTheme.of(context)
                                .titleMedium
                                .override(
                                  fontFamily: 'Inter',
                                  fontSize: 12.0,
                                  letterSpacing: 0.0,
                                ),
                          ),
                          Padding(
                            padding: const EdgeInsetsDirectional.fromSTEB(
                                3.0, 0.0, 0.0, 0.0),
                            child: wrapWithModel(
                              model: _model.invisibleButtonModel,
                              updateCallback: () => safeSetState(() {}),
                              child: const InvisibleButtonWidget(
                                lableName: 'Sign-in here',
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ].divide(const SizedBox(height: 10.0)),
          ),
        ),
      ),
    );
  }
}
