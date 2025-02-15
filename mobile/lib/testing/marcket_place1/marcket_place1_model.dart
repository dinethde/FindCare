import '/componets_approved/marketplace_caregiver_card/marketplace_caregiver_card_widget.dart';
import '/componets_approved/sepcified_care_tab_bar/sepcified_care_tab_bar_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/testing/skill_search_bar/skill_search_bar_widget.dart';
import 'marcket_place1_widget.dart' show MarcketPlace1Widget;
import 'package:flutter/material.dart';

class MarcketPlace1Model extends FlutterFlowModel<MarcketPlace1Widget> {
  ///  State fields for stateful widgets in this page.

  // Model for SkillSearchBar component.
  late SkillSearchBarModel skillSearchBarModel;
  // Model for SepcifiedCareTabBar component.
  late SepcifiedCareTabBarModel sepcifiedCareTabBarModel;
  // Model for MarketplaceCaregiverCard component.
  late MarketplaceCaregiverCardModel marketplaceCaregiverCardModel;

  @override
  void initState(BuildContext context) {
    skillSearchBarModel = createModel(context, () => SkillSearchBarModel());
    sepcifiedCareTabBarModel =
        createModel(context, () => SepcifiedCareTabBarModel());
    marketplaceCaregiverCardModel =
        createModel(context, () => MarketplaceCaregiverCardModel());
  }

  @override
  void dispose() {
    skillSearchBarModel.dispose();
    sepcifiedCareTabBarModel.dispose();
    marketplaceCaregiverCardModel.dispose();
  }
}
