import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import 'cg_calendarinfo_widget.dart' show CgCalendarinfoWidget;
import 'package:flutter/material.dart';

class CgCalendarinfoModel extends FlutterFlowModel<CgCalendarinfoWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appbar component.
  late AppbarModel appbarModel;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
  }
}
