import '/backend/api_requests/api_calls.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/text_box/text_box_widget.dart';
import '/onboarding/text_boxhalf/text_boxhalf_widget.dart';
import '/index.dart';
import 'householdsignup_widget.dart' show HouseholdsignupWidget;
import 'package:flutter/material.dart';

class HouseholdsignupModel extends FlutterFlowModel<HouseholdsignupWidget> {
  ///  State fields for stateful widgets in this page.

  final formKey = GlobalKey<FormState>();
  // Model for EmailBox.
  late TextBoxModel emailBoxModel;
  // Model for fNameBoxhalf.
  late TextBoxhalfModel fNameBoxhalfModel;
  // Model for lNameBoxhalf.
  late TextBoxhalfModel lNameBoxhalfModel;
  // Model for mobileBox.
  late TextBoxModel mobileBoxModel;
  // Model for addressBox.
  late TextBoxModel addressBoxModel;
  // Model for passBox.
  late TextBoxModel passBoxModel;
  // Model for confirmPassBox.
  late TextBoxModel confirmPassBoxModel;
  // State field(s) for Checkbox widget.
  bool? checkboxValue;
  // Stores action output result for [Backend Call - API (signup)] action in Button widget.
  ApiCallResponse? aPIsingupResult;
  // Stores action output result for [Backend Call - API (login)] action in Button widget.
  ApiCallResponse? aPIloginResult;
  // Stores action output result for [Backend Call - API (UserInfo)] action in Button widget.
  ApiCallResponse? accessTokenDecoded;

  @override
  void initState(BuildContext context) {
    emailBoxModel = createModel(context, () => TextBoxModel());
    fNameBoxhalfModel = createModel(context, () => TextBoxhalfModel());
    lNameBoxhalfModel = createModel(context, () => TextBoxhalfModel());
    mobileBoxModel = createModel(context, () => TextBoxModel());
    addressBoxModel = createModel(context, () => TextBoxModel());
    passBoxModel = createModel(context, () => TextBoxModel());
    confirmPassBoxModel = createModel(context, () => TextBoxModel());
  }

  @override
  void dispose() {
    emailBoxModel.dispose();
    fNameBoxhalfModel.dispose();
    lNameBoxhalfModel.dispose();
    mobileBoxModel.dispose();
    addressBoxModel.dispose();
    passBoxModel.dispose();
    confirmPassBoxModel.dispose();
  }
}
