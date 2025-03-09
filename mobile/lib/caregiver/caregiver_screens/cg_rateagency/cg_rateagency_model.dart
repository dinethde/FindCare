import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import 'cg_rateagency_widget.dart' show CgRateagencyWidget;
import 'package:flutter/material.dart';

class CgRateagencyModel extends FlutterFlowModel<CgRateagencyWidget> {
  ///  State fields for stateful widgets in this page.

  final formKey = GlobalKey<FormState>();
  // Model for appbar component.
  late AppbarModel appbarModel;
  // Model for nav_bar component.
  late NavBarModel navBarModel;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
    navBarModel = createModel(context, () => NavBarModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
    navBarModel.dispose();
  }
}
