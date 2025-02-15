import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/care_type_b_o_x/care_type_b_o_x_widget.dart';
import 'care_type_widget.dart' show CareTypeWidget;
import 'package:flutter/material.dart';

class CareTypeModel extends FlutterFlowModel<CareTypeWidget> {
  ///  Local state fields for this page.

  int? careType;

  ///  State fields for stateful widgets in this page.

  // Model for CareTypeBOX component.
  late CareTypeBOXModel careTypeBOXModel1;
  // Model for CareTypeBOX component.
  late CareTypeBOXModel careTypeBOXModel2;

  @override
  void initState(BuildContext context) {
    careTypeBOXModel1 = createModel(context, () => CareTypeBOXModel());
    careTypeBOXModel2 = createModel(context, () => CareTypeBOXModel());
  }

  @override
  void dispose() {
    careTypeBOXModel1.dispose();
    careTypeBOXModel2.dispose();
  }
}
