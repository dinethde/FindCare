import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/household/one_textbtn/one_textbtn_widget.dart';
import '/household/softskill_c_o_m_p/softskill_c_o_m_p_widget.dart';
import 'agency_ratings_widget.dart' show AgencyRatingsWidget;
import 'package:flutter/material.dart';

class AgencyRatingsModel extends FlutterFlowModel<AgencyRatingsWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appbar component.
  late AppbarModel appbarModel;
  // Model for oneTextbtn component.
  late OneTextbtnModel oneTextbtnModel;
  // Model for SoftskillCOMP component.
  late SoftskillCOMPModel softskillCOMPModel;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
    oneTextbtnModel = createModel(context, () => OneTextbtnModel());
    softskillCOMPModel = createModel(context, () => SoftskillCOMPModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
    oneTextbtnModel.dispose();
    softskillCOMPModel.dispose();
  }
}
