import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import 'patient_information_e_d_i_t_widget.dart'
    show PatientInformationEDITWidget;
import 'package:flutter/material.dart';

class PatientInformationEDITModel
    extends FlutterFlowModel<PatientInformationEDITWidget> {
  ///  State fields for stateful widgets in this page.

  final formKey = GlobalKey<FormState>();
  // Model for appbar component.
  late AppbarModel appbarModel;

  @override
  void initState(BuildContext context) {
    appbarModel = createModel(context, () => AppbarModel());
  }

  @override
  void dispose() {
    appbarModel.dispose();
  }
}
