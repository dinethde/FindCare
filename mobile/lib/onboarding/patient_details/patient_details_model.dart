import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/text_box/text_box_widget.dart';
import 'patient_details_widget.dart' show PatientDetailsWidget;
import 'package:flutter/material.dart';

class PatientDetailsModel extends FlutterFlowModel<PatientDetailsWidget> {
  ///  State fields for stateful widgets in this page.

  final formKey = GlobalKey<FormState>();
  // Model for TextBox component.
  late TextBoxModel textBoxModel1;
  // Model for TextBox component.
  late TextBoxModel textBoxModel2;
  // Model for TextBox component.
  late TextBoxModel textBoxModel3;
  // Model for TextBox component.
  late TextBoxModel textBoxModel4;
  // Model for TextBox component.
  late TextBoxModel textBoxModel5;

  @override
  void initState(BuildContext context) {
    textBoxModel1 = createModel(context, () => TextBoxModel());
    textBoxModel2 = createModel(context, () => TextBoxModel());
    textBoxModel3 = createModel(context, () => TextBoxModel());
    textBoxModel4 = createModel(context, () => TextBoxModel());
    textBoxModel5 = createModel(context, () => TextBoxModel());
  }

  @override
  void dispose() {
    textBoxModel1.dispose();
    textBoxModel2.dispose();
    textBoxModel3.dispose();
    textBoxModel4.dispose();
    textBoxModel5.dispose();
  }
}
