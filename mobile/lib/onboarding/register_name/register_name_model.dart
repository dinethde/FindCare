import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/text_box/text_box_widget.dart';
import '/index.dart';
import 'register_name_widget.dart' show RegisterNameWidget;
import 'package:flutter/material.dart';

class RegisterNameModel extends FlutterFlowModel<RegisterNameWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for TextBox component.
  late TextBoxModel textBoxModel;

  @override
  void initState(BuildContext context) {
    textBoxModel = createModel(context, () => TextBoxModel());
  }

  @override
  void dispose() {
    textBoxModel.dispose();
  }
}
