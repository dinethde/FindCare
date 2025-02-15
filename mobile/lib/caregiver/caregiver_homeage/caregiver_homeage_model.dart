import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/form_field_controller.dart';
import '/household/calender/calender_widget.dart';
import '/household/home_card/home_card_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import '/household/paitent_report/paitent_report_widget.dart';
import '/household/patient_block/patient_block_widget.dart';
import 'caregiver_homeage_widget.dart' show CaregiverHomeageWidget;
import 'package:flutter/material.dart';

class CaregiverHomeageModel extends FlutterFlowModel<CaregiverHomeageWidget> {
  ///  State fields for stateful widgets in this page.

  // State field(s) for RadioButton widget.
  FormFieldController<String>? radioButtonValueController;
  // Model for homeCard component.
  late HomeCardModel homeCardModel1;
  // Model for homeCard component.
  late HomeCardModel homeCardModel2;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel1;
  // State field(s) for TextField widget.
  FocusNode? textFieldFocusNode;
  TextEditingController? textController;
  String? Function(BuildContext, String?)? textControllerValidator;
  // Model for calender component.
  late CalenderModel calenderModel1;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel2;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel3;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel4;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel5;
  // Model for PatientBlock component.
  late PatientBlockModel patientBlockModel;
  // Model for paitentReport component.
  late PaitentReportModel paitentReportModel;
  // Model for calender component.
  late CalenderModel calenderModel2;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel6;
  // Model for nav_bar component.
  late NavBarModel navBarModel;

  @override
  void initState(BuildContext context) {
    homeCardModel1 = createModel(context, () => HomeCardModel());
    homeCardModel2 = createModel(context, () => HomeCardModel());
    iconButtonModel1 = createModel(context, () => IconButtonModel());
    calenderModel1 = createModel(context, () => CalenderModel());
    iconButtonModel2 = createModel(context, () => IconButtonModel());
    iconButtonModel3 = createModel(context, () => IconButtonModel());
    iconButtonModel4 = createModel(context, () => IconButtonModel());
    iconButtonModel5 = createModel(context, () => IconButtonModel());
    patientBlockModel = createModel(context, () => PatientBlockModel());
    paitentReportModel = createModel(context, () => PaitentReportModel());
    calenderModel2 = createModel(context, () => CalenderModel());
    iconButtonModel6 = createModel(context, () => IconButtonModel());
    navBarModel = createModel(context, () => NavBarModel());
  }

  @override
  void dispose() {
    homeCardModel1.dispose();
    homeCardModel2.dispose();
    iconButtonModel1.dispose();
    textFieldFocusNode?.dispose();
    textController?.dispose();

    calenderModel1.dispose();
    iconButtonModel2.dispose();
    iconButtonModel3.dispose();
    iconButtonModel4.dispose();
    iconButtonModel5.dispose();
    patientBlockModel.dispose();
    paitentReportModel.dispose();
    calenderModel2.dispose();
    iconButtonModel6.dispose();
    navBarModel.dispose();
  }

  /// Additional helper methods.
  String? get radioButtonValue => radioButtonValueController?.value;
}
