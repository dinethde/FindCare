import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import 'caregiver_reports_widget.dart' show CaregiverReportsWidget;
import 'package:flutter/material.dart';

class CaregiverReportsModel extends FlutterFlowModel<CaregiverReportsWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appBarLeftside component.
  late AppBarLeftsideModel appBarLeftsideModel;

  @override
  void initState(BuildContext context) {
    appBarLeftsideModel = createModel(context, () => AppBarLeftsideModel());
  }

  @override
  void dispose() {
    appBarLeftsideModel.dispose();
  }
}
