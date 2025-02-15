import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/onboarding/button_half/button_half_widget.dart';
import 'rate_caregiver_widget.dart' show RateCaregiverWidget;
import 'package:flutter/material.dart';

class RateCaregiverModel extends FlutterFlowModel<RateCaregiverWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appBarLeftside component.
  late AppBarLeftsideModel appBarLeftsideModel;
  // Model for ButtonHalf component.
  late ButtonHalfModel buttonHalfModel;

  @override
  void initState(BuildContext context) {
    appBarLeftsideModel = createModel(context, () => AppBarLeftsideModel());
    buttonHalfModel = createModel(context, () => ButtonHalfModel());
  }

  @override
  void dispose() {
    appBarLeftsideModel.dispose();
    buttonHalfModel.dispose();
  }
}
