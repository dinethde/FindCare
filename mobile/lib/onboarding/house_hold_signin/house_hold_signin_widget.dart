import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import '/onboarding/invisible_button/invisible_button_widget.dart';
import '/onboarding/text_box/text_box_widget.dart';
import 'dart:async';
import '/index.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
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
                            fontFamily: 'Inter',
                            letterSpacing: 0.0,
                            fontWeight: FontWeight.bold,
                          ),
                    ),
                    Text(
                      'Sign in to access your personalized\n caregiving services and manage your care \nneeds seamlessly.',
                      textAlign: TextAlign.center,
                      style: FlutterFlowTheme.of(context).titleMedium.override(
                            fontFamily: 'Inter',
                            fontSize: 14.0,
                            letterSpacing: 0.0,
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
                          model: _model.textBoxModel1,
                          updateCallback: () => safeSetState(() {}),
                          child: TextBoxWidget(
                            textField: 'Email',
                          ),
                        ),
                        wrapWithModel(
                          model: _model.textBoxModel2,
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
                          context.pushNamed(PatientFirstPageWidget.routeName);
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
                        showLoadingIndicator: false,
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
                                  fontFamily: 'Inter',
                                  fontSize: 12.0,
                                  letterSpacing: 0.0,
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
                                    fontFamily: 'Inter',
                                    color: Color(0xFFFF3355),
                                    fontSize: 12.0,
                                    letterSpacing: 0.0,
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
