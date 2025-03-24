import '/flutter_flow/flutter_flow_util.dart';
import '/testing/task4new_copy/task4new_copy_widget.dart';
import 'testing_page_widget.dart' show TestingPageWidget;
import 'package:flutter/material.dart';

class TestingPageModel extends FlutterFlowModel<TestingPageWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for task4newCopy component.
  late Task4newCopyModel task4newCopyModel;

  @override
  void initState(BuildContext context) {
    task4newCopyModel = createModel(context, () => Task4newCopyModel());
  }

  @override
  void dispose() {
    task4newCopyModel.dispose();
  }
}
