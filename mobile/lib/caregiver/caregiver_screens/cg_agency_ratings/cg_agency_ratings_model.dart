import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/household/one_textbtn/one_textbtn_widget.dart';
import '/household/softskill_c_o_m_p/softskill_c_o_m_p_widget.dart';
import '/onboarding/button_half/button_half_widget.dart';
import 'cg_agency_ratings_widget.dart' show CgAgencyRatingsWidget;
import 'package:flutter/material.dart';

class CgAgencyRatingsModel extends FlutterFlowModel<CgAgencyRatingsWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appbar component.
  late AppbarModel appbarModel;
  // Model for ButtonHalf component.
  late ButtonHalfModel buttonHalfModel;
  // Model for oneTextbtn component.
  late OneTextbtnModel oneTextbtnModel;
  // Model for SoftskillCOMP component.
  late SoftskillCOMPModel softskillCOMPModel;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
    buttonHalfModel = createModel(context, () => ButtonHalfModel());
    oneTextbtnModel = createModel(context, () => OneTextbtnModel());
    softskillCOMPModel = createModel(context, () => SoftskillCOMPModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
    buttonHalfModel.dispose();
    oneTextbtnModel.dispose();
    softskillCOMPModel.dispose();
  }
}
