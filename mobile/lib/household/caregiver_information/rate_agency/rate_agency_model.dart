import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/household/nav_bar_house/nav_bar_house_widget.dart';
import 'rate_agency_widget.dart' show RateAgencyWidget;
import 'package:flutter/material.dart';

class RateAgencyModel extends FlutterFlowModel<RateAgencyWidget> {
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
