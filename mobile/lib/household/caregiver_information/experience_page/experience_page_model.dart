import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/one_textbtn/one_textbtn_widget.dart';
import '/household/softskill_c_o_m_p/softskill_c_o_m_p_widget.dart';
import 'experience_page_widget.dart' show ExperiencePageWidget;
import 'package:flutter/material.dart';

class ExperiencePageModel extends FlutterFlowModel<ExperiencePageWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appBarLeftside component.
  late AppBarLeftsideModel appBarLeftsideModel;
  // Model for oneTextbtn component.
  late OneTextbtnModel oneTextbtnModel;
  // Model for SoftskillCOMP component.
  late SoftskillCOMPModel softskillCOMPModel;

  @override
  void initState(BuildContext context) {
    appBarLeftsideModel = createModel(context, () => AppBarLeftsideModel());
    oneTextbtnModel = createModel(context, () => OneTextbtnModel());
    softskillCOMPModel = createModel(context, () => SoftskillCOMPModel());
  }

  @override
  void dispose() {
    appBarLeftsideModel.dispose();
    oneTextbtnModel.dispose();
    softskillCOMPModel.dispose();
  }
}
