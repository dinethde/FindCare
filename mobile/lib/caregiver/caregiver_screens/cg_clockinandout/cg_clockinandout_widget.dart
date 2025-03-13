import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/componets_approved/clock_i_n_o_u_t/clock_i_n_o_u_t_widget.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/onboarding/invisible_button/invisible_button_widget.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'cg_clockinandout_model.dart';
export 'cg_clockinandout_model.dart';

class CgClockinandoutWidget extends StatefulWidget {
  const CgClockinandoutWidget({super.key});

  static String routeName = 'cgClockinandout';
  static String routePath = '/cgClockinandout';

  @override
  State<CgClockinandoutWidget> createState() => _CgClockinandoutWidgetState();
}

class _CgClockinandoutWidgetState extends State<CgClockinandoutWidget> {
  late CgClockinandoutModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CgClockinandoutModel());
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
        backgroundColor: FlutterFlowTheme.of(context).primaryBackground,
        body: SafeArea(
          top: true,
          child: Padding(
            padding: EdgeInsetsDirectional.fromSTEB(0.0, 25.0, 0.0, 0.0),
            child: Stack(
              children: [
                Padding(
                  padding: EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
                  child: Column(
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      wrapWithModel(
                        model: _model.appbarModel,
                        updateCallback: () => safeSetState(() {}),
                        child: AppbarWidget(
                          fLable: 'Functions',
                          secLable: 'Done',
                          pgCount: 0,
                        ),
                      ),
                      Column(
                        mainAxisSize: MainAxisSize.max,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            '05/01',
                            style: FlutterFlowTheme.of(context)
                                .bodyMedium
                                .override(
                                  fontFamily: FlutterFlowTheme.of(context)
                                      .bodyMediumFamily,
                                  color: FlutterFlowTheme.of(context).secondary,
                                  fontSize: 16.0,
                                  letterSpacing: 0.0,
                                  useGoogleFonts: GoogleFonts.asMap()
                                      .containsKey(FlutterFlowTheme.of(context)
                                          .bodyMediumFamily),
                                ),
                          ),
                          Row(
                            mainAxisSize: MainAxisSize.max,
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: CrossAxisAlignment.end,
                            children: [
                              Text(
                                'Clock in and out',
                                style: FlutterFlowTheme.of(context)
                                    .displayMedium
                                    .override(
                                      fontFamily: FlutterFlowTheme.of(context)
                                          .displayMediumFamily,
                                      letterSpacing: 0.0,
                                      useGoogleFonts: GoogleFonts.asMap()
                                          .containsKey(
                                              FlutterFlowTheme.of(context)
                                                  .displayMediumFamily),
                                    ),
                              ),
                              Row(
                                mainAxisSize: MainAxisSize.max,
                                children: [
                                  wrapWithModel(
                                    model: _model.invisibleButtonModel,
                                    updateCallback: () => safeSetState(() {}),
                                    child: InvisibleButtonWidget(
                                      lableName: 'History',
                                      color:
                                          FlutterFlowTheme.of(context).primary,
                                    ),
                                  ),
                                  Icon(
                                    Icons.history_sharp,
                                    color: FlutterFlowTheme.of(context)
                                        .primaryText,
                                    size: 16.0,
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ],
                      ),
                      wrapWithModel(
                        model: _model.clockINOUTModel,
                        updateCallback: () => safeSetState(() {}),
                        child: ClockINOUTWidget(
                          date: '01/05/2022',
                          time: '08.00AM - 05.00PM',
                          location: 'NO. 190, Deerakkandha rd, Wadduwa',
                          btnColor: FlutterFlowTheme.of(context).primary,
                          btnText: 'Primary Button',
                        ),
                      ),
                    ].divide(SizedBox(height: 32.0)),
                  ),
                ),
                wrapWithModel(
                  model: _model.navBarModel,
                  updateCallback: () => safeSetState(() {}),
                  child: NavBarWidget(
                    page: 2,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
