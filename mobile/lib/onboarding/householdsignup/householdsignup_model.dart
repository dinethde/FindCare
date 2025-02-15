import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import '/onboarding/invisible_button/invisible_button_widget.dart';
import '/onboarding/text_box/text_box_widget.dart';
import '/onboarding/text_boxhalf/text_boxhalf_widget.dart';
import 'householdsignup_widget.dart' show HouseholdsignupWidget;
import 'package:flutter/material.dart';

class HouseholdsignupModel extends FlutterFlowModel<HouseholdsignupWidget> {
  ///  State fields for stateful widgets in this page.

  final formKey = GlobalKey<FormState>();
  // Model for TextBox component.
  late TextBoxModel textBoxModel1;
  // Model for TextBoxhalf component.
  late TextBoxhalfModel textBoxhalfModel1;
  // Model for TextBoxhalf component.
  late TextBoxhalfModel textBoxhalfModel2;
  // Model for TextBox component.
  late TextBoxModel textBoxModel2;
  // Model for TextBox component.
  late TextBoxModel textBoxModel3;
  // Model for TextBox component.
  late TextBoxModel textBoxModel4;
  // Model for TextBox component.
  late TextBoxModel textBoxModel5;
  // State field(s) for Checkbox widget.
  bool? checkboxValue;
  // Model for Button component.
  late ButtonModel buttonModel;
  // Model for invisibleButton component.
  late InvisibleButtonModel invisibleButtonModel;

  @override
  void initState(BuildContext context) {
    textBoxModel1 = createModel(context, () => TextBoxModel());
    textBoxhalfModel1 = createModel(context, () => TextBoxhalfModel());
    textBoxhalfModel2 = createModel(context, () => TextBoxhalfModel());
    textBoxModel2 = createModel(context, () => TextBoxModel());
    textBoxModel3 = createModel(context, () => TextBoxModel());
    textBoxModel4 = createModel(context, () => TextBoxModel());
    textBoxModel5 = createModel(context, () => TextBoxModel());
    buttonModel = createModel(context, () => ButtonModel());
    invisibleButtonModel = createModel(context, () => InvisibleButtonModel());
  }

  @override
  void dispose() {
    textBoxModel1.dispose();
    textBoxhalfModel1.dispose();
    textBoxhalfModel2.dispose();
    textBoxModel2.dispose();
    textBoxModel3.dispose();
    textBoxModel4.dispose();
    textBoxModel5.dispose();
    buttonModel.dispose();
    invisibleButtonModel.dispose();
  }
}
