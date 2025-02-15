import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/form_field_controller.dart';
import '/onboarding/button/button_widget.dart';
import '/onboarding/button_half/button_half_widget.dart';
import 'patient_requirements_widget.dart' show PatientRequirementsWidget;
import 'package:flutter/material.dart';

class PatientRequirementsModel
    extends FlutterFlowModel<PatientRequirementsWidget> {
  ///  State fields for stateful widgets in this page.

  // State field(s) for ChoiceChips widget.
  FormFieldController<List<String>>? choiceChipsValueController;
  List<String>? get choiceChipsValues => choiceChipsValueController?.value;
  set choiceChipsValues(List<String>? val) =>
      choiceChipsValueController?.value = val;
  // Model for ButtonHalf component.
  late ButtonHalfModel buttonHalfModel;
  // Model for Button component.
  late ButtonModel buttonModel;

  @override
  void initState(BuildContext context) {
    buttonHalfModel = createModel(context, () => ButtonHalfModel());
    buttonModel = createModel(context, () => ButtonModel());
  }

  @override
  void dispose() {
    buttonHalfModel.dispose();
    buttonModel.dispose();
  }
}
