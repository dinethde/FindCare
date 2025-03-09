import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import 'pc_calendar_i_n_f_o_widget.dart' show PcCalendarINFOWidget;
import 'package:flutter/material.dart';

class PcCalendarINFOModel extends FlutterFlowModel<PcCalendarINFOWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appbar component.
  late AppbarModel appbarModel;
  // Model for nav_bar component.
  late NavBarModel navBarModel;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
    navBarModel = createModel(context, () => NavBarModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
    navBarModel.dispose();
  }
}
