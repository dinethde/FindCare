import '/componets_approved/delete_select_task/delete_select_task_widget.dart';
import '/componets_approved/select_task/select_task_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/testing/todaystasks/todaystasks_widget.dart';
import 'todotask2_widget.dart' show Todotask2Widget;
import 'package:flutter/material.dart';

class Todotask2Model extends FlutterFlowModel<Todotask2Widget> {
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
  // Model for DeleteSelectTask component.
  late DeleteSelectTaskModel deleteSelectTaskModel1;
  // Model for DeleteSelectTask component.
  late DeleteSelectTaskModel deleteSelectTaskModel2;
  // Model for DeleteSelectTask component.
  late DeleteSelectTaskModel deleteSelectTaskModel3;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
    todaystasksModel = createModel(context, () => TodaystasksModel());
    selectTaskModel1 = createModel(context, () => SelectTaskModel());
    selectTaskModel2 = createModel(context, () => SelectTaskModel());
    selectTaskModel3 = createModel(context, () => SelectTaskModel());
    deleteSelectTaskModel1 =
        createModel(context, () => DeleteSelectTaskModel());
    deleteSelectTaskModel2 =
        createModel(context, () => DeleteSelectTaskModel());
    deleteSelectTaskModel3 =
        createModel(context, () => DeleteSelectTaskModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
    todaystasksModel.dispose();
    selectTaskModel1.dispose();
    selectTaskModel2.dispose();
    selectTaskModel3.dispose();
    deleteSelectTaskModel1.dispose();
    deleteSelectTaskModel2.dispose();
    deleteSelectTaskModel3.dispose();
  }
}
