import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import 'patient_calendar_i_n_f_o_widget.dart' show PatientCalendarINFOWidget;
import 'package:flutter/material.dart';

class PatientCalendarINFOModel
    extends FlutterFlowModel<PatientCalendarINFOWidget> {
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
