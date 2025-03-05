import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/calender/calender_widget.dart';
import '/flutter_flow/random_data_util.dart' as random_data;
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'patient_calendar_model.dart';
export 'patient_calendar_model.dart';

class PatientCalendarWidget extends StatefulWidget {
  const PatientCalendarWidget({super.key});

  static String routeName = 'PatientCalendar';
  static String routePath = '/patientCalendar';

  @override
  State<PatientCalendarWidget> createState() => _PatientCalendarWidgetState();
}

class _PatientCalendarWidgetState extends State<PatientCalendarWidget> {
  late PatientCalendarModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => PatientCalendarModel());
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
              Container(
                constraints: BoxConstraints(
                  maxWidth: MediaQuery.sizeOf(context).width * 1.0,
                  maxHeight: double.infinity,
                ),
                decoration: BoxDecoration(
                  color: FlutterFlowTheme.of(context).secondaryBackground,
                ),
                child: Padding(
                  padding: EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
                  child: Column(
                    mainAxisSize: MainAxisSize.max,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Column(
                        mainAxisSize: MainAxisSize.max,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Calendar',
                            style: FlutterFlowTheme.of(context)
                                .displayMedium
                                .override(
                                  fontFamily: 'Inter',
                                  letterSpacing: 0.0,
                                ),
                          ),
                          Row(
                            mainAxisSize: MainAxisSize.max,
                            children: [
                              Icon(
                                Icons.calendar_month,
                                color: Color(0xFFCA861F),
                                size: 24.0,
                              ),
                              Text(
                                dateTimeFormat(
                                    "yMMMd", random_data.randomDate()),
                                style: FlutterFlowTheme.of(context)
                                    .bodyMedium
                                    .override(
                                      fontFamily: 'Inter',
                                      letterSpacing: 0.0,
                                    ),
                              ),
                            ].divide(SizedBox(width: 5.0)),
                          ),
                        ].divide(SizedBox(height: 15.0)),
                      ),
                      wrapWithModel(
                        model: _model.calenderModel,
                        updateCallback: () => safeSetState(() {}),
                        child: CalenderWidget(),
                      ),
                    ].divide(SizedBox(height: 50.0)),
                  ),
                ),
              ),
            ].divide(SizedBox(height: 15.0)),
          ),
        ),
      ),
    );
  }
}
