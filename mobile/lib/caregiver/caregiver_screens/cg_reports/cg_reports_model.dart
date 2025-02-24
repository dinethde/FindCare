import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/components/chart_time_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import 'cg_reports_widget.dart' show CgReportsWidget;
import 'package:flutter/material.dart';

class CgReportsModel extends FlutterFlowModel<CgReportsWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appBarLeftside component.
  late AppBarLeftsideModel appBarLeftsideModel;
  // Model for Chart_time component.
  late ChartTimeModel chartTimeModel1;
  // Model for Chart_time component.
  late ChartTimeModel chartTimeModel2;
  // Model for nav_bar component.
  late NavBarModel navBarModel;

  @override
  void initState(BuildContext context) {
    appBarLeftsideModel = createModel(context, () => AppBarLeftsideModel());
    chartTimeModel1 = createModel(context, () => ChartTimeModel());
    chartTimeModel2 = createModel(context, () => ChartTimeModel());
    navBarModel = createModel(context, () => NavBarModel());
  }

  @override
  void dispose() {
    appBarLeftsideModel.dispose();
    chartTimeModel1.dispose();
    chartTimeModel2.dispose();
    navBarModel.dispose();
  }
}
