import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/content_textbox/content_textbox_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import 'pc_requirements_widget.dart' show PcRequirementsWidget;
import 'package:flutter/material.dart';

class PcRequirementsModel extends FlutterFlowModel<PcRequirementsWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appBarLeftside component.
  late AppBarLeftsideModel appBarLeftsideModel;
  // Model for ContentTextbox component.
  late ContentTextboxModel contentTextboxModel1;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel1;
  // Model for ContentTextbox component.
  late ContentTextboxModel contentTextboxModel2;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel2;
  // Model for nav_bar component.
  late NavBarModel navBarModel;

  @override
  void initState(BuildContext context) {
    appBarLeftsideModel = createModel(context, () => AppBarLeftsideModel());
    contentTextboxModel1 = createModel(context, () => ContentTextboxModel());
    iconButtonModel1 = createModel(context, () => IconButtonModel());
    contentTextboxModel2 = createModel(context, () => ContentTextboxModel());
    iconButtonModel2 = createModel(context, () => IconButtonModel());
    navBarModel = createModel(context, () => NavBarModel());
  }

  @override
  void dispose() {
    appBarLeftsideModel.dispose();
    contentTextboxModel1.dispose();
    iconButtonModel1.dispose();
    contentTextboxModel2.dispose();
    iconButtonModel2.dispose();
    navBarModel.dispose();
  }
}
