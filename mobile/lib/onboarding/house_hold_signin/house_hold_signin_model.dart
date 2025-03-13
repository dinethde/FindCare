import '/backend/api_requests/api_calls.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/invisible_button/invisible_button_widget.dart';
import '/onboarding/text_box/text_box_widget.dart';
import '/index.dart';
import 'house_hold_signin_widget.dart' show HouseHoldSigninWidget;
import 'package:flutter/material.dart';

class HouseHoldSigninModel extends FlutterFlowModel<HouseHoldSigninWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for emailBox.
  late TextBoxModel emailBoxModel;
  // Model for passwordBox.
  late TextBoxModel passwordBoxModel;
  // Model for invisibleButton component.
  late InvisibleButtonModel invisibleButtonModel;
  // Stores action output result for [Backend Call - API (login)] action in Button widget.
  ApiCallResponse? aPIloginResult;
  // Stores action output result for [Backend Call - API (UserInfo)] action in Button widget.
  ApiCallResponse? accessTokenDecoded;

  @override
  void initState(BuildContext context) {
    emailBoxModel = createModel(context, () => TextBoxModel());
    passwordBoxModel = createModel(context, () => TextBoxModel());
    invisibleButtonModel = createModel(context, () => InvisibleButtonModel());
  }

  @override
  void dispose() {
    emailBoxModel.dispose();
    passwordBoxModel.dispose();
    invisibleButtonModel.dispose();
  }
}
