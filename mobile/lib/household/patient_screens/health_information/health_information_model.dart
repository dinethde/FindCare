import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/content_textbox/content_textbox_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import 'health_information_widget.dart' show HealthInformationWidget;
import 'package:flutter/material.dart';

class HealthInformationModel extends FlutterFlowModel<HealthInformationWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appBarLeftside component.
  late AppBarLeftsideModel appBarLeftsideModel;
  // Model for ContentTextbox component.
  late ContentTextboxModel contentTextboxModel1;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel;
  // Model for ContentTextbox component.
  late ContentTextboxModel contentTextboxModel2;

  @override
  void initState(BuildContext context) {
    appBarLeftsideModel = createModel(context, () => AppBarLeftsideModel());
    contentTextboxModel1 = createModel(context, () => ContentTextboxModel());
    iconButtonModel = createModel(context, () => IconButtonModel());
    contentTextboxModel2 = createModel(context, () => ContentTextboxModel());
  }

  @override
  void dispose() {
    appBarLeftsideModel.dispose();
    contentTextboxModel1.dispose();
    iconButtonModel.dispose();
    contentTextboxModel2.dispose();
  }
}
