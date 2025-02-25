import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/content_textbox/content_textbox_widget.dart';
import '/household/one_textbtn/one_textbtn_widget.dart';
import 'pc_requirements_widget.dart' show PcRequirementsWidget;
import 'package:flutter/material.dart';

class PcRequirementsModel extends FlutterFlowModel<PcRequirementsWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appBarLeftside component.
  late AppBarLeftsideModel appBarLeftsideModel;
  // Model for ContentTextbox component.
  late ContentTextboxModel contentTextboxModel1;
  // Model for oneTextbtn component.
  late OneTextbtnModel oneTextbtnModel;
  // Model for ContentTextbox component.
  late ContentTextboxModel contentTextboxModel2;
  // Model for nav_bar component.
  late NavBarModel navBarModel;

  @override
  void initState(BuildContext context) {
    appBarLeftsideModel = createModel(context, () => AppBarLeftsideModel());
    contentTextboxModel1 = createModel(context, () => ContentTextboxModel());
    oneTextbtnModel = createModel(context, () => OneTextbtnModel());
    contentTextboxModel2 = createModel(context, () => ContentTextboxModel());
    navBarModel = createModel(context, () => NavBarModel());
  }

  @override
  void dispose() {
    appBarLeftsideModel.dispose();
    contentTextboxModel1.dispose();
    oneTextbtnModel.dispose();
    contentTextboxModel2.dispose();
    navBarModel.dispose();
  }
}
