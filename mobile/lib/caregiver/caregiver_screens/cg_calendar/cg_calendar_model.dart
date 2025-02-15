import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/household/calender/calender_widget.dart';
import 'cg_calendar_widget.dart' show CgCalendarWidget;
import 'package:flutter/material.dart';

class CgCalendarModel extends FlutterFlowModel<CgCalendarWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appbar component.
  late AppbarModel appbarModel;
  // Model for calender component.
  late CalenderModel calenderModel;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
    calenderModel = createModel(context, () => CalenderModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
    calenderModel.dispose();
  }
}
