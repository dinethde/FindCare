import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/invisible_button/invisible_button_widget.dart';
import '/onboarding/text_box/text_box_widget.dart';
import '/index.dart';
import 'house_hold_signin_widget.dart' show HouseHoldSigninWidget;
import 'package:flutter/material.dart';

class HouseHoldSigninModel extends FlutterFlowModel<HouseHoldSigninWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for TextBox component.
  late TextBoxModel textBoxModel1;
  // Model for TextBox component.
  late TextBoxModel textBoxModel2;
  // Model for invisibleButton component.
  late InvisibleButtonModel invisibleButtonModel;

  @override
  void initState(BuildContext context) {
    textBoxModel1 = createModel(context, () => TextBoxModel());
    textBoxModel2 = createModel(context, () => TextBoxModel());
    invisibleButtonModel = createModel(context, () => InvisibleButtonModel());
  }

  @override
  void dispose() {
    textBoxModel1.dispose();
    textBoxModel2.dispose();
    invisibleButtonModel.dispose();
  }
}
