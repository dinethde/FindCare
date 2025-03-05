import '/flutter_flow/flutter_flow_util.dart';
import '/index.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'nav_bar_house_model.dart';
export 'nav_bar_house_model.dart';

class NavBarHouseWidget extends StatefulWidget {
  const NavBarHouseWidget({
    super.key,
    required this.page,
  });

  final int? page;

  @override
  State<NavBarHouseWidget> createState() => _NavBarHouseWidgetState();
}

class _NavBarHouseWidgetState extends State<NavBarHouseWidget> {
  late NavBarHouseModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => NavBarHouseModel());
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

                    context.pushNamed(HomePageWidget.routeName);
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
                        size: 23.0,
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

                    context.pushNamed(MarcketPlaceHomeWidget.routeName);
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      FaIcon(
                        FontAwesomeIcons.search,
                        color: widget.page == 1
                            ? FlutterFlowTheme.of(context).primary
                            : Color(0xFFBBBBBB),
                        size: 23.0,
                      ),
                      Text(
                        'Explore',
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

                    context.pushNamed(ProfilePageWidget.routeName);
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        Icons.water_drop_rounded,
                        color: widget.page == 2
                            ? FlutterFlowTheme.of(context).primary
                            : Color(0xFFBBBBBB),
                        size: 23.0,
                      ),
                      Text(
                        'Patient',
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

                    context.pushNamed(CaregiverPageWidget.routeName);
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        Icons.child_care_outlined,
                        color: widget.page == 3
                            ? FlutterFlowTheme.of(context).primary
                            : Color(0xFFBBBBBB),
                        size: 24.0,
                      ),
                      Text(
                        'Caregiver',
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
              Expanded(
                child: InkWell(
                  splashColor: Colors.transparent,
                  focusColor: Colors.transparent,
                  hoverColor: Colors.transparent,
                  highlightColor: Colors.transparent,
                  onTap: () async {
                    _model.number = 4;
                    safeSetState(() {});

                    context.pushNamed(MessageScreenWidget.routeName);
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        Icons.message_sharp,
                        color: widget.page == 4
                            ? FlutterFlowTheme.of(context).primary
                            : Color(0xFFBBBBBB),
                        size: 24.0,
                      ),
                      Text(
                        'Message',
                        style: FlutterFlowTheme.of(context).bodyLarge.override(
                              fontFamily: 'Inter',
                              color: widget.page == 4
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
