import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/nav_bar_house/nav_bar_house_widget.dart';
import 'caregiver_reports_widget.dart' show CaregiverReportsWidget;
import 'package:flutter/material.dart';

class CaregiverReportsModel extends FlutterFlowModel<CaregiverReportsWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appBarLeftside component.
  late AppBarLeftsideModel appBarLeftsideModel;
  // Model for nav_barHouse component.
  late NavBarHouseModel navBarHouseModel;

  @override
  void initState(BuildContext context) {
    appBarLeftsideModel = createModel(context, () => AppBarLeftsideModel());
    navBarHouseModel = createModel(context, () => NavBarHouseModel());
  }

  @override
  void dispose() {
    appBarLeftsideModel.dispose();
    navBarHouseModel.dispose();
  }
}
