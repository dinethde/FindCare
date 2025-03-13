import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/household/nav_bar_house/nav_bar_house_widget.dart';
import '/household/softskill_c_o_m_p/softskill_c_o_m_p_widget.dart';
import '/index.dart';
import 'agency_ratings_widget.dart' show AgencyRatingsWidget;
import 'package:flutter/material.dart';

class AgencyRatingsModel extends FlutterFlowModel<AgencyRatingsWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appbar component.
  late AppbarModel appbarModel;
  // Model for SoftskillCOMP component.
  late SoftskillCOMPModel softskillCOMPModel1;
  // Model for SoftskillCOMP component.
  late SoftskillCOMPModel softskillCOMPModel2;
  // Model for SoftskillCOMP component.
  late SoftskillCOMPModel softskillCOMPModel3;
  // Model for nav_barHouse component.
  late NavBarHouseModel navBarHouseModel;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
    softskillCOMPModel1 = createModel(context, () => SoftskillCOMPModel());
    softskillCOMPModel2 = createModel(context, () => SoftskillCOMPModel());
    softskillCOMPModel3 = createModel(context, () => SoftskillCOMPModel());
    navBarHouseModel = createModel(context, () => NavBarHouseModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
    softskillCOMPModel1.dispose();
    softskillCOMPModel2.dispose();
    softskillCOMPModel3.dispose();
    navBarHouseModel.dispose();
  }
}
