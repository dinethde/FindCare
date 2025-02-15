import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import 'test6_widget.dart' show Test6Widget;
import 'package:flutter/material.dart';

class Test6Model extends FlutterFlowModel<Test6Widget> {
  ///  State fields for stateful widgets in this component.

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
