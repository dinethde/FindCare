import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import '/onboarding/invisible_button/invisible_button_widget.dart';
import '/onboarding/text_box/text_box_widget.dart';
import '/index.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'care_giver_sign_in_model.dart';
export 'care_giver_sign_in_model.dart';

class CareGiverSignInWidget extends StatefulWidget {
  const CareGiverSignInWidget({super.key});

  static String routeName = 'careGiverSignIn';
  static String routePath = '/careGiverSignIn';

  @override
  State<CareGiverSignInWidget> createState() => _CareGiverSignInWidgetState();
}

class _CareGiverSignInWidgetState extends State<CareGiverSignInWidget> {
  late CareGiverSignInModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CareGiverSignInModel());
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
        backgroundColor: Color(0xFFFBFAF8),
        body: SafeArea(
          top: true,
          child: Padding(
            padding: EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
            child: Column(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceAround,
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
                    Padding(
                      padding:
                          EdgeInsetsDirectional.fromSTEB(0.0, 12.0, 0.0, 0.0),
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
                Column(
                  mainAxisSize: MainAxisSize.max,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Padding(
                      padding:
                          EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 16.0),
                      child: wrapWithModel(
                        model: _model.textBoxModel1,
                        updateCallback: () => safeSetState(() {}),
                        child: TextBoxWidget(
                          textField: 'Id',
                        ),
                      ),
                    ),
                    wrapWithModel(
                      model: _model.textBoxModel2,
                      updateCallback: () => safeSetState(() {}),
                      child: TextBoxWidget(
                        textField: 'Password',
                      ),
                    ),
                    Padding(
                      padding:
                          EdgeInsetsDirectional.fromSTEB(4.0, 5.0, 0.0, 0.0),
                      child: wrapWithModel(
                        model: _model.invisibleButtonModel,
                        updateCallback: () => safeSetState(() {}),
                        child: InvisibleButtonWidget(
                          lableName: 'Forgot password',
                        ),
                      ),
                    ),
                  ],
                ),
                Column(
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    FFButtonWidget(
                      onPressed: () async {
                        context.pushNamed(CaregiverHomeageWidget.routeName);
                      },
                      text: 'Sign in',
                      options: FFButtonOptions(
                        width: MediaQuery.sizeOf(context).width * 1.0,
                        height: 47.0,
                        padding:
                            EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
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
