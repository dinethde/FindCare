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
  late MarketplaceCaregiverCardModel marketplaceCaregiverCardModel1;
  // Model for MarketplaceCaregiverCard component.
  late MarketplaceCaregiverCardModel marketplaceCaregiverCardModel2;
  // Model for MarketplaceCaregiverCard component.
  late MarketplaceCaregiverCardModel marketplaceCaregiverCardModel3;
  // Model for MarketplaceCaregiverCard component.
  late MarketplaceCaregiverCardModel marketplaceCaregiverCardModel4;

  @override
  void initState(BuildContext context) {
    skillSearchBarModel = createModel(context, () => SkillSearchBarModel());
    sepcifiedCareTabBarModel =
        createModel(context, () => SepcifiedCareTabBarModel());
    marketplaceCaregiverCardModel1 =
        createModel(context, () => MarketplaceCaregiverCardModel());
    marketplaceCaregiverCardModel2 =
        createModel(context, () => MarketplaceCaregiverCardModel());
    marketplaceCaregiverCardModel3 =
        createModel(context, () => MarketplaceCaregiverCardModel());
    marketplaceCaregiverCardModel4 =
        createModel(context, () => MarketplaceCaregiverCardModel());
  }

  @override
  void dispose() {
    skillSearchBarModel.dispose();
    sepcifiedCareTabBarModel.dispose();
    marketplaceCaregiverCardModel1.dispose();
    marketplaceCaregiverCardModel2.dispose();
    marketplaceCaregiverCardModel3.dispose();
    marketplaceCaregiverCardModel4.dispose();
  }
}
