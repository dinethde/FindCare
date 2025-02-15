import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import 'care_type_widget.dart' show CareTypeWidget;
import 'package:flutter/material.dart';

class CareTypeModel extends FlutterFlowModel<CareTypeWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for Button component.
  late ButtonModel buttonModel;

  @override
  void initState(BuildContext context) {
    buttonModel = createModel(context, () => ButtonModel());
  }

  @override
  void dispose() {
    buttonModel.dispose();
  }
}
