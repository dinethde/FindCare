import '/flutter_flow/flutter_flow_calendar.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/random_data_util.dart' as random_data;
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'calender_model.dart';
export 'calender_model.dart';

class CalenderWidget extends StatefulWidget {
  const CalenderWidget({super.key});

  @override
  State<CalenderWidget> createState() => _CalenderWidgetState();
}

class _CalenderWidgetState extends State<CalenderWidget> {
  late CalenderModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CalenderModel());
  }

  @override
  void dispose() {
    _model.maybeDispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: FlutterFlowTheme.of(context).secondaryBackground,
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
      child: FlutterFlowCalendar(
        color: FlutterFlowTheme.of(context).primary,
        iconColor: FlutterFlowTheme.of(context).secondaryText,
        weekFormat: false,
        weekStartsMonday: false,
        initialDate: random_data.randomDate(),
        rowHeight: 42.0,
        onChange: (DateTimeRange? newSelectedDate) {
          safeSetState(() => _model.calendarSelectedDay = newSelectedDate);
        },
        titleStyle: FlutterFlowTheme.of(context).titleLarge.override(
              fontFamily: 'Inter',
              fontSize: 12.0,
              letterSpacing: 0.0,
              fontWeight: FontWeight.w600,
            ),
        dayOfWeekStyle: FlutterFlowTheme.of(context).bodyLarge.override(
              fontFamily: 'Inter',
              letterSpacing: 0.0,
              fontWeight: FontWeight.bold,
            ),
        dateStyle: FlutterFlowTheme.of(context).bodyMedium.override(
              fontFamily: 'Inter',
              letterSpacing: 0.0,
              fontWeight: FontWeight.w500,
            ),
        selectedDateStyle: FlutterFlowTheme.of(context).titleSmall.override(
              fontFamily: 'Inter',
              letterSpacing: 0.0,
            ),
        inactiveDateStyle: FlutterFlowTheme.of(context).labelMedium.override(
              fontFamily: 'Inter',
              color: Color(0xFFBDBDBD),
              letterSpacing: 0.0,
            ),
      ),
    );
  }
}
