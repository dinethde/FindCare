import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import 'patient_info_widget.dart' show PatientInfoWidget;
import 'package:flutter/material.dart';

class PatientInfoModel extends FlutterFlowModel<PatientInfoWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appbar component.
  late AppbarModel appbarModel;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel1;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel2;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel3;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel4;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel5;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
    iconButtonModel1 = createModel(context, () => IconButtonModel());
    iconButtonModel2 = createModel(context, () => IconButtonModel());
    iconButtonModel3 = createModel(context, () => IconButtonModel());
    iconButtonModel4 = createModel(context, () => IconButtonModel());
    iconButtonModel5 = createModel(context, () => IconButtonModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
    iconButtonModel1.dispose();
    iconButtonModel2.dispose();
    iconButtonModel3.dispose();
    iconButtonModel4.dispose();
    iconButtonModel5.dispose();
  }
}
