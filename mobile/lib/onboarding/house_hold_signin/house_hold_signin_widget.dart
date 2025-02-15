import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import '/onboarding/invisible_button/invisible_button_widget.dart';
import '/onboarding/text_box/text_box_widget.dart';
import 'package:flutter/material.dart';
import 'house_hold_signin_model.dart';
export 'house_hold_signin_model.dart';

class HouseHoldSigninWidget extends StatefulWidget {
  const HouseHoldSigninWidget({super.key});

  @override
  State<HouseHoldSigninWidget> createState() => _HouseHoldSigninWidgetState();
}

class _HouseHoldSigninWidgetState extends State<HouseHoldSigninWidget> {
  late HouseHoldSigninModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => HouseHoldSigninModel());
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
          child: Align(
            alignment: const AlignmentDirectional(0.0, 0.0),
            child: Column(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Container(
                  width: 338.0,
                  height: 82.0,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(0.0),
                  ),
                  child: Column(
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      Text(
                        'Sign in',
                        style:
                            FlutterFlowTheme.of(context).displaySmall.override(
                                  fontFamily: 'Inter',
                                  letterSpacing: 0.0,
                                  fontWeight: FontWeight.bold,
                                ),
                      ),
                      Padding(
                        padding:
                            const EdgeInsetsDirectional.fromSTEB(0.0, 12.0, 0.0, 0.0),
                        child: Text(
                          'Lorem ipsum dolor sit amet consectetur. Dictum pulvinar dolor',
                          textAlign: TextAlign.center,
                          style:
                              FlutterFlowTheme.of(context).titleMedium.override(
                                    fontFamily: 'Inter',
                                    fontSize: 14.0,
                                    letterSpacing: 0.0,
                                  ),
                        ),
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 300.0),
                  child: Container(
                    width: 338.0,
                    height: 120.0,
                    decoration: const BoxDecoration(),
                    child: Column(
                      mainAxisSize: MainAxisSize.max,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Padding(
                          padding: const EdgeInsetsDirectional.fromSTEB(
                              0.0, 0.0, 0.0, 16.0),
                          child: wrapWithModel(
                            model: _model.textBoxModel1,
                            updateCallback: () => safeSetState(() {}),
                            child: const TextBoxWidget(
                              textField: 'Email',
                            ),
                          ),
                        ),
                        wrapWithModel(
                          model: _model.textBoxModel2,
                          updateCallback: () => safeSetState(() {}),
                          child: const TextBoxWidget(
                            textField: 'Password',
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsetsDirectional.fromSTEB(
                              4.0, 5.0, 0.0, 0.0),
                          child: wrapWithModel(
                            model: _model.invisibleButtonModel1,
                            updateCallback: () => safeSetState(() {}),
                            child: const InvisibleButtonWidget(
                              lableName: 'Forgot password',
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                Container(
                  width: 338.0,
                  height: 73.0,
                  decoration: const BoxDecoration(),
                  child: Column(
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      wrapWithModel(
                        model: _model.buttonModel,
                        updateCallback: () => safeSetState(() {}),
                        child: ButtonWidget(
                          btnText: 'Find a Caregiver',
                          btnColor: FlutterFlowTheme.of(context).primary,
                        ),
                      ),
                      Container(
                        width: 338.0,
                        height: 26.0,
                        decoration: const BoxDecoration(),
                        child: Padding(
                          padding: const EdgeInsetsDirectional.fromSTEB(
                              101.0, 8.0, 0.0, 0.0),
                          child: Row(
                            mainAxisSize: MainAxisSize.max,
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              Text(
                                'New user?',
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
                                  model: _model.invisibleButtonModel2,
                                  updateCallback: () => safeSetState(() {}),
                                  child: const InvisibleButtonWidget(
                                    lableName: 'Sign up here',
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ],
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
