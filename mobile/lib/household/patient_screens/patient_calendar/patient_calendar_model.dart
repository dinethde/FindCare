import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/calender/calender_widget.dart';
import 'patient_calendar_widget.dart' show PatientCalendarWidget;
import 'package:flutter/material.dart';

class PatientCalendarModel extends FlutterFlowModel<PatientCalendarWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appBarLeftside component.
  late AppBarLeftsideModel appBarLeftsideModel;
  // Model for calender component.
  late CalenderModel calenderModel;

  @override
  void initState(BuildContext context) {
    appBarLeftsideModel = createModel(context, () => AppBarLeftsideModel());
    calenderModel = createModel(context, () => CalenderModel());
  }

  @override
  void dispose() {
    appBarLeftsideModel.dispose();
    calenderModel.dispose();
  }
}
