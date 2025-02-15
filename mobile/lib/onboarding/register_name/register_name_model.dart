import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import '/onboarding/invisible_button/invisible_button_widget.dart';
import '/onboarding/text_box/text_box_widget.dart';
import 'register_name_widget.dart' show RegisterNameWidget;
import 'package:flutter/material.dart';

class RegisterNameModel extends FlutterFlowModel<RegisterNameWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for TextBox component.
  late TextBoxModel textBoxModel;
  // Model for Button component.
  late ButtonModel buttonModel;
  // Model for invisibleButton component.
  late InvisibleButtonModel invisibleButtonModel;

  @override
  void initState(BuildContext context) {
    textBoxModel = createModel(context, () => TextBoxModel());
    buttonModel = createModel(context, () => ButtonModel());
    invisibleButtonModel = createModel(context, () => InvisibleButtonModel());
  }

  @override
  void dispose() {
    textBoxModel.dispose();
    buttonModel.dispose();
    invisibleButtonModel.dispose();
  }
}
