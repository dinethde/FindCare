import '';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/index.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'nav_bar_model.dart';
export 'nav_bar_model.dart';

class NavBarWidget extends StatefulWidget {
  const NavBarWidget({
    super.key,
    required this.page,
  });

  final int? page;

  @override
  State<NavBarWidget> createState() => _NavBarWidgetState();
}

class _NavBarWidgetState extends State<NavBarWidget> {
  late NavBarModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => NavBarModel());
  }

  @override
  void dispose() {
    _model.maybeDispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: AlignmentDirectional(0.0, 1.0),
      child: Container(
        width: double.infinity,
        decoration: BoxDecoration(
          color: FlutterFlowTheme.of(context).secondaryBackground,
          boxShadow: [
            BoxShadow(
              blurRadius: 15.0,
              color: Color(0x0F000000),
              offset: Offset(
                0.0,
                4.0,
              ),
            )
          ],
          borderRadius: BorderRadius.circular(8.0),
        ),
        child: Padding(
          padding: EdgeInsetsDirectional.fromSTEB(5.0, 14.0, 5.0, 14.0),
          child: Row(
            mainAxisSize: MainAxisSize.max,
            children: [
              Expanded(
                child: InkWell(
                  splashColor: Colors.transparent,
                  focusColor: Colors.transparent,
                  hoverColor: Colors.transparent,
                  highlightColor: Colors.transparent,
                  onTap: () async {
                    _model.number = 0;
                    safeSetState(() {});

                    context.pushNamed(CaregiverHomeageWidget.routeName);
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      FaIcon(
                        FontAwesomeIcons.home,
                        color: widget.page == 0
                            ? FlutterFlowTheme.of(context).primary
                            : Color(0xFFBBBBBB),
                        size: 26.0,
                      ),
                      Text(
                        'Home',
                        style: FlutterFlowTheme.of(context).bodyLarge.override(
                              fontFamily: 'Inter',
                              color: widget.page == 0
                                  ? FlutterFlowTheme.of(context).primary
                                  : Color(0xFFBBBBBB),
                              letterSpacing: 0.0,
                              fontWeight: FontWeight.w500,
                            ),
                      ),
                    ].divide(SizedBox(height: 5.0)),
                  ),
                ),
              ),
              Expanded(
                child: InkWell(
                  splashColor: Colors.transparent,
                  focusColor: Colors.transparent,
                  hoverColor: Colors.transparent,
                  highlightColor: Colors.transparent,
                  onTap: () async {
                    _model.number = 1;
                    safeSetState(() {});

                    context.pushNamed(PatientsListWidget.routeName);
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        FFIcons.kuserInjured,
                        color: widget.page == 1
                            ? FlutterFlowTheme.of(context).primary
                            : Color(0xFFBBBBBB),
                        size: 27.0,
                      ),
                      Text(
                        'Patient',
                        style: FlutterFlowTheme.of(context).bodyLarge.override(
                              fontFamily: 'Inter',
                              color: widget.page == 1
                                  ? FlutterFlowTheme.of(context).primary
                                  : Color(0xFFBBBBBB),
                              letterSpacing: 0.0,
                              fontWeight: FontWeight.w500,
                            ),
                      ),
                    ].divide(SizedBox(height: 5.0)),
                  ),
                ),
              ),
              Expanded(
                child: InkWell(
                  splashColor: Colors.transparent,
                  focusColor: Colors.transparent,
                  hoverColor: Colors.transparent,
                  highlightColor: Colors.transparent,
                  onTap: () async {
                    _model.number = 2;
                    safeSetState(() {});

                    context.pushNamed(CaregiverersonalLinksWidget.routeName);
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        FFIcons.kuserNurse,
                        color: widget.page == 2
                            ? FlutterFlowTheme.of(context).primary
                            : Color(0xFFBBBBBB),
                        size: 27.0,
                      ),
                      Text(
                        'Caregiver',
                        style: FlutterFlowTheme.of(context).bodyLarge.override(
                              fontFamily: 'Inter',
                              color: widget.page == 2
                                  ? FlutterFlowTheme.of(context).primary
                                  : Color(0xFFBBBBBB),
                              letterSpacing: 0.0,
                              fontWeight: FontWeight.w500,
                            ),
                      ),
                    ].divide(SizedBox(height: 5.0)),
                  ),
                ),
              ),
              Expanded(
                child: InkWell(
                  splashColor: Colors.transparent,
                  focusColor: Colors.transparent,
                  hoverColor: Colors.transparent,
                  highlightColor: Colors.transparent,
                  onTap: () async {
                    _model.number = 3;
                    safeSetState(() {});

                    context.pushNamed(MessageScreenCaregiverWidget.routeName);
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        FFIcons.kmarketImgboxMessage,
                        color: widget.page == 3
                            ? FlutterFlowTheme.of(context).primary
                            : Color(0xFFBBBBBB),
                        size: 26.0,
                      ),
                      Text(
                        'Message',
                        style: FlutterFlowTheme.of(context).bodyLarge.override(
                              fontFamily: 'Inter',
                              color: widget.page == 3
                                  ? FlutterFlowTheme.of(context).primary
                                  : Color(0xFFBBBBBB),
                              letterSpacing: 0.0,
                              fontWeight: FontWeight.w500,
                            ),
                      ),
                    ].divide(SizedBox(height: 5.0)),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
