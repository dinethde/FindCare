import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_rightside/app_bar_rightside_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import '/index.dart';
import 'package:flutter/material.dart';
import 'ps_patient_info_model.dart';
export 'ps_patient_info_model.dart';

class PsPatientInfoWidget extends StatefulWidget {
  const PsPatientInfoWidget({super.key});

  static String routeName = 'psPatientInfo';
  static String routePath = '/psPatientInfo';

  @override
  State<PsPatientInfoWidget> createState() => _PsPatientInfoWidgetState();
}

class _PsPatientInfoWidgetState extends State<PsPatientInfoWidget> {
  late PsPatientInfoModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => PsPatientInfoModel());

    _model.textController ??= TextEditingController();
    _model.textFieldFocusNode ??= FocusNode();
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
                Column(
                  mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Padding(
                      padding:
                          EdgeInsetsDirectional.fromSTEB(25.0, 0.0, 25.0, 0.0),
                      child: wrapWithModel(
                        model: _model.appBarRightsideModel,
                        updateCallback: () => safeSetState(() {}),
                        child: AppBarRightsideWidget(
                          secLable: 'Done',
                        ),
                      ),
                    ),
                    Container(
                      decoration: BoxDecoration(
                        color: FlutterFlowTheme.of(context).secondaryBackground,
                      ),
                      child: Padding(
                        padding: EdgeInsetsDirectional.fromSTEB(
                            20.0, 5.0, 20.0, 5.0),
                        child: Column(
                          mainAxisSize: MainAxisSize.max,
                          children: [
                            Row(
                              mainAxisSize: MainAxisSize.max,
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  'Dineth De Silva',
                                  style: FlutterFlowTheme.of(context)
                                      .displayMedium
                                      .override(
                                        fontFamily: 'Inter',
                                        letterSpacing: 0.0,
                                      ),
                                ),
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
                              ],
                            ),
                            Column(
                              mainAxisSize: MainAxisSize.max,
                              children: [
                                InkWell(
                                  splashColor: Colors.transparent,
                                  focusColor: Colors.transparent,
                                  hoverColor: Colors.transparent,
                                  highlightColor: Colors.transparent,
                                  onTap: () async {
                                    context.pushNamed(
                                        PcQuickLinksWidget.routeName);
                                  },
                                  child: wrapWithModel(
                                    model: _model.iconButtonModel1,
                                    updateCallback: () => safeSetState(() {}),
                                    child: IconButtonWidget(
                                      icon1: Icon(
                                        Icons.document_scanner,
                                        color: Color(0xFF456BB4),
                                        size: 16.0,
                                      ),
                                      lable: 'Patient Information',
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
                                        PcPatientReportsWidget.routeName);
                                  },
                                  child: wrapWithModel(
                                    model: _model.iconButtonModel2,
                                    updateCallback: () => safeSetState(() {}),
                                    child: IconButtonWidget(
                                      icon1: Icon(
                                        Icons.calendar_month,
                                        size: 16.0,
                                      ),
                                      lable: 'Patient reports',
                                    ),
                                  ),
                                ),
                                InkWell(
                                  splashColor: Colors.transparent,
                                  focusColor: Colors.transparent,
                                  hoverColor: Colors.transparent,
                                  highlightColor: Colors.transparent,
                                  onTap: () async {
                                    context
                                        .pushNamed(PcCalendarWidget.routeName);
                                  },
                                  child: wrapWithModel(
                                    model: _model.iconButtonModel3,
                                    updateCallback: () => safeSetState(() {}),
                                    child: IconButtonWidget(
                                      icon1: Icon(
                                        Icons.add_circle_sharp,
                                        color: Color(0xFFFCA827),
                                        size: 16.0,
                                      ),
                                      lable: 'Patient calendar',
                                    ),
                                  ),
                                ),
                                wrapWithModel(
                                  model: _model.iconButtonModel4,
                                  updateCallback: () => safeSetState(() {}),
                                  child: IconButtonWidget(
                                    icon1: Icon(
                                      Icons.info,
                                      color: Color(0xFFCC2444),
                                      size: 16.0,
                                    ),
                                    lable: 'Add new patient',
                                  ),
                                ),
                              ].divide(SizedBox(height: 12.0)),
                            ),
                            Column(
                              mainAxisSize: MainAxisSize.max,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Document CR.',
                                  style: FlutterFlowTheme.of(context)
                                      .displaySmall
                                      .override(
                                        fontFamily: 'Inter',
                                        letterSpacing: 0.0,
                                      ),
                                ),
                                Container(
                                  decoration: BoxDecoration(
                                    boxShadow: [
                                      BoxShadow(
                                        blurRadius: 3.0,
                                        color: Color(0xFFDDE6EE),
                                        offset: Offset(
                                          0.0,
                                          2.0,
                                        ),
                                      )
                                    ],
                                    borderRadius: BorderRadius.circular(0.0),
                                  ),
                                  child: Container(
                                    width:
                                        MediaQuery.sizeOf(context).width * 1.0,
                                    child: TextFormField(
                                      controller: _model.textController,
                                      focusNode: _model.textFieldFocusNode,
                                      autofocus: false,
                                      obscureText: false,
                                      decoration: InputDecoration(
                                        isDense: true,
                                        alignLabelWithHint: true,
                                        hintText: 'Document care-recipient day',
                                        hintStyle: FlutterFlowTheme.of(context)
                                            .labelMedium
                                            .override(
                                              fontFamily: 'Inter',
                                              fontSize: 16.0,
                                              letterSpacing: 0.0,
                                            ),
                                        enabledBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: Color(0x00000000),
                                            width: 1.0,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(8.0),
                                        ),
                                        focusedBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: Color(0x00000000),
                                            width: 1.0,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(8.0),
                                        ),
                                        errorBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: FlutterFlowTheme.of(context)
                                                .error,
                                            width: 1.0,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(8.0),
                                        ),
                                        focusedErrorBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: FlutterFlowTheme.of(context)
                                                .error,
                                            width: 1.0,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(8.0),
                                        ),
                                        filled: true,
                                        fillColor:
                                            FlutterFlowTheme.of(context).info,
                                        contentPadding:
                                            EdgeInsetsDirectional.fromSTEB(
                                                10.0, 46.0, 0.0, 46.0),
                                        prefixIcon: Icon(
                                          Icons.location_on,
                                          size: 18.0,
                                        ),
                                      ),
                                      style: FlutterFlowTheme.of(context)
                                          .bodyMedium
                                          .override(
                                            fontFamily: 'Inter',
                                            fontSize: 16.0,
                                            letterSpacing: 0.0,
                                          ),
                                      cursorColor: FlutterFlowTheme.of(context)
                                          .primaryText,
                                      validator: _model.textControllerValidator
                                          .asValidator(context),
                                    ),
                                  ),
                                ),
                              ].divide(SizedBox(height: 12.0)),
                            ),
                          ].divide(SizedBox(height: 50.0)),
                        ),
                      ),
                    ),
                  ].divide(SizedBox(height: 32.0)),
                ),
                wrapWithModel(
                  model: _model.navBarModel,
                  updateCallback: () => safeSetState(() {}),
                  child: NavBarWidget(
                    page: 1,
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
