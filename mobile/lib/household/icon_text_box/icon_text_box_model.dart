import '/flutter_flow/flutter_flow_util.dart';
import 'icon_text_box_widget.dart' show IconTextBoxWidget;
import 'package:flutter/material.dart';

class IconTextBoxModel extends FlutterFlowModel<IconTextBoxWidget> {
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
