import '/flutter_flow/flutter_flow_util.dart';
import '/household/icon_text_box/icon_text_box_widget.dart';
import '/household/nav_bar_house/nav_bar_house_widget.dart';
import '/household/very_small_button/very_small_button_widget.dart';
import '/onboarding/round_button/round_button_widget.dart';
import 'message_screen_widget.dart' show MessageScreenWidget;
import 'package:flutter/material.dart';

class MessageScreenModel extends FlutterFlowModel<MessageScreenWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for IconTextBox component.
  late IconTextBoxModel iconTextBoxModel;
  // Model for verySmallButton component.
  late VerySmallButtonModel verySmallButtonModel;
  // Model for roundButton component.
  late RoundButtonModel roundButtonModel1;
  // Model for roundButton component.
  late RoundButtonModel roundButtonModel2;
  // Model for nav_barHouse component.
  late NavBarHouseModel navBarHouseModel;

  @override
  void initState(BuildContext context) {
    iconTextBoxModel = createModel(context, () => IconTextBoxModel());
    verySmallButtonModel = createModel(context, () => VerySmallButtonModel());
    roundButtonModel1 = createModel(context, () => RoundButtonModel());
    roundButtonModel2 = createModel(context, () => RoundButtonModel());
    navBarHouseModel = createModel(context, () => NavBarHouseModel());
  }

  @override
  void dispose() {
    iconTextBoxModel.dispose();
    verySmallButtonModel.dispose();
    roundButtonModel1.dispose();
    roundButtonModel2.dispose();
    navBarHouseModel.dispose();
  }
}
