import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/household/nav_bar_house/nav_bar_house_widget.dart';
import '/index.dart';
import 'medical_records_i_n_f_o_widget.dart' show MedicalRecordsINFOWidget;
import 'package:flutter/material.dart';

class MedicalRecordsINFOModel
    extends FlutterFlowModel<MedicalRecordsINFOWidget> {
  ///  State fields for stateful widgets in this page.

  final formKey = GlobalKey<FormState>();
  // Model for appbar component.
  late AppbarModel appbarModel;
  // State field(s) for TextField widget.
  FocusNode? textFieldFocusNode1;
  TextEditingController? textController1;
  String? Function(BuildContext, String?)? textController1Validator;
  // State field(s) for TextField widget.
  FocusNode? textFieldFocusNode2;
  TextEditingController? textController2;
  String? Function(BuildContext, String?)? textController2Validator;
  // State field(s) for TextField widget.
  FocusNode? textFieldFocusNode3;
  TextEditingController? textController3;
  String? Function(BuildContext, String?)? textController3Validator;
  // Model for nav_barHouse component.
  late NavBarHouseModel navBarHouseModel;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
    navBarHouseModel = createModel(context, () => NavBarHouseModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
    textFieldFocusNode1?.dispose();
    textController1?.dispose();

    textFieldFocusNode2?.dispose();
    textController2?.dispose();

    textFieldFocusNode3?.dispose();
    textController3?.dispose();

    navBarHouseModel.dispose();
  }
}
