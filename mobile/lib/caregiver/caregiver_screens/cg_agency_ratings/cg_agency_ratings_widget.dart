import '/caregiver/caregiver_screens/caregiver_rating/caregiver_rating_widget.dart';
import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import '/household/appbar/appbar_widget.dart';
import '/household/one_textbtn/one_textbtn_widget.dart';
import '/household/softskill_c_o_m_p/softskill_c_o_m_p_widget.dart';
import '/index.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'cg_agency_ratings_model.dart';
export 'cg_agency_ratings_model.dart';

class CgAgencyRatingsWidget extends StatefulWidget {
  const CgAgencyRatingsWidget({super.key});

  static String routeName = 'cgAgencyRatings';
  static String routePath = '/cgAgencyRatings';

  @override
  State<CgAgencyRatingsWidget> createState() => _CgAgencyRatingsWidgetState();
}

class _CgAgencyRatingsWidgetState extends State<CgAgencyRatingsWidget> {
  late CgAgencyRatingsModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CgAgencyRatingsModel());
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
                SingleChildScrollView(
                  child: Column(
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      Padding(
                        padding: EdgeInsetsDirectional.fromSTEB(
                            20.0, 0.0, 20.0, 0.0),
                        child: wrapWithModel(
                          model: _model.appbarModel,
                          updateCallback: () => safeSetState(() {}),
                          child: AppbarWidget(
                            fLable: 'Agency',
                            secLable: 'Done',
                            pgCount: 0,
                          ),
                        ),
                      ),
                      Container(
                        decoration: BoxDecoration(),
                        child: Padding(
                          padding: EdgeInsetsDirectional.fromSTEB(
                              20.0, 0.0, 20.0, 0.0),
                          child: Column(
                            mainAxisSize: MainAxisSize.max,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Column(
                                mainAxisSize: MainAxisSize.max,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'Ratings',
                                    style: FlutterFlowTheme.of(context)
                                        .displayMedium
                                        .override(
                                          fontFamily: 'Inter',
                                          letterSpacing: 0.0,
                                        ),
                                  ),
                                  Text(
                                    'Lorem ipsum dolor sit amet consectetur. Vitae dui volutpat leo euismod lacinia egestas. Eu arcu hac sociis arcu quis nibh.',
                                    style: FlutterFlowTheme.of(context)
                                        .bodyMedium
                                        .override(
                                          fontFamily: 'Inter',
                                          fontSize: 16.0,
                                          letterSpacing: 0.0,
                                        ),
                                  ),
                                  FFButtonWidget(
                                    onPressed: () async {
                                      context.pushNamed(
                                          CgRateagencyWidget.routeName);
                                    },
                                    text: 'Rate Agency',
                                    options: FFButtonOptions(
                                      width: MediaQuery.sizeOf(context).width *
                                          0.25,
                                      height: 35.0,
                                      padding: EdgeInsetsDirectional.fromSTEB(
                                          0.0, 0.0, 0.0, 0.0),
                                      iconPadding:
                                          EdgeInsetsDirectional.fromSTEB(
                                              0.0, 0.0, 0.0, 0.0),
                                      color:
                                          FlutterFlowTheme.of(context).primary,
                                      textStyle: GoogleFonts.getFont(
                                        'Inter Tight',
                                        color: Colors.white,
                                        fontWeight: FontWeight.w600,
                                        fontSize: 12.0,
                                      ),
                                      borderRadius: BorderRadius.circular(6.0),
                                    ),
                                    showLoadingIndicator: false,
                                  ),
                                ].divide(SizedBox(height: 12.0)),
                              ),
                              wrapWithModel(
                                model: _model.caregiverRatingModel,
                                updateCallback: () => safeSetState(() {}),
                                child: CaregiverRatingWidget(),
                              ),
                              Column(
                                mainAxisSize: MainAxisSize.max,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'Awards',
                                    style: FlutterFlowTheme.of(context)
                                        .displaySmall
                                        .override(
                                          fontFamily: 'Inter',
                                          letterSpacing: 0.0,
                                        ),
                                  ),
                                  Container(
                                    constraints: BoxConstraints(
                                      maxWidth:
                                          MediaQuery.sizeOf(context).width *
                                              1.0,
                                      maxHeight: double.infinity,
                                    ),
                                    decoration: BoxDecoration(
                                      color: FlutterFlowTheme.of(context).info,
                                      boxShadow: [
                                        BoxShadow(
                                          blurRadius: 3.0,
                                          color: Color(0xFFDDE6EE),
                                          offset: Offset(
                                            0.0,
                                            2.0,
                                          ),
                                        )
                                      ],
                                      borderRadius: BorderRadius.circular(8.0),
                                    ),
                                    alignment: AlignmentDirectional(0.0, 0.0),
                                    child: Padding(
                                      padding: EdgeInsetsDirectional.fromSTEB(
                                          0.0, 9.0, 0.0, 9.0),
                                      child: Column(
                                        mainAxisSize: MainAxisSize.max,
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Text(
                                            'Heading six',
                                            style: FlutterFlowTheme.of(context)
                                                .headlineSmall
                                                .override(
                                                  fontFamily: 'Inter',
                                                  letterSpacing: 0.0,
                                                ),
                                          ),
                                          Text(
                                            'Have worked more than 46hrs for xx household',
                                            style: FlutterFlowTheme.of(context)
                                                .bodyMedium
                                                .override(
                                                  fontFamily: 'Inter',
                                                  letterSpacing: 0.0,
                                                ),
                                          ),
                                        ].divide(SizedBox(height: 8.0)),
                                      ),
                                    ),
                                  ),
                                ].divide(SizedBox(height: 12.0)),
                              ),
                              Column(
                                mainAxisSize: MainAxisSize.max,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'Reviews',
                                    style: FlutterFlowTheme.of(context)
                                        .displaySmall
                                        .override(
                                          fontFamily: 'Inter',
                                          letterSpacing: 0.0,
                                        ),
                                  ),
                                  Column(
                                    mainAxisSize: MainAxisSize.max,
                                    children: [
                                      wrapWithModel(
                                        model: _model.oneTextbtnModel,
                                        updateCallback: () =>
                                            safeSetState(() {}),
                                        child: OneTextbtnWidget(
                                          lable: 'Ratings',
                                        ),
                                      ),
                                    ].divide(SizedBox(height: 12.0)),
                                  ),
                                ].divide(SizedBox(height: 12.0)),
                              ),
                              Column(
                                mainAxisSize: MainAxisSize.max,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'Reviews',
                                    style: FlutterFlowTheme.of(context)
                                        .displaySmall
                                        .override(
                                          fontFamily: 'Inter',
                                          letterSpacing: 0.0,
                                        ),
                                  ),
                                  Column(
                                    mainAxisSize: MainAxisSize.max,
                                    children: [
                                      wrapWithModel(
                                        model: _model.softskillCOMPModel,
                                        updateCallback: () =>
                                            safeSetState(() {}),
                                        child: SoftskillCOMPWidget(),
                                      ),
                                    ]
                                        .divide(SizedBox(height: 12.0))
                                        .addToEnd(SizedBox(height: 12.0)),
                                  ),
                                ].divide(SizedBox(height: 12.0)),
                              ),
                            ].divide(SizedBox(height: 48.0)),
                          ),
                        ),
                      ),
                    ]
                        .divide(SizedBox(height: 20.0))
                        .addToEnd(SizedBox(height: 90.0)),
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
