import '/auth/custom_auth/auth_util.dart';
import '/backend/api_requests/api_calls.dart';
import '/backend/schema/structs/index.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import '/onboarding/invisible_button/invisible_button_widget.dart';
import '/onboarding/text_box/text_box_widget.dart';
import 'dart:async';
import '/index.dart';
import 'package:flutter/material.dart';
import 'package:flutter_keyboard_visibility/flutter_keyboard_visibility.dart';
import 'package:google_fonts/google_fonts.dart';
import 'house_hold_signin_model.dart';
export 'house_hold_signin_model.dart';

class HouseHoldSigninWidget extends StatefulWidget {
  const HouseHoldSigninWidget({super.key});

  static String routeName = 'houseHoldSignin';
  static String routePath = '/houseHoldSignin';

  @override
  State<HouseHoldSigninWidget> createState() => _HouseHoldSigninWidgetState();
}

class _HouseHoldSigninWidgetState extends State<HouseHoldSigninWidget> {
  late HouseHoldSigninModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();
  late StreamSubscription<bool> _keyboardVisibilitySubscription;
  bool _isKeyboardVisible = false;

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => HouseHoldSigninModel());

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
            padding: EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
            child: Column(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Column(
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    Text(
                      'Sign in',
                      style: FlutterFlowTheme.of(context).displaySmall.override(
                            fontFamily:
                                FlutterFlowTheme.of(context).displaySmallFamily,
                            letterSpacing: 0.0,
                            fontWeight: FontWeight.bold,
                            useGoogleFonts: GoogleFonts.asMap().containsKey(
                                FlutterFlowTheme.of(context)
                                    .displaySmallFamily),
                          ),
                    ),
                    Text(
                      'Sign in to access your personalized caregiving services and manage your care \nneeds seamlessly.',
                      textAlign: TextAlign.center,
                      style: FlutterFlowTheme.of(context).titleMedium.override(
                            fontFamily:
                                FlutterFlowTheme.of(context).titleMediumFamily,
                            fontSize: 14.0,
                            letterSpacing: 0.0,
                            useGoogleFonts: GoogleFonts.asMap().containsKey(
                                FlutterFlowTheme.of(context).titleMediumFamily),
                          ),
                    ),
                  ].divide(SizedBox(height: 12.0)),
                ),
                Column(
                  mainAxisSize: MainAxisSize.max,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Column(
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        wrapWithModel(
                          model: _model.emailBoxModel,
                          updateCallback: () => safeSetState(() {}),
                          child: TextBoxWidget(
                            textField: 'Email',
                          ),
                        ),
                        wrapWithModel(
                          model: _model.passwordBoxModel,
                          updateCallback: () => safeSetState(() {}),
                          child: TextBoxWidget(
                            textField: 'Password',
                          ),
                        ),
                      ].divide(SizedBox(height: 16.0)),
                    ),
                    Padding(
                      padding:
                          EdgeInsetsDirectional.fromSTEB(4.0, 0.0, 0.0, 0.0),
                      child: wrapWithModel(
                        model: _model.invisibleButtonModel,
                        updateCallback: () => safeSetState(() {}),
                        child: InvisibleButtonWidget(
                          lableName: 'Forgot password',
                        ),
                      ),
                    ),
                  ].divide(SizedBox(height: 5.0)),
                ),
                if (!(isWeb
                    ? MediaQuery.viewInsetsOf(context).bottom > 0
                    : _isKeyboardVisible))
                  Column(
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      FFButtonWidget(
                        onPressed: () async {
                          var _shouldSetState = false;
                          Function() _navigate = () {};
                          _model.aPIloginResult =
                              await AuthGroup.loginCall.call(
                            username: _model.emailBoxModel.textController.text,
                            password:
                                _model.passwordBoxModel.textController.text,
                          );

                          _shouldSetState = true;
                          if ((_model.aPIloginResult?.succeeded ?? true)) {
                            _model.accessTokenDecoded =
                                await AuthGroup.userInfoCall.call(
                              accessToken: AuthGroup.loginCall.accessToken(
                                (_model.aPIloginResult?.jsonBody ?? ''),
                              ),
                            );

                            _shouldSetState = true;
                            await OnBoardCall.call(
                              sub: AuthGroup.userInfoCall.sub(
                                (_model.accessTokenDecoded?.jsonBody ?? ''),
                              ),
                              email: AuthGroup.userInfoCall.email(
                                (_model.accessTokenDecoded?.jsonBody ?? ''),
                              ),
                              token: AuthGroup.loginCall.accessToken(
                                (_model.aPIloginResult?.jsonBody ?? ''),
                              ),
                            );

                            GoRouter.of(context).prepareAuthEvent();
                            await authManager.signIn(
                              authenticationToken:
                                  AuthGroup.loginCall.accessToken(
                                (_model.aPIloginResult?.jsonBody ?? ''),
                              ),
                              authUid: AuthGroup.userInfoCall.sub(
                                (_model.accessTokenDecoded?.jsonBody ?? ''),
                              ),
                              userData: Auth0UserStruct(
                                sub: AuthGroup.userInfoCall.sub(
                                  (_model.accessTokenDecoded?.jsonBody ?? ''),
                                ),
                                email: AuthGroup.userInfoCall.email(
                                  (_model.accessTokenDecoded?.jsonBody ?? ''),
                                ),
                              ),
                            );
                            _navigate = () => context.goNamedAuth(
                                HomePageWidget.routeName, context.mounted);

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
                            'New user?',
                            style: FlutterFlowTheme.of(context)
                                .titleMedium
                                .override(
                                  fontFamily: FlutterFlowTheme.of(context)
                                      .titleMediumFamily,
                                  fontSize: 12.0,
                                  letterSpacing: 0.0,
                                  useGoogleFonts: GoogleFonts.asMap()
                                      .containsKey(FlutterFlowTheme.of(context)
                                          .titleMediumFamily),
                                ),
                          ),
                          FFButtonWidget(
                            onPressed: () async {
                              context
                                  .pushNamed(HouseholdsignupWidget.routeName);
                            },
                            text: 'Sign up here',
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
                    ],
                  ),
              ].divide(SizedBox(height: 10.0)),
            ),
          ),
        ),
      ),
    );
  }
}
