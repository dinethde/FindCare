import '/flutter_flow/flutter_flow_util.dart';
import 'text_boxhalf_widget.dart' show TextBoxhalfWidget;
import 'package:flutter/material.dart';

class TextBoxhalfModel extends FlutterFlowModel<TextBoxhalfWidget> {
  ///  State fields for stateful widgets in this component.

  // State field(s) for TextField widget.
  FocusNode? textFieldFocusNode;
  TextEditingController? textController;
  String? Function(BuildContext, String?)? textControllerValidator;

  @override
  void initState(BuildContext context) {}

  @override
  void dispose() {
    textFieldFocusNode?.dispose();
    textController?.dispose();
  }
}
