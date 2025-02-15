import '/flutter_flow/flutter_flow_util.dart';
import 'skill_search_bar_widget.dart' show SkillSearchBarWidget;
import 'package:flutter/material.dart';

class SkillSearchBarModel extends FlutterFlowModel<SkillSearchBarWidget> {
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
