import '/componets_approved/marketplace_caregiver_card/marketplace_caregiver_card_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'testing_page_widget.dart' show TestingPageWidget;
import 'package:flutter/material.dart';

class TestingPageModel extends FlutterFlowModel<TestingPageWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for MarketplaceCaregiverCard component.
  late MarketplaceCaregiverCardModel marketplaceCaregiverCardModel;

  @override
  void initState(BuildContext context) {
    marketplaceCaregiverCardModel =
        createModel(context, () => MarketplaceCaregiverCardModel());
  }

  @override
  void dispose() {
    marketplaceCaregiverCardModel.dispose();
  }
}
