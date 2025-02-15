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
  late ContentTextboxModel contentTextboxModel1;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel;
  // Model for ContentTextbox component.
  late ContentTextboxModel contentTextboxModel2;
  // Model for ContentTextbox component.
  late ContentTextboxModel contentTextboxModel3;

  @override
  void initState(BuildContext context) {
    appBarLeftsideModel = createModel(context, () => AppBarLeftsideModel());
    contentTextboxModel1 = createModel(context, () => ContentTextboxModel());
    iconButtonModel = createModel(context, () => IconButtonModel());
    contentTextboxModel2 = createModel(context, () => ContentTextboxModel());
    contentTextboxModel3 = createModel(context, () => ContentTextboxModel());
  }

  @override
  void dispose() {
    appBarLeftsideModel.dispose();
    contentTextboxModel1.dispose();
    iconButtonModel.dispose();
    contentTextboxModel2.dispose();
    contentTextboxModel3.dispose();
  }
}
