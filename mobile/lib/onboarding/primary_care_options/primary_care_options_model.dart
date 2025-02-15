import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import '/onboarding/button_half/button_half_widget.dart';
import '/onboarding/selection_button/selection_button_widget.dart';
import 'primary_care_options_widget.dart' show PrimaryCareOptionsWidget;
import 'package:flutter/material.dart';

class PrimaryCareOptionsModel
    extends FlutterFlowModel<PrimaryCareOptionsWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for selectionButton component.
  late SelectionButtonModel selectionButtonModel1;
  // Model for selectionButton component.
  late SelectionButtonModel selectionButtonModel2;
  // Model for selectionButton component.
  late SelectionButtonModel selectionButtonModel3;
  // Model for selectionButton component.
  late SelectionButtonModel selectionButtonModel4;
  // Model for selectionButton component.
  late SelectionButtonModel selectionButtonModel5;
  // Model for ButtonHalf component.
  late ButtonHalfModel buttonHalfModel;
  // Model for Button component.
  late ButtonModel buttonModel;

  @override
  void initState(BuildContext context) {
    selectionButtonModel1 = createModel(context, () => SelectionButtonModel());
    selectionButtonModel2 = createModel(context, () => SelectionButtonModel());
    selectionButtonModel3 = createModel(context, () => SelectionButtonModel());
    selectionButtonModel4 = createModel(context, () => SelectionButtonModel());
    selectionButtonModel5 = createModel(context, () => SelectionButtonModel());
    buttonHalfModel = createModel(context, () => ButtonHalfModel());
    buttonModel = createModel(context, () => ButtonModel());
  }

  @override
  void dispose() {
    selectionButtonModel1.dispose();
    selectionButtonModel2.dispose();
    selectionButtonModel3.dispose();
    selectionButtonModel4.dispose();
    selectionButtonModel5.dispose();
    buttonHalfModel.dispose();
    buttonModel.dispose();
  }
}
