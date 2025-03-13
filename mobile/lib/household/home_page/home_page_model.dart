import '/backend/api_requests/api_calls.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/calender/calender_widget.dart';
import '/household/home_card/home_card_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import '/household/nav_bar_house/nav_bar_house_widget.dart';
import '/household/paitent_report/paitent_report_widget.dart';
import '/household/patient_block/patient_block_widget.dart';
import '/index.dart';
import 'home_page_widget.dart' show HomePageWidget;
import 'package:flutter/material.dart';

class HomePageModel extends FlutterFlowModel<HomePageWidget> {
  ///  State fields for stateful widgets in this page.

  // Model for homeCard component.
  late HomeCardModel homeCardModel1;
  // Model for homeCard component.
  late HomeCardModel homeCardModel2;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel1;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel2;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel3;
  // State field(s) for TextField widget.
  FocusNode? textFieldFocusNode;
  TextEditingController? textController;
  String? Function(BuildContext, String?)? textControllerValidator;
  // Model for PatientBlock component.
  late PatientBlockModel patientBlockModel;
  // Model for paitentReport component.
  late PaitentReportModel paitentReportModel;
  // Model for calender component.
  late CalenderModel calenderModel;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel4;
  // Model for iconButton component.
  late IconButtonModel iconButtonModel5;
  // Stores action output result for [Backend Call - API (logout)] action in iconButton widget.
  ApiCallResponse? apiResultwmi;
  // Model for nav_barHouse component.
  late NavBarHouseModel navBarHouseModel;

  @override
  void initState(BuildContext context) {
    homeCardModel1 = createModel(context, () => HomeCardModel());
    homeCardModel2 = createModel(context, () => HomeCardModel());
    iconButtonModel1 = createModel(context, () => IconButtonModel());
    iconButtonModel2 = createModel(context, () => IconButtonModel());
    iconButtonModel3 = createModel(context, () => IconButtonModel());
    patientBlockModel = createModel(context, () => PatientBlockModel());
    paitentReportModel = createModel(context, () => PaitentReportModel());
    calenderModel = createModel(context, () => CalenderModel());
    iconButtonModel4 = createModel(context, () => IconButtonModel());
    iconButtonModel5 = createModel(context, () => IconButtonModel());
    navBarHouseModel = createModel(context, () => NavBarHouseModel());
  }

  @override
  void dispose() {
    homeCardModel1.dispose();
    homeCardModel2.dispose();
    iconButtonModel1.dispose();
    iconButtonModel2.dispose();
    iconButtonModel3.dispose();
    textFieldFocusNode?.dispose();
    textController?.dispose();

    patientBlockModel.dispose();
    paitentReportModel.dispose();
    calenderModel.dispose();
    iconButtonModel4.dispose();
    iconButtonModel5.dispose();
    navBarHouseModel.dispose();
  }
}
