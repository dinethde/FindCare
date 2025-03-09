import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/content_textbox/content_textbox_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import 'caregiver_requirements_widget.dart' show CaregiverRequirementsWidget;
import 'package:flutter/material.dart';

class CaregiverRequirementsModel
    extends FlutterFlowModel<CaregiverRequirementsWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appBarLeftside component.
  late AppBarLeftsideModel appBarLeftsideModel;
  // Model for ContentTextbox component.
  late ContentTextboxModel contentTextboxModel;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel;

  @override
  void initState(BuildContext context) {
    appBarLeftsideModel = createModel(context, () => AppBarLeftsideModel());
    contentTextboxModel = createModel(context, () => ContentTextboxModel());
    iconButtonModel = createModel(context, () => IconButtonModel());
  }

  @override
  void dispose() {
    appBarLeftsideModel.dispose();
    contentTextboxModel.dispose();
    iconButtonModel.dispose();
  }
}
