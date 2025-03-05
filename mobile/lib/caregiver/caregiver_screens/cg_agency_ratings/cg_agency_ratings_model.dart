import '/caregiver/caregiver_screens/caregiver_rating/caregiver_rating_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/household/one_textbtn/one_textbtn_widget.dart';
import '/household/softskill_c_o_m_p/softskill_c_o_m_p_widget.dart';
import '/index.dart';
import 'cg_agency_ratings_widget.dart' show CgAgencyRatingsWidget;
import 'package:flutter/material.dart';

class CgAgencyRatingsModel extends FlutterFlowModel<CgAgencyRatingsWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appbar component.
  late AppbarModel appbarModel;
  // Model for caregiverRating component.
  late CaregiverRatingModel caregiverRatingModel;
  // Model for oneTextbtn component.
  late OneTextbtnModel oneTextbtnModel;
  // Model for SoftskillCOMP component.
  late SoftskillCOMPModel softskillCOMPModel;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
    caregiverRatingModel = createModel(context, () => CaregiverRatingModel());
    oneTextbtnModel = createModel(context, () => OneTextbtnModel());
    softskillCOMPModel = createModel(context, () => SoftskillCOMPModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
    caregiverRatingModel.dispose();
    oneTextbtnModel.dispose();
    softskillCOMPModel.dispose();
  }
}
