import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import 'patient_reports_widget.dart' show PatientReportsWidget;
import 'package:flutter/material.dart';

class PatientReportsModel extends FlutterFlowModel<PatientReportsWidget> {
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
