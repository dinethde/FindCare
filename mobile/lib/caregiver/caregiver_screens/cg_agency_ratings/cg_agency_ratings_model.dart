import '/caregiver/caregiver_screens/caregiver_rating/caregiver_rating_widget.dart';
import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
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
  // Model for SoftskillCOMP component.
  late SoftskillCOMPModel softskillCOMPModel1;
  // Model for SoftskillCOMP component.
  late SoftskillCOMPModel softskillCOMPModel2;
  // Model for nav_bar component.
  late NavBarModel navBarModel;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
    caregiverRatingModel = createModel(context, () => CaregiverRatingModel());
    softskillCOMPModel1 = createModel(context, () => SoftskillCOMPModel());
    softskillCOMPModel2 = createModel(context, () => SoftskillCOMPModel());
    navBarModel = createModel(context, () => NavBarModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
    caregiverRatingModel.dispose();
    softskillCOMPModel1.dispose();
    softskillCOMPModel2.dispose();
    navBarModel.dispose();
  }
}
