import '';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import '/index.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'onboard_role_select_model.dart';
export 'onboard_role_select_model.dart';

class OnboardRoleSelectWidget extends StatefulWidget {
  const OnboardRoleSelectWidget({
    super.key,
    Color? typeColor,
  }) : this.typeColor = typeColor ?? Colors.transparent;

  final Color typeColor;

  static String routeName = 'onboardRoleSelect';
  static String routePath = '/onboardRoleSelect';

  @override
  State<OnboardRoleSelectWidget> createState() =>
      _OnboardRoleSelectWidgetState();
}

class _OnboardRoleSelectWidgetState extends State<OnboardRoleSelectWidget> {
  late OnboardRoleSelectModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => OnboardRoleSelectModel());
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
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Column(
                  mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Padding(
                      padding:
                          EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 12.0),
                      child: Text(
                        'Select Your Role',
                        textAlign: TextAlign.start,
                        style:
                            FlutterFlowTheme.of(context).displayMedium.override(
                                  fontFamily: 'Inter',
                                  letterSpacing: 0.0,
                                  fontWeight: FontWeight.w600,
                                ),
                      ),
                    ),
                    Text(
                      'Select your role and start your journey',
                      textAlign: TextAlign.start,
                      style: FlutterFlowTheme.of(context).labelLarge.override(
                            fontFamily: 'Inter',
                            letterSpacing: 0.0,
                            fontWeight: FontWeight.w500,
                          ),
                    ),
                  ],
                ),
                Column(
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    InkWell(
                      splashColor: Colors.transparent,
                      focusColor: Colors.transparent,
                      hoverColor: Colors.transparent,
                      highlightColor: Colors.transparent,
                      onTap: () async {
                        _model.type = 0;
                        safeSetState(() {});
                      },
                      child: Container(
                        constraints: BoxConstraints(
                          minHeight: 88.0,
                          maxWidth: MediaQuery.sizeOf(context).width * 1.0,
                          maxHeight: double.infinity,
                        ),
                        decoration: BoxDecoration(
                          color:
                              FlutterFlowTheme.of(context).secondaryBackground,
                          boxShadow: [
                            BoxShadow(
                              blurRadius: 3.0,
                              color: Color(0xFFDDE6EE),
                              offset: Offset(
                                0.0,
                                1.0,
                              ),
                            )
                          ],
                          borderRadius: BorderRadius.only(
                            bottomLeft: Radius.circular(6.0),
                            bottomRight: Radius.circular(6.0),
                            topLeft: Radius.circular(6.0),
                            topRight: Radius.circular(6.0),
                          ),
                          border: Border.all(
                            color: _model.type == 0
                                ? FlutterFlowTheme.of(context).primary
                                : Colors.transparent,
                          ),
                        ),
                        child: Row(
                          mainAxisSize: MainAxisSize.max,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Padding(
                              padding: EdgeInsetsDirectional.fromSTEB(
                                  15.0, 26.5, 12.0, 26.5),
                              child: ClipRRect(
                                borderRadius: BorderRadius.circular(8.0),
                                child: Image.asset(
                                  'assets/images/image_2025-01-25_20-59-04.png',
                                  width: 31.2,
                                  height: 35.0,
                                  fit: BoxFit.cover,
                                ),
                              ),
                            ),
                            Flexible(
                              child: Column(
                                mainAxisSize: MainAxisSize.max,
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'Im looking for a caregiver',
                                    textAlign: TextAlign.start,
                                    style: FlutterFlowTheme.of(context)
                                        .labelMedium
                                        .override(
                                          fontFamily: 'Inter',
                                          fontSize: 14.0,
                                          letterSpacing: 0.0,
                                          fontWeight: FontWeight.w600,
                                        ),
                                  ),
                                  Text(
                                    'Find trusted caregivers tailored to your loved one’s needs, quickly and easily.',
                                    textAlign: TextAlign.start,
                                    style: FlutterFlowTheme.of(context)
                                        .labelMedium
                                        .override(
                                          fontFamily: 'Inter',
                                          color: Color(0xFF8D8D8D),
                                          letterSpacing: 0.0,
                                        ),
                                  ),
                                ].divide(SizedBox(height: 4.0)),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                    InkWell(
                      splashColor: Colors.transparent,
                      focusColor: Colors.transparent,
                      hoverColor: Colors.transparent,
                      highlightColor: Colors.transparent,
                      onTap: () async {
                        _model.type = 1;
                        safeSetState(() {});
                      },
                      child: Container(
                        constraints: BoxConstraints(
                          minHeight: 88.0,
                          maxWidth: MediaQuery.sizeOf(context).width * 1.0,
                          maxHeight: double.infinity,
                        ),
                        decoration: BoxDecoration(
                          color:
                              FlutterFlowTheme.of(context).secondaryBackground,
                          boxShadow: [
                            BoxShadow(
                              blurRadius: 3.0,
                              color: Color(0xFFDDE6EE),
                              offset: Offset(
                                0.0,
                                1.0,
                              ),
                            )
                          ],
                          borderRadius: BorderRadius.only(
                            bottomLeft: Radius.circular(6.0),
                            bottomRight: Radius.circular(6.0),
                            topLeft: Radius.circular(6.0),
                            topRight: Radius.circular(6.0),
                          ),
                          border: Border.all(
                            color: _model.type == 1
                                ? FlutterFlowTheme.of(context).primary
                                : Colors.transparent,
                          ),
                        ),
                        child: Row(
                          mainAxisSize: MainAxisSize.max,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Padding(
                              padding: EdgeInsetsDirectional.fromSTEB(
                                  15.0, 26.5, 12.0, 26.5),
                              child: ClipRRect(
                                borderRadius: BorderRadius.circular(8.0),
                                child: Image.asset(
                                  'assets/images/image_2025-01-25_20-58-51.png',
                                  width: 31.2,
                                  height: 35.0,
                                  fit: BoxFit.cover,
                                ),
                              ),
                            ),
                            Flexible(
                              child: Column(
                                mainAxisSize: MainAxisSize.max,
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'I’m a caregiver in an agency',
                                    textAlign: TextAlign.start,
                                    style: FlutterFlowTheme.of(context)
                                        .labelLarge
                                        .override(
                                          fontFamily: 'Inter',
                                          letterSpacing: 0.0,
                                          fontWeight: FontWeight.w600,
                                        ),
                                  ),
                                  Text(
                                    'Manage your tasks, schedules, and connections effortlessly with a single platform.',
                                    textAlign: TextAlign.start,
                                    style: FlutterFlowTheme.of(context)
                                        .labelMedium
                                        .override(
                                          fontFamily: 'Inter',
                                          color: Color(0xFF8D8D8D),
                                          letterSpacing: 0.1,
                                        ),
                                  ),
                                ].divide(SizedBox(height: 4.0)),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ].divide(SizedBox(height: 30.0)),
                ),
                FFButtonWidget(
                  onPressed: (_model.type == null)
                      ? null
                      : () async {
                          if (_model.type == 0) {
                            context.pushNamed(RegisterNameWidget.routeName);
                          } else {
                            context.pushNamed(CareGiverSignInWidget.routeName);
                          }
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
                    disabledColor: Color(0xFF8D8D8D),
                  ),
                  showLoadingIndicator: false,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
