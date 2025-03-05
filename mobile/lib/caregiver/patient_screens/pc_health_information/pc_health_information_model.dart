import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/content_textbox/content_textbox_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import 'pc_health_information_widget.dart' show PcHealthInformationWidget;
import 'package:flutter/material.dart';

class PcHealthInformationModel
    extends FlutterFlowModel<PcHealthInformationWidget> {
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

  @override
  void initState(BuildContext context) {
    appBarLeftsideModel = createModel(context, () => AppBarLeftsideModel());
    contentTextboxModel1 = createModel(context, () => ContentTextboxModel());
    iconButtonModel1 = createModel(context, () => IconButtonModel());
    contentTextboxModel2 = createModel(context, () => ContentTextboxModel());
    iconButtonModel2 = createModel(context, () => IconButtonModel());
  }

  @override
  void dispose() {
    appBarLeftsideModel.dispose();
    contentTextboxModel1.dispose();
    iconButtonModel1.dispose();
    contentTextboxModel2.dispose();
    iconButtonModel2.dispose();
  }
}
