import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/record_button/record_button_widget.dart';
import '/onboarding/button/button_widget.dart';
import 'medical_records_widget.dart' show MedicalRecordsWidget;
import 'package:flutter/material.dart';

class MedicalRecordsModel extends FlutterFlowModel<MedicalRecordsWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appBarLeftside component.
  late AppBarLeftsideModel appBarLeftsideModel;
  // Model for Button component.
  late ButtonModel buttonModel;
  // Model for RecordButton component.
  late RecordButtonModel recordButtonModel;

  @override
  void initState(BuildContext context) {
    appBarLeftsideModel = createModel(context, () => AppBarLeftsideModel());
    buttonModel = createModel(context, () => ButtonModel());
    recordButtonModel = createModel(context, () => RecordButtonModel());
  }

  @override
  void dispose() {
    appBarLeftsideModel.dispose();
    buttonModel.dispose();
    recordButtonModel.dispose();
  }
}
