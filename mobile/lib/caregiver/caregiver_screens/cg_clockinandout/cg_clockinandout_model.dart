import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/componets_approved/clock_i_n_o_u_t/clock_i_n_o_u_t_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/onboarding/invisible_button/invisible_button_widget.dart';
import 'cg_clockinandout_widget.dart' show CgClockinandoutWidget;
import 'package:flutter/material.dart';

class CgClockinandoutModel extends FlutterFlowModel<CgClockinandoutWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for appbar component.
  late AppbarModel appbarModel;
  // Model for invisibleButton component.
  late InvisibleButtonModel invisibleButtonModel;
  // Model for ClockINOUT component.
  late ClockINOUTModel clockINOUTModel;
  // Model for nav_bar component.
  late NavBarModel navBarModel;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
    invisibleButtonModel = createModel(context, () => InvisibleButtonModel());
    clockINOUTModel = createModel(context, () => ClockINOUTModel());
    navBarModel = createModel(context, () => NavBarModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
    invisibleButtonModel.dispose();
    clockINOUTModel.dispose();
    navBarModel.dispose();
  }
}
