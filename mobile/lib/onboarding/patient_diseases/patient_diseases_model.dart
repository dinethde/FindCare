import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import '/onboarding/button_half/button_half_widget.dart';
import '/onboarding/dropdown/dropdown_widget.dart';
import 'patient_diseases_widget.dart' show PatientDiseasesWidget;
import 'package:flutter/material.dart';

class PatientDiseasesModel extends FlutterFlowModel<PatientDiseasesWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for dropdown component.
  late DropdownModel dropdownModel1;
  // Model for dropdown component.
  late DropdownModel dropdownModel2;
  // Model for dropdown component.
  late DropdownModel dropdownModel3;
  // Model for dropdown component.
  late DropdownModel dropdownModel4;
  // Model for ButtonHalf component.
  late ButtonHalfModel buttonHalfModel;
  // Model for Button component.
  late ButtonModel buttonModel;

  @override
  void initState(BuildContext context) {
    dropdownModel1 = createModel(context, () => DropdownModel());
    dropdownModel2 = createModel(context, () => DropdownModel());
    dropdownModel3 = createModel(context, () => DropdownModel());
    dropdownModel4 = createModel(context, () => DropdownModel());
    buttonHalfModel = createModel(context, () => ButtonHalfModel());
    buttonModel = createModel(context, () => ButtonModel());
  }

  @override
  void dispose() {
    dropdownModel1.dispose();
    dropdownModel2.dispose();
    dropdownModel3.dispose();
    dropdownModel4.dispose();
    buttonHalfModel.dispose();
    buttonModel.dispose();
  }
}
