import '/flutter_flow/flutter_flow_util.dart';
import 'text_box_widget.dart' show TextBoxWidget;
import 'package:flutter/material.dart';

class TextBoxModel extends FlutterFlowModel<TextBoxWidget> {
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
