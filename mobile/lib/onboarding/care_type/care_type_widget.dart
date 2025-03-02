import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import '/onboarding/care_type_b_o_x/care_type_b_o_x_widget.dart';
import '/index.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'care_type_model.dart';
export 'care_type_model.dart';

class CareTypeWidget extends StatefulWidget {
  const CareTypeWidget({
    super.key,
    Color? typeColor,
  }) : this.typeColor = typeColor ?? Colors.white;

  final Color typeColor;

  static String routeName = 'careType';
  static String routePath = '/careType';

  @override
  State<CareTypeWidget> createState() => _CareTypeWidgetState();
}

class _CareTypeWidgetState extends State<CareTypeWidget> {
  late CareTypeModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CareTypeModel());
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
                    Column(
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        Text(
                          'What type of care you need?',
                          textAlign: TextAlign.center,
                          style: FlutterFlowTheme.of(context)
                              .displaySmall
                              .override(
                                fontFamily: 'Inter',
                                letterSpacing: 0.0,
                                fontWeight: FontWeight.bold,
                              ),
                        ),
                        Text(
                          'Select your role and start your journey',
                          style:
                              FlutterFlowTheme.of(context).bodyMedium.override(
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
                            _model.careType = 0;
                            safeSetState(() {});
                          },
                          child: wrapWithModel(
                            model: _model.careTypeBOXModel1,
                            updateCallback: () => safeSetState(() {}),
                            child: CareTypeBOXWidget(
                              selecColor: _model.careType == 0
                                  ? FlutterFlowTheme.of(context).primary
                                  : Colors.transparent,
                              icon: Icon(
                                Icons.cancel,
                                size: 28.0,
                              ),
                              text: 'Senior Care',
                            ),
                          ),
                        ),
                        InkWell(
                          splashColor: Colors.transparent,
                          focusColor: Colors.transparent,
                          hoverColor: Colors.transparent,
                          highlightColor: Colors.transparent,
                          onTap: () async {
                            _model.careType = 1;
                            safeSetState(() {});
                          },
                          child: wrapWithModel(
                            model: _model.careTypeBOXModel2,
                            updateCallback: () => safeSetState(() {}),
                            child: CareTypeBOXWidget(
                              selecColor: _model.careType == 1
                                  ? FlutterFlowTheme.of(context).primary
                                  : Colors.transparent,
                              icon: Icon(
                                Icons.eighteen_up_rating_outlined,
                                size: 28.0,
                              ),
                              text: 'Child Care',
                            ),
                          ),
                        ),
                      ]
                          .divide(SizedBox(height: 16.0))
                          .around(SizedBox(height: 16.0)),
                    ),
                  ].divide(SizedBox(height: 40.0)),
                ),
                FFButtonWidget(
                  onPressed: (_model.careType == null)
                      ? null
                      : () async {
                          context.pushNamed(HouseholdsignupWidget.routeName);
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
              ].divide(SizedBox(height: 10.0)),
            ),
          ),
        ),
      ),
    );
  }
}
