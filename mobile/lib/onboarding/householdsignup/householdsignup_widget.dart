import '/auth/custom_auth/auth_util.dart';
import '/backend/api_requests/api_calls.dart';
import '/backend/schema/structs/index.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import '/onboarding/text_box/text_box_widget.dart';
import '/onboarding/text_boxhalf/text_boxhalf_widget.dart';
import 'dart:async';
import '/index.dart';
import 'package:flutter/material.dart';
import 'package:flutter_keyboard_visibility/flutter_keyboard_visibility.dart';
import 'package:google_fonts/google_fonts.dart';
import 'householdsignup_model.dart';
export 'householdsignup_model.dart';

class HouseholdsignupWidget extends StatefulWidget {
  const HouseholdsignupWidget({super.key});

  static String routeName = 'Householdsignup';
  static String routePath = '/householdsignup';

  @override
  State<HouseholdsignupWidget> createState() => _HouseholdsignupWidgetState();
}

class _HouseholdsignupWidgetState extends State<HouseholdsignupWidget> {
  late HouseholdsignupModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();
  late StreamSubscription<bool> _keyboardVisibilitySubscription;
  bool _isKeyboardVisible = false;

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => HouseholdsignupModel());

    if (!isWeb) {
      _keyboardVisibilitySubscription =
          KeyboardVisibilityController().onChange.listen((bool visible) {
        safeSetState(() {
          _isKeyboardVisible = visible;
        });
      });
    }
  }

  @override
  void dispose() {
    _model.dispose();

    if (!isWeb) {
      _keyboardVisibilitySubscription.cancel();
    }
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
        backgroundColor: Color(0xFFFBFAF8),
        body: SafeArea(
          top: true,
          child: Padding(
            padding: EdgeInsetsDirectional.fromSTEB(0.0, 35.0, 0.0, 0.0),
            child: SingleChildScrollView(
              child: Column(
                mainAxisSize: MainAxisSize.max,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Padding(
                    padding:
                        EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
                    child: Column(
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        Column(
                          mainAxisSize: MainAxisSize.max,
                          children: [
                            Text(
                              'Sign up',
                              style: FlutterFlowTheme.of(context)
                                  .displaySmall
                                  .override(
                                    fontFamily: FlutterFlowTheme.of(context)
                                        .displaySmallFamily,
                                    letterSpacing: 0.0,
                                    fontWeight: FontWeight.bold,
                                    useGoogleFonts: GoogleFonts.asMap()
                                        .containsKey(
                                            FlutterFlowTheme.of(context)
                                                .displaySmallFamily),
                                  ),
                            ),
                            Text(
                              'Create your account to connect with trusted caregivers and manage your household\'s care needs effortlessly.',
                              textAlign: TextAlign.center,
                              style: FlutterFlowTheme.of(context)
                                  .bodyMedium
                                  .override(
                                    fontFamily: FlutterFlowTheme.of(context)
                                        .bodyMediumFamily,
                                    letterSpacing: 0.0,
                                    fontWeight: FontWeight.w500,
                                    useGoogleFonts: GoogleFonts.asMap()
                                        .containsKey(
                                            FlutterFlowTheme.of(context)
                                                .bodyMediumFamily),
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
                              wrapWithModel(
                                model: _model.emailBoxModel,
                                updateCallback: () => safeSetState(() {}),
                                child: TextBoxWidget(
                                  textField: 'Email',
                                ),
                              ),
                              Row(
                                mainAxisSize: MainAxisSize.max,
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Expanded(
                                    child: wrapWithModel(
                                      model: _model.fNameBoxhalfModel,
                                      updateCallback: () => safeSetState(() {}),
                                      child: TextBoxhalfWidget(
                                        textField: 'First name',
                                      ),
                                    ),
                                  ),
                                  Expanded(
                                    child: wrapWithModel(
                                      model: _model.lNameBoxhalfModel,
                                      updateCallback: () => safeSetState(() {}),
                                      child: TextBoxhalfWidget(
                                        textField: 'Last name',
                                      ),
                                    ),
                                  ),
                                ].divide(SizedBox(width: 16.0)),
                              ),
                              wrapWithModel(
                                model: _model.mobileBoxModel,
                                updateCallback: () => safeSetState(() {}),
                                child: TextBoxWidget(
                                  textField: 'Mobile',
                                ),
                              ),
                              wrapWithModel(
                                model: _model.addressBoxModel,
                                updateCallback: () => safeSetState(() {}),
                                child: TextBoxWidget(
                                  textField: 'Address',
                                ),
                              ),
                              wrapWithModel(
                                model: _model.passBoxModel,
                                updateCallback: () => safeSetState(() {}),
                                child: TextBoxWidget(
                                  textField: 'Password',
                                ),
                              ),
                              wrapWithModel(
                                model: _model.confirmPassBoxModel,
                                updateCallback: () => safeSetState(() {}),
                                child: TextBoxWidget(
                                  textField: 'Confirm the password',
                                ),
                              ),
                              Row(
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
                                          borderRadius:
                                              BorderRadius.circular(4.0),
                                        ),
                                      ),
                                      unselectedWidgetColor:
                                          FlutterFlowTheme.of(context)
                                              .alternate,
                                    ),
                                    child: Checkbox(
                                      value: _model.checkboxValue ??= true,
                                      onChanged: (newValue) async {
                                        safeSetState(() =>
                                            _model.checkboxValue = newValue!);
                                      },
                                      side: BorderSide(
                                        width: 2,
                                        color: FlutterFlowTheme.of(context)
                                            .alternate,
                                      ),
                                      activeColor:
                                          FlutterFlowTheme.of(context).primary,
                                      checkColor:
                                          FlutterFlowTheme.of(context).info,
                                    ),
                                  ),
                                  Flexible(
                                    child: Text(
                                      'Agreeing all the inputed data is correct.',
                                      textAlign: TextAlign.start,
                                      style: FlutterFlowTheme.of(context)
                                          .bodyMedium
                                          .override(
                                            fontFamily:
                                                FlutterFlowTheme.of(context)
                                                    .bodyMediumFamily,
                                            letterSpacing: 0.0,
                                            useGoogleFonts: GoogleFonts.asMap()
                                                .containsKey(
                                                    FlutterFlowTheme.of(context)
                                                        .bodyMediumFamily),
                                          ),
                                    ),
                                  ),
                                ].divide(SizedBox(width: 12.0)),
                              ),
                            ].divide(SizedBox(height: 16.0)),
                          ),
                        ),
                      ].divide(SizedBox(height: 48.0)),
                    ),
                  ),
                  if (!(isWeb
                      ? MediaQuery.viewInsetsOf(context).bottom > 0
                      : _isKeyboardVisible))
                    Padding(
                      padding:
                          EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
                      child: Column(
                        mainAxisSize: MainAxisSize.max,
                        children: [
                          FFButtonWidget(
                            onPressed: () async {
                              var _shouldSetState = false;
                              Function() _navigate = () {};
                              _model.aPIsingupResult =
                                  await AuthGroup.signupCall.call(
                                email: _model.emailBoxModel.textController.text,
                                password: _model
                                    .confirmPassBoxModel.textController.text,
                              );

                              _shouldSetState = true;
                              if ((_model.aPIsingupResult?.succeeded ?? true)) {
                                _model.aPIloginResult =
                                    await AuthGroup.loginCall.call(
                                  username:
                                      _model.emailBoxModel.textController.text,
                                  password: _model
                                      .confirmPassBoxModel.textController.text,
                                );

                                _shouldSetState = true;
                                if ((_model.aPIloginResult?.succeeded ??
                                    true)) {
                                  _model.accessTokenDecoded =
                                      await AuthGroup.userInfoCall.call(
                                    accessToken:
                                        AuthGroup.loginCall.accessToken(
                                      (_model.aPIloginResult?.jsonBody ?? ''),
                                    ),
                                  );

                                  _shouldSetState = true;
                                  GoRouter.of(context).prepareAuthEvent();
                                  await authManager.signIn(
                                    authenticationToken:
                                        AuthGroup.loginCall.accessToken(
                                      (_model.aPIloginResult?.jsonBody ?? ''),
                                    ),
                                    authUid: AuthGroup.userInfoCall.sub(
                                      (_model.accessTokenDecoded?.jsonBody ??
                                          ''),
                                    ),
                                    userData: Auth0UserStruct(
                                      sub: AuthGroup.userInfoCall.sub(
                                        (_model.accessTokenDecoded?.jsonBody ??
                                            ''),
                                      ),
                                      email: AuthGroup.userInfoCall.email(
                                        (_model.accessTokenDecoded?.jsonBody ??
                                            ''),
                                      ),
                                    ),
                                  );
                                  _navigate = () => context.goNamedAuth(
                                      HomePageWidget.routeName,
                                      context.mounted);

                                  _navigate();
                                  if (_shouldSetState) safeSetState(() {});
                                  return;
                                } else {
                                  ScaffoldMessenger.of(context).showSnackBar(
                                    SnackBar(
                                      content: Text(
                                        (_model.aPIloginResult?.bodyText ?? ''),
                                        style: TextStyle(
                                          color: FlutterFlowTheme.of(context)
                                              .primaryText,
                                        ),
                                      ),
                                      duration: Duration(milliseconds: 4000),
                                      backgroundColor:
                                          FlutterFlowTheme.of(context).error,
                                    ),
                                  );
                                }
                              } else {
                                ScaffoldMessenger.of(context).showSnackBar(
                                  SnackBar(
                                    content: Text(
                                      getJsonField(
                                        (_model.aPIsingupResult?.jsonBody ??
                                            ''),
                                        r'''$.description''',
                                      ).toString(),
                                      style: TextStyle(
                                        color: FlutterFlowTheme.of(context)
                                            .primaryText,
                                      ),
                                    ),
                                    duration: Duration(milliseconds: 4000),
                                    backgroundColor:
                                        FlutterFlowTheme.of(context).error,
                                  ),
                                );
                              }

                              _navigate();
                              if (_shouldSetState) safeSetState(() {});
                            },
                            text: 'Find a Caregiver',
                            options: FFButtonOptions(
                              width: MediaQuery.sizeOf(context).width * 1.0,
                              height: 47.0,
                              padding: EdgeInsetsDirectional.fromSTEB(
                                  0.0, 0.0, 0.0, 0.0),
                              iconPadding: EdgeInsetsDirectional.fromSTEB(
                                  0.0, 0.0, 0.0, 0.0),
                              color: FlutterFlowTheme.of(context).primary,
                              textStyle: GoogleFonts.getFont(
                                'Inter Tight',
                                color: Colors.white,
                                fontWeight: FontWeight.w600,
                                fontSize: 16.0,
                              ),
                              borderRadius: BorderRadius.circular(6.0),
                            ),
                          ),
                          Row(
                            mainAxisSize: MainAxisSize.max,
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                'Already sign up?',
                                style: FlutterFlowTheme.of(context)
                                    .titleMedium
                                    .override(
                                      fontFamily: FlutterFlowTheme.of(context)
                                          .titleMediumFamily,
                                      fontSize: 12.0,
                                      letterSpacing: 0.0,
                                      useGoogleFonts: GoogleFonts.asMap()
                                          .containsKey(
                                              FlutterFlowTheme.of(context)
                                                  .titleMediumFamily),
                                    ),
                              ),
                              FFButtonWidget(
                                onPressed: () async {
                                  context.pushNamed(
                                      HouseHoldSigninWidget.routeName);
                                },
                                text: 'Sign-in here',
                                options: FFButtonOptions(
                                  padding: EdgeInsetsDirectional.fromSTEB(
                                      0.0, 0.0, 0.0, 0.0),
                                  iconPadding: EdgeInsetsDirectional.fromSTEB(
                                      0.0, 0.0, 0.0, 0.0),
                                  color: Color(0x00FFFFFF),
                                  textStyle: FlutterFlowTheme.of(context)
                                      .titleSmall
                                      .override(
                                        fontFamily: FlutterFlowTheme.of(context)
                                            .titleSmallFamily,
                                        color: Color(0xFFFF3355),
                                        fontSize: 12.0,
                                        letterSpacing: 0.0,
                                        useGoogleFonts: GoogleFonts.asMap()
                                            .containsKey(
                                                FlutterFlowTheme.of(context)
                                                    .titleSmallFamily),
                                      ),
                                  elevation: 0.0,
                                ),
                              ),
                            ].divide(SizedBox(width: 3.0)),
                          ),
                        ].divide(SizedBox(height: 8.0)),
                      ),
                    ),
                ].divide(SizedBox(height: 60.0)),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
