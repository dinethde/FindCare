import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/household/record_button/record_button_widget.dart';
import '/onboarding/button/button_widget.dart';
import 'pc_medical_records_widget.dart' show PcMedicalRecordsWidget;
import 'package:flutter/material.dart';

class PcMedicalRecordsModel extends FlutterFlowModel<PcMedicalRecordsWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appbar component.
  late AppbarModel appbarModel;
  // Model for Button component.
  late ButtonModel buttonModel;
  // Model for RecordButton component.
  late RecordButtonModel recordButtonModel;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
    buttonModel = createModel(context, () => ButtonModel());
    recordButtonModel = createModel(context, () => RecordButtonModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
    buttonModel.dispose();
    recordButtonModel.dispose();
  }
}
