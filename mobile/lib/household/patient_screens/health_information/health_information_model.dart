import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/content_textbox/content_textbox_widget.dart';
import '/household/nav_bar_house/nav_bar_house_widget.dart';
import '/household/one_textbtn/one_textbtn_widget.dart';
import 'health_information_widget.dart' show HealthInformationWidget;
import 'package:flutter/material.dart';

class HealthInformationModel extends FlutterFlowModel<HealthInformationWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appBarLeftside component.
  late AppBarLeftsideModel appBarLeftsideModel;
  // Model for ContentTextbox component.
  late ContentTextboxModel contentTextboxModel1;
  // Model for oneTextbtn component.
  late OneTextbtnModel oneTextbtnModel1;
  // Model for ContentTextbox component.
  late ContentTextboxModel contentTextboxModel2;
  // Model for oneTextbtn component.
  late OneTextbtnModel oneTextbtnModel2;
  // Model for nav_barHouse component.
  late NavBarHouseModel navBarHouseModel;

  @override
  void initState(BuildContext context) {
    appBarLeftsideModel = createModel(context, () => AppBarLeftsideModel());
    contentTextboxModel1 = createModel(context, () => ContentTextboxModel());
    oneTextbtnModel1 = createModel(context, () => OneTextbtnModel());
    contentTextboxModel2 = createModel(context, () => ContentTextboxModel());
    oneTextbtnModel2 = createModel(context, () => OneTextbtnModel());
    navBarHouseModel = createModel(context, () => NavBarHouseModel());
  }

  @override
  void dispose() {
    appBarLeftsideModel.dispose();
    contentTextboxModel1.dispose();
    oneTextbtnModel1.dispose();
    contentTextboxModel2.dispose();
    oneTextbtnModel2.dispose();
    navBarHouseModel.dispose();
  }
}
