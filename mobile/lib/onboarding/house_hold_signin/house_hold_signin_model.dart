import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import '/onboarding/invisible_button/invisible_button_widget.dart';
import '/onboarding/text_box/text_box_widget.dart';
import 'house_hold_signin_widget.dart' show HouseHoldSigninWidget;
import 'package:flutter/material.dart';

class HouseHoldSigninModel extends FlutterFlowModel<HouseHoldSigninWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for TextBox component.
  late TextBoxModel textBoxModel1;
  // Model for TextBox component.
  late TextBoxModel textBoxModel2;
  // Model for invisibleButton component.
  late InvisibleButtonModel invisibleButtonModel1;
  // Model for Button component.
  late ButtonModel buttonModel;
  // Model for invisibleButton component.
  late InvisibleButtonModel invisibleButtonModel2;

  @override
  void initState(BuildContext context) {
    textBoxModel1 = createModel(context, () => TextBoxModel());
    textBoxModel2 = createModel(context, () => TextBoxModel());
    invisibleButtonModel1 = createModel(context, () => InvisibleButtonModel());
    buttonModel = createModel(context, () => ButtonModel());
    invisibleButtonModel2 = createModel(context, () => InvisibleButtonModel());
  }

  @override
  void dispose() {
    textBoxModel1.dispose();
    textBoxModel2.dispose();
    invisibleButtonModel1.dispose();
    buttonModel.dispose();
    invisibleButtonModel2.dispose();
  }
}
