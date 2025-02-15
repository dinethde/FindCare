import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/calender/calender_widget.dart';
import 'pc_calendar_widget.dart' show PcCalendarWidget;
import 'package:flutter/material.dart';

class PcCalendarModel extends FlutterFlowModel<PcCalendarWidget> {
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
