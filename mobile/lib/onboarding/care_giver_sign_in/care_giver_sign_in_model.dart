import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import '/onboarding/invisible_button/invisible_button_widget.dart';
import '/onboarding/text_box/text_box_widget.dart';
import 'care_giver_sign_in_widget.dart' show CareGiverSignInWidget;
import 'package:flutter/material.dart';

class CareGiverSignInModel extends FlutterFlowModel<CareGiverSignInWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for TextBox component.
  late TextBoxModel textBoxModel1;
  // Model for TextBox component.
  late TextBoxModel textBoxModel2;
  // Model for invisibleButton component.
  late InvisibleButtonModel invisibleButtonModel;
  // Model for Button component.
  late ButtonModel buttonModel;

  @override
  void initState(BuildContext context) {
    textBoxModel1 = createModel(context, () => TextBoxModel());
    textBoxModel2 = createModel(context, () => TextBoxModel());
    invisibleButtonModel = createModel(context, () => InvisibleButtonModel());
    buttonModel = createModel(context, () => ButtonModel());
  }

  @override
  void dispose() {
    textBoxModel1.dispose();
    textBoxModel2.dispose();
    invisibleButtonModel.dispose();
    buttonModel.dispose();
  }
}
