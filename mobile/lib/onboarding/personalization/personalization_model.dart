import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/text_box/text_box_widget.dart';
import '/index.dart';
import 'personalization_widget.dart' show PersonalizationWidget;
import 'package:flutter/material.dart';

class PersonalizationModel extends FlutterFlowModel<PersonalizationWidget> {
  ///  State fields for stateful widgets in this page.

  final formKey = GlobalKey<FormState>();
  // Model for TextBox component.
  late TextBoxModel textBoxModel1;
  // Model for TextBox component.
  late TextBoxModel textBoxModel2;
  // Model for TextBox component.
  late TextBoxModel textBoxModel3;
  // State field(s) for Checkbox widget.
  bool? checkboxValue;

  @override
  void initState(BuildContext context) {
    textBoxModel1 = createModel(context, () => TextBoxModel());
    textBoxModel2 = createModel(context, () => TextBoxModel());
    textBoxModel3 = createModel(context, () => TextBoxModel());
  }

  @override
  void dispose() {
    textBoxModel1.dispose();
    textBoxModel2.dispose();
    textBoxModel3.dispose();
  }
}
