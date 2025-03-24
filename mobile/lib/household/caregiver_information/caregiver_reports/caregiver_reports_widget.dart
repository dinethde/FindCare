import '/flutter_flow/flutter_flow_charts.dart';
import '/flutter_flow/flutter_flow_icon_button.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/flutter_flow/random_data_util.dart' as random_data;
import 'package:flutter/material.dart';
import 'caregiver_reports_model.dart';
export 'caregiver_reports_model.dart';

class CaregiverReportsWidget extends StatefulWidget {
  const CaregiverReportsWidget({super.key});

  static String routeName = 'CaregiverReports';
  static String routePath = '/caregiverReports';

  @override
  State<CaregiverReportsWidget> createState() => _CaregiverReportsWidgetState();
}

class _CaregiverReportsWidgetState extends State<CaregiverReportsWidget> {
  late CaregiverReportsModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CaregiverReportsModel());
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
          child: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.max,
              children: [
                Padding(
                  padding: EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
                  child: wrapWithModel(
                    model: _model.appBarLeftsideModel,
                    updateCallback: () => safeSetState(() {}),
                    child: AppBarLeftsideWidget(
                      fLable: 'Quick links',
                    ),
                  ),
                ),
                Padding(
                  padding: EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 8.0),
                  child: Container(
                    constraints: BoxConstraints(
                      maxWidth: MediaQuery.sizeOf(context).width * 1.0,
                      maxHeight: double.infinity,
                    ),
                    decoration: BoxDecoration(
                      color: Color(0xFFF6F6F9),
                    ),
                    child: Padding(
                      padding:
                          EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
                      child: Column(
                        mainAxisSize: MainAxisSize.max,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Column(
                            mainAxisSize: MainAxisSize.max,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                'Client Reports',
                                style: FlutterFlowTheme.of(context)
                                    .displayMedium
                                    .override(
                                      fontFamily: 'Inter',
                                      letterSpacing: 0.0,
                                    ),
                              ),
                              Text(
                                'View detailed client reports to track patient satisfaction and the effectiveness of care services.',
                                style: FlutterFlowTheme.of(context)
                                    .bodyMedium
                                    .override(
                                      fontFamily: 'Inter',
                                      letterSpacing: 0.0,
                                    ),
                              ),
                            ].divide(SizedBox(height: 12.0)),
                          ),
                          Column(
                            mainAxisSize: MainAxisSize.max,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                'Needs addressed',
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
                                      MediaQuery.sizeOf(context).width * 1.0,
                                  maxHeight: double.infinity,
                                ),
                                decoration: BoxDecoration(
                                  color: FlutterFlowTheme.of(context)
                                      .secondaryBackground,
                                  boxShadow: [
                                    BoxShadow(
                                      blurRadius: 4.0,
                                      color: Color(0x33000000),
                                      offset: Offset(
                                        0.0,
                                        2.0,
                                      ),
                                    )
                                  ],
                                  borderRadius: BorderRadius.circular(8.0),
                                ),
                                child: Padding(
                                  padding: EdgeInsets.all(8.0),
                                  child: Column(
                                    mainAxisSize: MainAxisSize.max,
                                    children: [
                                      Padding(
                                        padding: EdgeInsetsDirectional.fromSTEB(
                                            60.0, 0.0, 60.0, 0.0),
                                        child: Container(
                                          constraints: BoxConstraints(
                                            maxWidth: MediaQuery.sizeOf(context)
                                                    .width *
                                                1.0,
                                            maxHeight: 63.0,
                                          ),
                                          decoration: BoxDecoration(
                                            color: Color(0xFFE6EEF5),
                                            borderRadius:
                                                BorderRadius.circular(8.0),
                                          ),
                                          child: Padding(
                                            padding: EdgeInsets.all(4.0),
                                            child: Row(
                                              mainAxisSize: MainAxisSize.max,
                                              mainAxisAlignment:
                                                  MainAxisAlignment.center,
                                              children: [
                                                FlutterFlowIconButton(
                                                  borderRadius: 8.0,
                                                  buttonSize: 32.0,
                                                  fillColor:
                                                      FlutterFlowTheme.of(
                                                              context)
                                                          .secondaryBackground,
                                                  icon: Icon(
                                                    Icons.arrow_back,
                                                    color: FlutterFlowTheme.of(
                                                            context)
                                                        .primaryText,
                                                    size: 18.0,
                                                  ),
                                                  onPressed: () {
                                                    print(
                                                        'IconButton pressed ...');
                                                  },
                                                ),
                                                FlutterFlowIconButton(
                                                  borderRadius: 8.0,
                                                  buttonSize: 32.0,
                                                  icon: Icon(
                                                    Icons.arrow_back,
                                                    color: FlutterFlowTheme.of(
                                                            context)
                                                        .primaryText,
                                                    size: 18.0,
                                                  ),
                                                  onPressed: () {
                                                    print(
                                                        'IconButton pressed ...');
                                                  },
                                                ),
                                                FlutterFlowIconButton(
                                                  borderRadius: 8.0,
                                                  buttonSize: 32.0,
                                                  icon: Icon(
                                                    Icons.arrow_back,
                                                    color: FlutterFlowTheme.of(
                                                            context)
                                                        .primaryText,
                                                    size: 18.0,
                                                  ),
                                                  onPressed: () {
                                                    print(
                                                        'IconButton pressed ...');
                                                  },
                                                ),
                                                FlutterFlowIconButton(
                                                  borderRadius: 8.0,
                                                  buttonSize: 32.0,
                                                  icon: Icon(
                                                    Icons.arrow_back,
                                                    color: FlutterFlowTheme.of(
                                                            context)
                                                        .primaryText,
                                                    size: 18.0,
                                                  ),
                                                  onPressed: () {
                                                    print(
                                                        'IconButton pressed ...');
                                                  },
                                                ),
                                              ].divide(SizedBox(width: 25.0)),
                                            ),
                                          ),
                                        ),
                                      ),
                                      Column(
                                        mainAxisSize: MainAxisSize.max,
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Column(
                                            mainAxisSize: MainAxisSize.max,
                                            crossAxisAlignment:
                                                CrossAxisAlignment.start,
                                            children: [
                                              Text(
                                                'Today, 16th November',
                                                style:
                                                    FlutterFlowTheme.of(context)
                                                        .bodyMedium
                                                        .override(
                                                          fontFamily: 'Inter',
                                                          color:
                                                              Color(0xFF8D8D8D),
                                                          letterSpacing: 0.0,
                                                        ),
                                              ),
                                              Text(
                                                '6h 1m',
                                                style:
                                                    FlutterFlowTheme.of(context)
                                                        .displaySmall
                                                        .override(
                                                          fontFamily: 'Inter',
                                                          letterSpacing: 0.0,
                                                        ),
                                              ),
                                            ].divide(SizedBox(height: 4.0)),
                                          ),
                                          Container(
                                            width: 370.0,
                                            height: 230.0,
                                            child: FlutterFlowBarChart(
                                              barData: [
                                                FFBarChartData(
                                                  yData: List.generate(
                                                      random_data.randomInteger(
                                                          5, 5),
                                                      (index) => random_data
                                                          .randomInteger(
                                                              0, 10)),
                                                  color: FlutterFlowTheme.of(
                                                          context)
                                                      .primary,
                                                )
                                              ],
                                              xLabels: List.generate(
                                                      random_data.randomInteger(
                                                          5, 5),
                                                      (index) => random_data
                                                          .randomInteger(0, 10))
                                                  .map((e) => e.toString())
                                                  .toList(),
                                              barWidth: 33.0,
                                              barBorderRadius:
                                                  BorderRadius.circular(2.0),
                                              groupSpace: 10.0,
                                              alignment:
                                                  BarChartAlignment.start,
                                              chartStylingInfo:
                                                  ChartStylingInfo(
                                                backgroundColor:
                                                    FlutterFlowTheme.of(context)
                                                        .secondaryBackground,
                                                showBorder: false,
                                              ),
                                              axisBounds: AxisBounds(),
                                              xAxisLabelInfo: AxisLabelInfo(
                                                showLabels: true,
                                                labelInterval: 10.0,
                                                reservedSize: 28.0,
                                              ),
                                              yAxisLabelInfo: AxisLabelInfo(
                                                showLabels: true,
                                                labelInterval: 10.0,
                                                reservedSize: 42.0,
                                              ),
                                            ),
                                          ),
                                        ].divide(SizedBox(height: 16.0)),
                                      ),
                                    ].divide(SizedBox(height: 16.0)),
                                  ),
                                ),
                              ),
                            ].divide(SizedBox(height: 16.0)),
                          ),
                          Column(
                            mainAxisSize: MainAxisSize.max,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                'Needs addressed',
                                style: FlutterFlowTheme.of(context)
                                    .displaySmall
                                    .override(
                                      fontFamily: 'Inter',
                                      letterSpacing: 0.0,
                                    ),
                              ),
                              Container(
                                decoration: BoxDecoration(
                                  color: FlutterFlowTheme.of(context)
                                      .secondaryBackground,
                                  boxShadow: [
                                    BoxShadow(
                                      blurRadius: 4.0,
                                      color: Color(0x33000000),
                                      offset: Offset(
                                        0.0,
                                        2.0,
                                      ),
                                    )
                                  ],
                                  borderRadius: BorderRadius.circular(8.0),
                                ),
                                child: Padding(
                                  padding: EdgeInsets.all(12.0),
                                  child: Row(
                                    mainAxisSize: MainAxisSize.max,
                                    mainAxisAlignment:
                                        MainAxisAlignment.spaceAround,
                                    children: [
                                      Container(
                                        width: 80.0,
                                        height: 80.0,
                                        decoration: BoxDecoration(
                                          color: Color(0xFF562929),
                                        ),
                                      ),
                                      Flexible(
                                        child: Padding(
                                          padding:
                                              EdgeInsetsDirectional.fromSTEB(
                                                  20.0, 0.0, 0.0, 0.0),
                                          child: Column(
                                            mainAxisSize: MainAxisSize.max,
                                            mainAxisAlignment:
                                                MainAxisAlignment.start,
                                            crossAxisAlignment:
                                                CrossAxisAlignment.start,
                                            children: [
                                              Row(
                                                mainAxisSize: MainAxisSize.max,
                                                mainAxisAlignment:
                                                    MainAxisAlignment.start,
                                                children: [
                                                  Container(
                                                    width: 10.0,
                                                    height: 10.0,
                                                    decoration: BoxDecoration(
                                                      color: Color(0xFFC32929),
                                                      borderRadius:
                                                          BorderRadius.circular(
                                                              0.0),
                                                    ),
                                                  ),
                                                  Text(
                                                    'Satisfaction',
                                                    style: FlutterFlowTheme.of(
                                                            context)
                                                        .bodyMedium
                                                        .override(
                                                          fontFamily: 'Inter',
                                                          letterSpacing: 0.0,
                                                        ),
                                                  ),
                                                ].divide(SizedBox(width: 5.0)),
                                              ),
                                              Row(
                                                mainAxisSize: MainAxisSize.max,
                                                mainAxisAlignment:
                                                    MainAxisAlignment.start,
                                                children: [
                                                  Container(
                                                    width: 10.0,
                                                    height: 10.0,
                                                    decoration: BoxDecoration(
                                                      color: Color(0xFFC32929),
                                                      borderRadius:
                                                          BorderRadius.circular(
                                                              0.0),
                                                    ),
                                                  ),
                                                  Text(
                                                    'Unsatisfactory',
                                                    style: FlutterFlowTheme.of(
                                                            context)
                                                        .bodyMedium
                                                        .override(
                                                          fontFamily: 'Inter',
                                                          letterSpacing: 0.0,
                                                        ),
                                                  ),
                                                ].divide(SizedBox(width: 5.0)),
                                              ),
                                              Text(
                                                'Due to xxx & xxx reasons xx patient satisfaction has drop to 95%',
                                                style:
                                                    FlutterFlowTheme.of(context)
                                                        .bodyMedium
                                                        .override(
                                                          fontFamily: 'Inter',
                                                          letterSpacing: 0.0,
                                                        ),
                                              ),
                                            ].divide(SizedBox(height: 16.0)),
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ].divide(SizedBox(height: 16.0)),
                          ),
                          Column(
                            mainAxisSize: MainAxisSize.max,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                'Needs addressed',
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
                                      MediaQuery.sizeOf(context).width * 1.0,
                                  maxHeight: double.infinity,
                                ),
                                decoration: BoxDecoration(
                                  color: FlutterFlowTheme.of(context)
                                      .secondaryBackground,
                                  boxShadow: [
                                    BoxShadow(
                                      blurRadius: 4.0,
                                      color: Color(0x33000000),
                                      offset: Offset(
                                        0.0,
                                        2.0,
                                      ),
                                    )
                                  ],
                                  borderRadius: BorderRadius.circular(8.0),
                                ),
                                child: Padding(
                                  padding: EdgeInsets.all(8.0),
                                  child: Column(
                                    mainAxisSize: MainAxisSize.max,
                                    children: [
                                      Padding(
                                        padding: EdgeInsetsDirectional.fromSTEB(
                                            60.0, 0.0, 60.0, 0.0),
                                        child: Container(
                                          constraints: BoxConstraints(
                                            maxWidth: MediaQuery.sizeOf(context)
                                                    .width *
                                                1.0,
                                            maxHeight: 63.0,
                                          ),
                                          decoration: BoxDecoration(
                                            color: Color(0xFFE6EEF5),
                                            borderRadius:
                                                BorderRadius.circular(8.0),
                                          ),
                                          child: Padding(
                                            padding: EdgeInsets.all(4.0),
                                            child: Row(
                                              mainAxisSize: MainAxisSize.max,
                                              mainAxisAlignment:
                                                  MainAxisAlignment.center,
                                              children: [
                                                FlutterFlowIconButton(
                                                  borderRadius: 8.0,
                                                  buttonSize: 32.0,
                                                  fillColor:
                                                      FlutterFlowTheme.of(
                                                              context)
                                                          .secondaryBackground,
                                                  icon: Icon(
                                                    Icons.arrow_back,
                                                    color: FlutterFlowTheme.of(
                                                            context)
                                                        .primaryText,
                                                    size: 18.0,
                                                  ),
                                                  onPressed: () {
                                                    print(
                                                        'IconButton pressed ...');
                                                  },
                                                ),
                                                FlutterFlowIconButton(
                                                  borderRadius: 8.0,
                                                  buttonSize: 32.0,
                                                  icon: Icon(
                                                    Icons.arrow_back,
                                                    color: FlutterFlowTheme.of(
                                                            context)
                                                        .primaryText,
                                                    size: 18.0,
                                                  ),
                                                  onPressed: () {
                                                    print(
                                                        'IconButton pressed ...');
                                                  },
                                                ),
                                                FlutterFlowIconButton(
                                                  borderRadius: 8.0,
                                                  buttonSize: 32.0,
                                                  icon: Icon(
                                                    Icons.arrow_back,
                                                    color: FlutterFlowTheme.of(
                                                            context)
                                                        .primaryText,
                                                    size: 18.0,
                                                  ),
                                                  onPressed: () {
                                                    print(
                                                        'IconButton pressed ...');
                                                  },
                                                ),
                                                FlutterFlowIconButton(
                                                  borderRadius: 8.0,
                                                  buttonSize: 32.0,
                                                  icon: Icon(
                                                    Icons.arrow_back,
                                                    color: FlutterFlowTheme.of(
                                                            context)
                                                        .primaryText,
                                                    size: 18.0,
                                                  ),
                                                  onPressed: () {
                                                    print(
                                                        'IconButton pressed ...');
                                                  },
                                                ),
                                              ].divide(SizedBox(width: 25.0)),
                                            ),
                                          ),
                                        ),
                                      ),
                                      Column(
                                        mainAxisSize: MainAxisSize.max,
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Column(
                                            mainAxisSize: MainAxisSize.max,
                                            crossAxisAlignment:
                                                CrossAxisAlignment.start,
                                            children: [
                                              Text(
                                                'Today, 16th November',
                                                style:
                                                    FlutterFlowTheme.of(context)
                                                        .bodyMedium
                                                        .override(
                                                          fontFamily: 'Inter',
                                                          color:
                                                              Color(0xFF8D8D8D),
                                                          letterSpacing: 0.0,
                                                        ),
                                              ),
                                              Text(
                                                '6h 1m',
                                                style:
                                                    FlutterFlowTheme.of(context)
                                                        .displaySmall
                                                        .override(
                                                          fontFamily: 'Inter',
                                                          letterSpacing: 0.0,
                                                        ),
                                              ),
                                            ].divide(SizedBox(height: 4.0)),
                                          ),
                                          Container(
                                            width: 370.0,
                                            height: 230.0,
                                            child: FlutterFlowBarChart(
                                              barData: [
                                                FFBarChartData(
                                                  yData: List.generate(
                                                      random_data.randomInteger(
                                                          5, 5),
                                                      (index) => random_data
                                                          .randomInteger(
                                                              0, 10)),
                                                  color: FlutterFlowTheme.of(
                                                          context)
                                                      .primary,
                                                )
                                              ],
                                              xLabels: List.generate(
                                                      random_data.randomInteger(
                                                          5, 5),
                                                      (index) => random_data
                                                          .randomInteger(0, 10))
                                                  .map((e) => e.toString())
                                                  .toList(),
                                              barWidth: 33.0,
                                              barBorderRadius:
                                                  BorderRadius.circular(2.0),
                                              groupSpace: 10.0,
                                              alignment:
                                                  BarChartAlignment.start,
                                              chartStylingInfo:
                                                  ChartStylingInfo(
                                                backgroundColor:
                                                    FlutterFlowTheme.of(context)
                                                        .secondaryBackground,
                                                showBorder: false,
                                              ),
                                              axisBounds: AxisBounds(),
                                              xAxisLabelInfo: AxisLabelInfo(
                                                showLabels: true,
                                                labelInterval: 10.0,
                                                reservedSize: 28.0,
                                              ),
                                              yAxisLabelInfo: AxisLabelInfo(
                                                showLabels: true,
                                                labelInterval: 10.0,
                                                reservedSize: 42.0,
                                              ),
                                            ),
                                          ),
                                        ].divide(SizedBox(height: 16.0)),
                                      ),
                                    ].divide(SizedBox(height: 16.0)),
                                  ),
                                ),
                              ),
                            ].divide(SizedBox(height: 16.0)),
                          ),
                        ].divide(SizedBox(height: 40.0)),
                      ),
                    ),
                  ),
                ),
              ].divide(SizedBox(height: 32.0)),
            ),
          ),
        ),
      ),
    );
  }
}
