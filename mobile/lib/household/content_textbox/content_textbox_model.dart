import '/flutter_flow/flutter_flow_util.dart';
import 'content_textbox_widget.dart' show ContentTextboxWidget;
import 'package:flutter/material.dart';

class ContentTextboxModel extends FlutterFlowModel<ContentTextboxWidget> {
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
