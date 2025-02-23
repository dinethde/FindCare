import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/nav_bar_house/nav_bar_house_widget.dart';
import '/household/skill_box/skill_box_widget.dart';
import 'specializedin_page_widget.dart' show SpecializedinPageWidget;
import 'package:flutter/material.dart';

class SpecializedinPageModel extends FlutterFlowModel<SpecializedinPageWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appBarLeftside component.
  late AppBarLeftsideModel appBarLeftsideModel;
  // Model for SkillBox component.
  late SkillBoxModel skillBoxModel;
  // Model for nav_barHouse component.
  late NavBarHouseModel navBarHouseModel;

  @override
  void initState(BuildContext context) {
    appBarLeftsideModel = createModel(context, () => AppBarLeftsideModel());
    skillBoxModel = createModel(context, () => SkillBoxModel());
    navBarHouseModel = createModel(context, () => NavBarHouseModel());
  }

  @override
  void dispose() {
    appBarLeftsideModel.dispose();
    skillBoxModel.dispose();
    navBarHouseModel.dispose();
  }
}
