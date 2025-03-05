import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import 'pc_personalinfo_widget.dart' show PcPersonalinfoWidget;
import 'package:flutter/material.dart';

class PcPersonalinfoModel extends FlutterFlowModel<PcPersonalinfoWidget> {
  ///  State fields for stateful widgets in this page.

  final formKey = GlobalKey<FormState>();
  // Model for appbar component.
  late AppbarModel appbarModel;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
  }
}
