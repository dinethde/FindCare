import '/componets_approved/marketplace_caregiver_card/marketplace_caregiver_card_widget.dart';
import '/componets_approved/sepcified_care_tab_bar/sepcified_care_tab_bar_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'marcket_place1_copy_widget.dart' show MarcketPlace1CopyWidget;
import 'package:flutter/material.dart';

class MarcketPlace1CopyModel extends FlutterFlowModel<MarcketPlace1CopyWidget> {
  ///  State fields for stateful widgets in this page.

  // State field(s) for TextField widget.
  FocusNode? textFieldFocusNode;
  TextEditingController? textController;
  String? Function(BuildContext, String?)? textControllerValidator;
  // Model for SepcifiedCareTabBar component.
  late SepcifiedCareTabBarModel sepcifiedCareTabBarModel;
  // Model for MarketplaceCaregiverCard component.
  late MarketplaceCaregiverCardModel marketplaceCaregiverCardModel;

  @override
  void initState(BuildContext context) {
    sepcifiedCareTabBarModel =
        createModel(context, () => SepcifiedCareTabBarModel());
    marketplaceCaregiverCardModel =
        createModel(context, () => MarketplaceCaregiverCardModel());
  }

  @override
  void dispose() {
    textFieldFocusNode?.dispose();
    textController?.dispose();

    sepcifiedCareTabBarModel.dispose();
    marketplaceCaregiverCardModel.dispose();
  }
}
