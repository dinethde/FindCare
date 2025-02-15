import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import 'onboard_role_select_widget.dart' show OnboardRoleSelectWidget;
import 'package:flutter/material.dart';

class OnboardRoleSelectModel extends FlutterFlowModel<OnboardRoleSelectWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for Button component.
  late ButtonModel buttonModel;

  @override
  void initState(BuildContext context) {
    buttonModel = createModel(context, () => ButtonModel());
  }

  @override
  void dispose() {
    buttonModel.dispose();
  }
}
