import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import '/onboarding/invisible_buttonashe/invisible_buttonashe_widget.dart';
import 'patient_first_page_widget.dart' show PatientFirstPageWidget;
import 'package:flutter/material.dart';

class PatientFirstPageModel extends FlutterFlowModel<PatientFirstPageWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for Button component.
  late ButtonModel buttonModel;
  // Model for invisibleButtonashe component.
  late InvisibleButtonasheModel invisibleButtonasheModel;

  @override
  void initState(BuildContext context) {
    buttonModel = createModel(context, () => ButtonModel());
    invisibleButtonasheModel =
        createModel(context, () => InvisibleButtonasheModel());
  }

  @override
  void dispose() {
    buttonModel.dispose();
    invisibleButtonasheModel.dispose();
  }
}
