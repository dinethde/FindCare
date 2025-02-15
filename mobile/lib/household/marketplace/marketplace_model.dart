import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'marketplace_widget.dart' show MarketplaceWidget;
import 'package:flutter/material.dart';

class MarketplaceModel extends FlutterFlowModel<MarketplaceWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for nav_bar component.
  late NavBarModel navBarModel;

  @override
  void initState(BuildContext context) {
    navBarModel = createModel(context, () => NavBarModel());
  }

  @override
  void dispose() {
    navBarModel.dispose();
  }
}
