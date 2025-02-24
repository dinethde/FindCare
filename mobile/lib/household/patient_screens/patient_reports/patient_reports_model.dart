import '/components/chart_time_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/nav_bar_house/nav_bar_house_widget.dart';
import 'patient_reports_widget.dart' show PatientReportsWidget;
import 'package:flutter/material.dart';

class PatientReportsModel extends FlutterFlowModel<PatientReportsWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appBarLeftside component.
  late AppBarLeftsideModel appBarLeftsideModel;
  // Model for Chart_time component.
  late ChartTimeModel chartTimeModel;
  // Model for nav_barHouse component.
  late NavBarHouseModel navBarHouseModel;

  @override
  void initState(BuildContext context) {
    appBarLeftsideModel = createModel(context, () => AppBarLeftsideModel());
    chartTimeModel = createModel(context, () => ChartTimeModel());
    navBarHouseModel = createModel(context, () => NavBarHouseModel());
  }

  @override
  void dispose() {
    appBarLeftsideModel.dispose();
    chartTimeModel.dispose();
    navBarHouseModel.dispose();
  }
}
