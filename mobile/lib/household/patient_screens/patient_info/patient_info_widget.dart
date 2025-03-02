import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import '/household/nav_bar_house/nav_bar_house_widget.dart';
import '/index.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'patient_info_model.dart';
export 'patient_info_model.dart';

class PatientInfoWidget extends StatefulWidget {
  const PatientInfoWidget({super.key});

  static String routeName = 'PatientInfo';
  static String routePath = '/patientInfo';

  @override
  State<PatientInfoWidget> createState() => _PatientInfoWidgetState();
}

class _PatientInfoWidgetState extends State<PatientInfoWidget> {
  late PatientInfoModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => PatientInfoModel());
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
          child: Padding(
            padding: EdgeInsetsDirectional.fromSTEB(0.0, 25.0, 0.0, 0.0),
            child: Stack(
              children: [
                Padding(
                  padding: EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
                  child: Column(
                    mainAxisSize: MainAxisSize.max,
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      wrapWithModel(
                        model: _model.appbarModel,
                        updateCallback: () => safeSetState(() {}),
                        child: AppbarWidget(
                          fLable: 'Quick Links',
                          secLable: 'Done',
                          pgName: '',
                          pgCount: 0,
                        ),
                      ),
                      Column(
                        mainAxisSize: MainAxisSize.max,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Container(
                            width: 40.0,
                            height: 40.0,
                            clipBehavior: Clip.antiAlias,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                            ),
                            child: Image.network(
                              'https://picsum.photos/seed/385/600',
                              fit: BoxFit.cover,
                            ),
                          ),
                          Text(
                            'Dineth De Silva',
                            style: FlutterFlowTheme.of(context)
                                .displayMedium
                                .override(
                                  fontFamily: 'Inter',
                                  letterSpacing: 0.0,
                                ),
                          ),
                        ].divide(SizedBox(height: 10.0)),
                      ),
                      InkWell(
                        splashColor: Colors.transparent,
                        focusColor: Colors.transparent,
                        hoverColor: Colors.transparent,
                        highlightColor: Colors.transparent,
                        onTap: () async {
                          context
                              .pushNamed(PatientPersonalInfoWidget.routeName);
                        },
                        child: wrapWithModel(
                          model: _model.iconButtonModel1,
                          updateCallback: () => safeSetState(() {}),
                          child: IconButtonWidget(
                            icon1: Icon(
                              Icons.info_outline,
                              size: 16.0,
                            ),
                            lable: '19 years old, 185cm, 60.0kg ...',
                          ),
                        ),
                      ),
                      Column(
                        mainAxisSize: MainAxisSize.max,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Health Details',
                            style: FlutterFlowTheme.of(context)
                                .displaySmall
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
                              context
                                  .pushNamed(HealthInformationWidget.routeName);
                            },
                            child: wrapWithModel(
                              model: _model.iconButtonModel2,
                              updateCallback: () => safeSetState(() {}),
                              child: IconButtonWidget(
                                icon1: Icon(
                                  FFIcons.kpLivingWithDiabetes,
                                  color: Color(0xFFFF2D55),
                                  size: 16.0,
                                ),
                                lable: 'Living with diabetes, arthritis ...',
                              ),
                            ),
                          ),
                          InkWell(
                            splashColor: Colors.transparent,
                            focusColor: Colors.transparent,
                            hoverColor: Colors.transparent,
                            highlightColor: Colors.transparent,
                            onTap: () async {
                              context.pushNamed(
                                  CaregiverRequirementsWidget.routeName);
                            },
                            child: wrapWithModel(
                              model: _model.iconButtonModel3,
                              updateCallback: () => safeSetState(() {}),
                              child: IconButtonWidget(
                                icon1: Icon(
                                  FFIcons.kdocText,
                                  color: Color(0xFF046ACC),
                                  size: 16.0,
                                ),
                                lable: 'Require a caregiver specialized in ...',
                              ),
                            ),
                          ),
                          InkWell(
                            splashColor: Colors.transparent,
                            focusColor: Colors.transparent,
                            hoverColor: Colors.transparent,
                            highlightColor: Colors.transparent,
                            onTap: () async {
                              context.pushNamed(MedicalRecordsWidget.routeName);
                            },
                            child: wrapWithModel(
                              model: _model.iconButtonModel4,
                              updateCallback: () => safeSetState(() {}),
                              child: IconButtonWidget(
                                icon1: Icon(
                                  FFIcons.kpMedicalRecords,
                                  color: Color(0xFFC27E2D),
                                  size: 22.0,
                                ),
                                lable: 'Medical records',
                              ),
                            ),
                          ),
                        ],
                      ),
                      Column(
                        mainAxisSize: MainAxisSize.max,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Goal',
                            style: FlutterFlowTheme.of(context)
                                .displaySmall
                                .override(
                                  fontFamily: 'Inter',
                                  letterSpacing: 0.0,
                                ),
                          ),
                          wrapWithModel(
                            model: _model.iconButtonModel5,
                            updateCallback: () => safeSetState(() {}),
                            child: IconButtonWidget(
                              icon1: Icon(
                                Icons.api,
                                size: 16.0,
                              ),
                              lable: 'Add a goal',
                            ),
                          ),
                        ],
                      ),
                    ].addToEnd(SizedBox(height: 30.0)),
                  ),
                ),
                wrapWithModel(
                  model: _model.navBarHouseModel,
                  updateCallback: () => safeSetState(() {}),
                  child: NavBarHouseWidget(
                    page: 2,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
