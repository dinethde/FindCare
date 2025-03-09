import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/household/nav_bar_house/nav_bar_house_widget.dart';
import 'agency_general_info_widget.dart' show AgencyGeneralInfoWidget;
import 'package:flutter/material.dart';

class AgencyGeneralInfoModel extends FlutterFlowModel<AgencyGeneralInfoWidget> {
  ///  State fields for stateful widgets in this page.

  final formKey = GlobalKey<FormState>();
  // Model for appbar component.
  late AppbarModel appbarModel;
  // Model for nav_barHouse component.
  late NavBarHouseModel navBarHouseModel;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
    navBarHouseModel = createModel(context, () => NavBarHouseModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
    navBarHouseModel.dispose();
  }
}
