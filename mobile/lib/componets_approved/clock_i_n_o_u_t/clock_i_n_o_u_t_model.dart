import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import 'clock_i_n_o_u_t_widget.dart' show ClockINOUTWidget;
import 'package:flutter/material.dart';

class ClockINOUTModel extends FlutterFlowModel<ClockINOUTWidget> {
  ///  State fields for stateful widgets in this component.

  // Model for Button component.
  late ButtonModel buttonModel;

  @override
  void initState(BuildContext context) {
    buttonModel = createModel(context, () => ButtonModel());
  }

  @override
  void dispose() {
    buttonModel.dispose();
  }
}
