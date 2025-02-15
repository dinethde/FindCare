import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/household/content_textbox/content_textbox_widget.dart';
import 'cg_availability_widget.dart' show CgAvailabilityWidget;
import 'package:flutter/material.dart';

class CgAvailabilityModel extends FlutterFlowModel<CgAvailabilityWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appbar component.
  late AppbarModel appbarModel;
  // Model for ContentTextbox component.
  late ContentTextboxModel contentTextboxModel1;
  // Model for ContentTextbox component.
  late ContentTextboxModel contentTextboxModel2;
  // Model for ContentTextbox component.
  late ContentTextboxModel contentTextboxModel3;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
    contentTextboxModel1 = createModel(context, () => ContentTextboxModel());
    contentTextboxModel2 = createModel(context, () => ContentTextboxModel());
    contentTextboxModel3 = createModel(context, () => ContentTextboxModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
    contentTextboxModel1.dispose();
    contentTextboxModel2.dispose();
    contentTextboxModel3.dispose();
  }
}
