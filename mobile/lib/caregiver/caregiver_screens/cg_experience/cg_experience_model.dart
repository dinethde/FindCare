import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/one_textbtn/one_textbtn_widget.dart';
import '/household/softskill_c_o_m_p/softskill_c_o_m_p_widget.dart';
import 'cg_experience_widget.dart' show CgExperienceWidget;
import 'package:flutter/material.dart';

class CgExperienceModel extends FlutterFlowModel<CgExperienceWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appBarLeftside component.
  late AppBarLeftsideModel appBarLeftsideModel;
  // Model for oneTextbtn component.
  late OneTextbtnModel oneTextbtnModel;
  // Model for SoftskillCOMP component.
  late SoftskillCOMPModel softskillCOMPModel;
  // Model for nav_bar component.
  late NavBarModel navBarModel;

  @override
  void initState(BuildContext context) {
    appBarLeftsideModel = createModel(context, () => AppBarLeftsideModel());
    oneTextbtnModel = createModel(context, () => OneTextbtnModel());
    softskillCOMPModel = createModel(context, () => SoftskillCOMPModel());
    navBarModel = createModel(context, () => NavBarModel());
  }

  @override
  void dispose() {
    appBarLeftsideModel.dispose();
    oneTextbtnModel.dispose();
    softskillCOMPModel.dispose();
    navBarModel.dispose();
  }
}
