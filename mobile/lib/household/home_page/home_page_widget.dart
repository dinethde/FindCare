import '/flutter_flow/flutter_flow_charts.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/calender/calender_widget.dart';
import '/household/home_card/home_card_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import '/household/paitent_report/paitent_report_widget.dart';
import '/household/patient_block/patient_block_widget.dart';
import '/custom_code/widgets/index.dart' as custom_widgets;
import '/flutter_flow/random_data_util.dart' as random_data;
import 'package:flutter/material.dart';
import 'home_page_model.dart';
export 'home_page_model.dart';

class HomePageWidget extends StatefulWidget {
  const HomePageWidget({super.key});

  @override
  State<HomePageWidget> createState() => _HomePageWidgetState();
}

class _HomePageWidgetState extends State<HomePageWidget> {
  late HomePageModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => HomePageModel());

    _model.textController ??= TextEditingController();
    _model.textFieldFocusNode ??= FocusNode();
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
        body: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.max,
            children: [
              Stack(
                children: [
                  SizedBox(
                    width: MediaQuery.sizeOf(context).width * 1.0,
                    height: MediaQuery.sizeOf(context).height * 0.48,
                    child: custom_widgets.AngularGradient(
                      width: MediaQuery.sizeOf(context).width * 1.0,
                      height: MediaQuery.sizeOf(context).height * 0.48,
                    ),
                  ),
                  Padding(
                    padding:
                        const EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
                    child: Column(
                      mainAxisSize: MainAxisSize.max,
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        Column(
                          mainAxisSize: MainAxisSize.max,
                          mainAxisAlignment: MainAxisAlignment.center,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Row(
                              mainAxisSize: MainAxisSize.max,
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  'Summary',
                                  style: FlutterFlowTheme.of(context)
                                      .displayLarge
                                      .override(
                                        fontFamily: 'Inter',
                                        letterSpacing: 0.0,
                                      ),
                                ),
                                Container(
                                  width: 40.0,
                                  height: 40.0,
                                  clipBehavior: Clip.antiAlias,
                                  decoration: const BoxDecoration(
                                    shape: BoxShape.circle,
                                  ),
                                  child: Image.network(
                                    'https://picsum.photos/seed/385/600',
                                    fit: BoxFit.cover,
                                  ),
                                ),
                              ].divide(const SizedBox(width: 121.0)),
                            ),
                            SizedBox(
                              width: double.infinity,
                              child: Stack(
                                children: [
                                  Column(
                                    mainAxisSize: MainAxisSize.max,
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      Align(
                                        alignment:
                                            const AlignmentDirectional(-1.0, 0.0),
                                        child: Text(
                                          'Important',
                                          style: FlutterFlowTheme.of(context)
                                              .displaySmall
                                              .override(
                                                fontFamily: 'Inter',
                                                letterSpacing: 0.0,
                                                fontWeight: FontWeight.bold,
                                              ),
                                        ),
                                      ),
                                      Container(
                                        decoration: BoxDecoration(
                                          color: FlutterFlowTheme.of(context)
                                              .secondaryBackground,
                                          borderRadius:
                                              BorderRadius.circular(4.0),
                                        ),
                                        child: Padding(
                                          padding: const EdgeInsets.all(5.5),
                                          child: Container(
                                            decoration: BoxDecoration(
                                              color: const Color(0xFFFFF5E6),
                                              borderRadius:
                                                  BorderRadius.circular(4.0),
                                            ),
                                            child: Column(
                                              mainAxisSize: MainAxisSize.max,
                                              children: [
                                                Row(
                                                  mainAxisSize:
                                                      MainAxisSize.max,
                                                  mainAxisAlignment:
                                                      MainAxisAlignment.start,
                                                  children: [
                                                    Text(
                                                      'This week care efficiency',
                                                      style: FlutterFlowTheme
                                                              .of(context)
                                                          .bodyMedium
                                                          .override(
                                                            fontFamily: 'Inter',
                                                            letterSpacing: 0.0,
                                                            fontWeight:
                                                                FontWeight.w500,
                                                          ),
                                                    ),
                                                    Text(
                                                      valueOrDefault<String>(
                                                        formatNumber(
                                                          random_data
                                                              .randomInteger(
                                                                  0, 10),
                                                          formatType: FormatType
                                                              .percent,
                                                        ),
                                                        '85%',
                                                      ),
                                                      style: FlutterFlowTheme
                                                              .of(context)
                                                          .bodyMedium
                                                          .override(
                                                            fontFamily: 'Inter',
                                                            color: FlutterFlowTheme
                                                                    .of(context)
                                                                .primary,
                                                            fontSize: 16.0,
                                                            letterSpacing: 0.0,
                                                            fontWeight:
                                                                FontWeight.bold,
                                                          ),
                                                    ),
                                                  ].divide(
                                                      const SizedBox(width: 10.0)),
                                                ),
                                                SizedBox(
                                                  width: double.infinity,
                                                  height: 152.0,
                                                  child: FlutterFlowLineChart(
                                                    data: [
                                                      FFLineChartData(
                                                        xData: List.generate(
                                                            random_data
                                                                .randomInteger(
                                                                    5, 5),
                                                            (index) => random_data
                                                                .randomDouble(
                                                                    0.0, 1.0)),
                                                        yData: List.generate(
                                                            random_data
                                                                .randomInteger(
                                                                    5, 5),
                                                            (index) => random_data
                                                                .randomDouble(
                                                                    0.0, 1.0)),
                                                        settings:
                                                            LineChartBarData(
                                                          color: FlutterFlowTheme
                                                                  .of(context)
                                                              .primary,
                                                          barWidth: 2.0,
                                                          isCurved: true,
                                                          dotData: const FlDotData(
                                                              show: false),
                                                          belowBarData:
                                                              BarAreaData(
                                                            show: true,
                                                            color: FlutterFlowTheme
                                                                    .of(context)
                                                                .accent1,
                                                          ),
                                                        ),
                                                      )
                                                    ],
                                                    chartStylingInfo:
                                                        const ChartStylingInfo(
                                                      backgroundColor:
                                                          Color(0xFFFFF5E6),
                                                      showBorder: false,
                                                    ),
                                                    axisBounds: const AxisBounds(),
                                                    xAxisLabelInfo:
                                                        const AxisLabelInfo(
                                                      reservedSize: 32.0,
                                                    ),
                                                    yAxisLabelInfo:
                                                        const AxisLabelInfo(
                                                      reservedSize: 40.0,
                                                    ),
                                                  ),
                                                ),
                                              ],
                                            ),
                                          ),
                                        ),
                                      ),
                                    ].divide(const SizedBox(height: 16.0)),
                                  ),
                                ],
                              ),
                            ),
                          ].divide(const SizedBox(height: 20.0)),
                        ),
                        Row(
                          mainAxisSize: MainAxisSize.max,
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            wrapWithModel(
                              model: _model.homeCardModel1,
                              updateCallback: () => safeSetState(() {}),
                              child: const HomeCardWidget(
                                textColor: Color(0xFF6210C1),
                                label: 'Inform Caregiver',
                              ),
                            ),
                            wrapWithModel(
                              model: _model.homeCardModel2,
                              updateCallback: () => safeSetState(() {}),
                              child: const HomeCardWidget(
                                textColor: Color(0xFF007AFF),
                                label: 'Inform Agency',
                              ),
                            ),
                          ],
                        ),
                        Column(
                          mainAxisSize: MainAxisSize.max,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'Caregiver',
                              style: FlutterFlowTheme.of(context)
                                  .displaySmall
                                  .override(
                                    fontFamily: 'Inter',
                                    letterSpacing: 0.0,
                                    fontWeight: FontWeight.bold,
                                  ),
                            ),
                            Column(
                              mainAxisSize: MainAxisSize.max,
                              children: [
                                wrapWithModel(
                                  model: _model.iconButtonModel1,
                                  updateCallback: () => safeSetState(() {}),
                                  child: const IconButtonWidget(
                                    icon1: Icon(
                                      Icons.location_on,
                                      color: Color(0xFFFCA929),
                                    ),
                                    lable: 'Caregiver Location',
                                  ),
                                ),
                                wrapWithModel(
                                  model: _model.iconButtonModel2,
                                  updateCallback: () => safeSetState(() {}),
                                  child: const IconButtonWidget(
                                    icon1: Icon(
                                      Icons.done_all,
                                    ),
                                    lable: 'Validate caregiver',
                                  ),
                                ),
                                wrapWithModel(
                                  model: _model.iconButtonModel3,
                                  updateCallback: () => safeSetState(() {}),
                                  child: IconButtonWidget(
                                    icon1: Icon(
                                      Icons.all_inclusive_sharp,
                                      color: FlutterFlowTheme.of(context)
                                          .secondary,
                                    ),
                                    lable: 'Show all caregiver details',
                                  ),
                                ),
                              ].divide(const SizedBox(height: 16.0)),
                            ),
                          ].divide(const SizedBox(height: 16.0)),
                        ),
                        Column(
                          mainAxisSize: MainAxisSize.max,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'Notes',
                              style: FlutterFlowTheme.of(context)
                                  .displaySmall
                                  .override(
                                    fontFamily: 'Inter',
                                    letterSpacing: 0.0,
                                  ),
                            ),
                            Container(
                              height: 140.0,
                              constraints: BoxConstraints(
                                maxWidth:
                                    MediaQuery.sizeOf(context).width * 1.0,
                              ),
                              decoration: BoxDecoration(
                                color: FlutterFlowTheme.of(context)
                                    .secondaryBackground,
                                boxShadow: const [
                                  BoxShadow(
                                    blurRadius: 3.0,
                                    color: Color(0xFFDDE6EE),
                                    offset: Offset(
                                      0.0,
                                      0.0,
                                    ),
                                  )
                                ],
                                borderRadius: BorderRadius.circular(8.0),
                              ),
                              child: SizedBox(
                                width: double.infinity,
                                child: TextFormField(
                                  controller: _model.textController,
                                  focusNode: _model.textFieldFocusNode,
                                  autofocus: false,
                                  obscureText: false,
                                  decoration: InputDecoration(
                                    isDense: true,
                                    labelStyle: FlutterFlowTheme.of(context)
                                        .labelMedium
                                        .override(
                                          fontFamily: 'Inter',
                                          letterSpacing: 0.0,
                                        ),
                                    hintText:
                                        'No notes , reminders or notifications for today',
                                    hintStyle: FlutterFlowTheme.of(context)
                                        .labelMedium
                                        .override(
                                          fontFamily: 'Inter',
                                          color: const Color(0xFFA6A6A6),
                                          letterSpacing: 0.0,
                                        ),
                                    enabledBorder: OutlineInputBorder(
                                      borderSide: const BorderSide(
                                        color: Color(0x00000000),
                                        width: 1.0,
                                      ),
                                      borderRadius: BorderRadius.circular(8.0),
                                    ),
                                    focusedBorder: OutlineInputBorder(
                                      borderSide: const BorderSide(
                                        color: Color(0x00000000),
                                        width: 1.0,
                                      ),
                                      borderRadius: BorderRadius.circular(8.0),
                                    ),
                                    errorBorder: OutlineInputBorder(
                                      borderSide: BorderSide(
                                        color:
                                            FlutterFlowTheme.of(context).error,
                                        width: 1.0,
                                      ),
                                      borderRadius: BorderRadius.circular(8.0),
                                    ),
                                    focusedErrorBorder: OutlineInputBorder(
                                      borderSide: BorderSide(
                                        color:
                                            FlutterFlowTheme.of(context).error,
                                        width: 1.0,
                                      ),
                                      borderRadius: BorderRadius.circular(8.0),
                                    ),
                                    filled: true,
                                    fillColor: FlutterFlowTheme.of(context)
                                        .secondaryBackground,
                                  ),
                                  style: FlutterFlowTheme.of(context)
                                      .bodyMedium
                                      .override(
                                        fontFamily: 'Inter',
                                        letterSpacing: 0.0,
                                      ),
                                  cursorColor:
                                      FlutterFlowTheme.of(context).primaryText,
                                  validator: _model.textControllerValidator
                                      .asValidator(context),
                                ),
                              ),
                            ),
                          ].divide(const SizedBox(height: 12.0)),
                        ),
                        Column(
                          mainAxisSize: MainAxisSize.max,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'Patient',
                              style: FlutterFlowTheme.of(context)
                                  .displaySmall
                                  .override(
                                    fontFamily: 'Inter',
                                    letterSpacing: 0.0,
                                  ),
                            ),
                            Row(
                              mainAxisSize: MainAxisSize.max,
                              children: [
                                wrapWithModel(
                                  model: _model.patientBlockModel,
                                  updateCallback: () => safeSetState(() {}),
                                  child: const PatientBlockWidget(
                                    textColor: Color(0xFFFF2D55),
                                    label: 'Patient Rerpots',
                                    icon: Icon(
                                      Icons.favorite_rounded,
                                      color: Color(0xFFFF2D55),
                                      size: 16.0,
                                    ),
                                    textBox: 'Last Update',
                                    icon2: Icon(
                                      Icons.monitor_heart_outlined,
                                      color: Color(0xFFFF2D55),
                                      size: 38.0,
                                    ),
                                  ),
                                ),
                                wrapWithModel(
                                  model: _model.paitentReportModel,
                                  updateCallback: () => safeSetState(() {}),
                                  child: const PaitentReportWidget(
                                    textColor: Color(0xFF0584FF),
                                    label: 'Patient Reports',
                                    icon: Icon(
                                      Icons.reorder,
                                      color: Color(0xFF0584FF),
                                      size: 16.0,
                                    ),
                                    textBox: 'Last week',
                                    icon2: Icon(
                                      Icons.bar_chart,
                                      color: Color(0xFF0584FF),
                                      size: 38.0,
                                    ),
                                  ),
                                ),
                              ].divide(const SizedBox(width: 16.0)),
                            ),
                            wrapWithModel(
                              model: _model.calenderModel,
                              updateCallback: () => safeSetState(() {}),
                              child: const CalenderWidget(),
                            ),
                            wrapWithModel(
                              model: _model.iconButtonModel4,
                              updateCallback: () => safeSetState(() {}),
                              child: const IconButtonWidget(
                                icon1: Icon(
                                  Icons.all_inclusive_sharp,
                                  color: Color(0xFFFF2D55),
                                  size: 24.0,
                                ),
                                lable: 'Show all patient details',
                              ),
                            ),
                          ].divide(const SizedBox(height: 16.0)),
                        ),
                      ]
                          .divide(const SizedBox(height: 30.0))
                          .addToStart(const SizedBox(height: 40.0))
                          .addToEnd(const SizedBox(height: 10.0)),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
