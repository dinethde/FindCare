import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/nav_bar_house/nav_bar_house_widget.dart';
import '/household/record_button/record_button_widget.dart';
import '/onboarding/button/button_widget.dart';
import '/flutter_flow/random_data_util.dart' as random_data;
import 'package:flutter/material.dart';
import 'medical_records_model.dart';
export 'medical_records_model.dart';

class MedicalRecordsWidget extends StatefulWidget {
  const MedicalRecordsWidget({super.key});

  @override
  State<MedicalRecordsWidget> createState() => _MedicalRecordsWidgetState();
}

class _MedicalRecordsWidgetState extends State<MedicalRecordsWidget> {
  late MedicalRecordsModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => MedicalRecordsModel());
  }

  @override
  void dispose() {
    _model.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        FocusScope.of(context).unfocus();
        FocusManager.instance.primaryFocus?.unfocus();
      },
      child: Scaffold(
        key: scaffoldKey,
        backgroundColor: FlutterFlowTheme.of(context).primaryBackground,
        body: SafeArea(
          top: true,
          child: Stack(
            children: [
              Column(
                mainAxisSize: MainAxisSize.max,
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Container(
                    constraints: BoxConstraints(
                      maxWidth: MediaQuery.sizeOf(context).width * 1.0,
                    ),
                    decoration: BoxDecoration(
                      color: Color(0xFFF6F6F9),
                    ),
                    child: Padding(
                      padding:
                          EdgeInsetsDirectional.fromSTEB(20.0, 5.0, 20.0, 5.0),
                      child: Column(
                        mainAxisSize: MainAxisSize.max,
                        children: [
                          wrapWithModel(
                            model: _model.appBarLeftsideModel,
                            updateCallback: () => safeSetState(() {}),
                            child: AppBarLeftsideWidget(
                              fLable: 'Profile',
                            ),
                          ),
                          Column(
                            mainAxisSize: MainAxisSize.max,
                            children: [
                              Text(
                                'Medical Records',
                                style: FlutterFlowTheme.of(context)
                                    .displayMedium
                                    .override(
                                      fontFamily: 'Inter',
                                      letterSpacing: 0.0,
                                    ),
                              ),
                              Text(
                                'Lorem ipsum dolor sit amet consectetur. Vitae dui volutpat leo euismod lacinia egestas. Eu arcu hac sociis arcu quis nibh.',
                                textAlign: TextAlign.center,
                                style: FlutterFlowTheme.of(context)
                                    .bodyMedium
                                    .override(
                                      fontFamily: 'Inter',
                                      fontSize: 16.0,
                                      letterSpacing: 0.0,
                                    ),
                              ),
                            ].divide(SizedBox(height: 20.0)),
                          ),
                          Padding(
                            padding: EdgeInsetsDirectional.fromSTEB(
                                20.0, 0.0, 20.0, 0.0),
                            child: InkWell(
                              splashColor: Colors.transparent,
                              focusColor: Colors.transparent,
                              hoverColor: Colors.transparent,
                              highlightColor: Colors.transparent,
                              onTap: () async {
                                context.pushNamed('pcMedicalRecordsEDIT');
                              },
                              child: wrapWithModel(
                                model: _model.buttonModel,
                                updateCallback: () => safeSetState(() {}),
                                child: ButtonWidget(
                                  btnText: '+ add new medical record',
                                  btnColor:
                                      FlutterFlowTheme.of(context).primary,
                                ),
                              ),
                            ),
                          ),
                          Column(
                            mainAxisSize: MainAxisSize.max,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                'Last week’s record',
                                style: FlutterFlowTheme.of(context)
                                    .bodyMedium
                                    .override(
                                      fontFamily: 'Inter',
                                      letterSpacing: 0.0,
                                    ),
                              ),
                              InkWell(
                                splashColor: Colors.transparent,
                                focusColor: Colors.transparent,
                                hoverColor: Colors.transparent,
                                highlightColor: Colors.transparent,
                                onTap: () async {
                                  context.pushNamed('MedicalRecordsINFO');
                                },
                                child: wrapWithModel(
                                  model: _model.recordButtonModel,
                                  updateCallback: () => safeSetState(() {}),
                                  child: RecordButtonWidget(
                                    lable: dateTimeFormat(
                                        "yMd", random_data.randomDate()),
                                    lable2: '. Durdans',
                                  ),
                                ),
                              ),
                            ].divide(SizedBox(height: 20.0)),
                          ),
                        ].divide(SizedBox(height: 40.0)),
                      ),
                    ),
                  ),
                ],
              ),
              wrapWithModel(
                model: _model.navBarHouseModel,
                updateCallback: () => safeSetState(() {}),
                child: NavBarHouseWidget(
                  page: 1,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
