import '/componets_approved/select_task/select_task_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/testing/todaystasks/todaystasks_widget.dart';
import 'todotask_widget.dart' show TodotaskWidget;
import 'package:flutter/material.dart';

class TodotaskModel extends FlutterFlowModel<TodotaskWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appbar component.
  late AppbarModel appbarModel;
  // Model for todaystasks component.
  late TodaystasksModel todaystasksModel;
  // Model for SelectTask component.
  late SelectTaskModel selectTaskModel1;
  // Model for SelectTask component.
  late SelectTaskModel selectTaskModel2;
  // Model for SelectTask component.
  late SelectTaskModel selectTaskModel3;
  // Model for SelectTask component.
  late SelectTaskModel selectTaskModel4;
  // Model for SelectTask component.
  late SelectTaskModel selectTaskModel5;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
    todaystasksModel = createModel(context, () => TodaystasksModel());
    selectTaskModel1 = createModel(context, () => SelectTaskModel());
    selectTaskModel2 = createModel(context, () => SelectTaskModel());
    selectTaskModel3 = createModel(context, () => SelectTaskModel());
    selectTaskModel4 = createModel(context, () => SelectTaskModel());
    selectTaskModel5 = createModel(context, () => SelectTaskModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
    todaystasksModel.dispose();
    selectTaskModel1.dispose();
    selectTaskModel2.dispose();
    selectTaskModel3.dispose();
    selectTaskModel4.dispose();
    selectTaskModel5.dispose();
  }
}
