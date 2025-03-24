import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_rightside/app_bar_rightside_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import '/index.dart';
import 'caregiver_page_widget.dart' show CaregiverPageWidget;
import 'package:flutter/material.dart';

class CaregiverPageModel extends FlutterFlowModel<CaregiverPageWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appBarRightside component.
  late AppBarRightsideModel appBarRightsideModel;
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
    appBarRightsideModel = createModel(context, () => AppBarRightsideModel());
    iconButtonModel1 = createModel(context, () => IconButtonModel());
    iconButtonModel2 = createModel(context, () => IconButtonModel());
    iconButtonModel3 = createModel(context, () => IconButtonModel());
    iconButtonModel4 = createModel(context, () => IconButtonModel());
    iconButtonModel5 = createModel(context, () => IconButtonModel());
  }

  @override
  void dispose() {
    appBarRightsideModel.dispose();
    iconButtonModel1.dispose();
    iconButtonModel2.dispose();
    iconButtonModel3.dispose();
    iconButtonModel4.dispose();
    iconButtonModel5.dispose();
  }
}
