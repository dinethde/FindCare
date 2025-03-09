import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/household/nav_bar_house/nav_bar_house_widget.dart';
import '/household/skill_box/skill_box_widget.dart';
import 'academic_info_widget.dart' show AcademicInfoWidget;
import 'package:flutter/material.dart';

class AcademicInfoModel extends FlutterFlowModel<AcademicInfoWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appbar component.
  late AppbarModel appbarModel;
  // Model for SkillBox component.
  late SkillBoxModel skillBoxModel1;
  // Model for SkillBox component.
  late SkillBoxModel skillBoxModel2;
  // Model for nav_barHouse component.
  late NavBarHouseModel navBarHouseModel;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
    skillBoxModel1 = createModel(context, () => SkillBoxModel());
    skillBoxModel2 = createModel(context, () => SkillBoxModel());
    navBarHouseModel = createModel(context, () => NavBarHouseModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
    skillBoxModel1.dispose();
    skillBoxModel2.dispose();
    navBarHouseModel.dispose();
  }
}
