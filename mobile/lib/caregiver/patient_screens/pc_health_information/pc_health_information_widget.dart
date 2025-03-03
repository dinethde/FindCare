import '/caregiver/nav_bar/nav_bar_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/content_textbox/content_textbox_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'pc_health_information_model.dart';
export 'pc_health_information_model.dart';

class PcHealthInformationWidget extends StatefulWidget {
  const PcHealthInformationWidget({super.key});

  static String routeName = 'pcHealthInformation';
  static String routePath = '/pcHealthInformation';

  @override
  State<PcHealthInformationWidget> createState() =>
      _PcHealthInformationWidgetState();
}

class _PcHealthInformationWidgetState extends State<PcHealthInformationWidget> {
  late PcHealthInformationModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => PcHealthInformationModel());
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
                SingleChildScrollView(
                  child: Column(
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      Padding(
                        padding: EdgeInsetsDirectional.fromSTEB(
                            20.0, 0.0, 20.0, 0.0),
                        child: wrapWithModel(
                          model: _model.appBarLeftsideModel,
                          updateCallback: () => safeSetState(() {}),
                          child: AppBarLeftsideWidget(
                            fLable: 'Profile',
                          ),
                        ),
                      ),
                      Padding(
                        padding: EdgeInsetsDirectional.fromSTEB(
                            20.0, 0.0, 20.0, 0.0),
                        child: Column(
                          mainAxisSize: MainAxisSize.max,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Column(
                              mainAxisSize: MainAxisSize.max,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Health Information',
                                  style: FlutterFlowTheme.of(context)
                                      .displayMedium
                                      .override(
                                        fontFamily: 'Inter',
                                        letterSpacing: 0.0,
                                      ),
                                ),
                                Text(
                                  'Provide the patient’s health details to ensure personalized care and appropriate caregiver assignment.',
                                  style: FlutterFlowTheme.of(context)
                                      .bodyMedium
                                      .override(
                                        fontFamily: 'Inter',
                                        fontSize: 16.0,
                                        letterSpacing: 0.0,
                                      ),
                                ),
                              ]
                                  .divide(SizedBox(height: 12.0))
                                  .addToStart(SizedBox(height: 14.0)),
                            ),
                            Column(
                              mainAxisSize: MainAxisSize.max,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Infectious Diseases',
                                  style: FlutterFlowTheme.of(context)
                                      .displaySmall
                                      .override(
                                        fontFamily: 'Inter',
                                        letterSpacing: 0.0,
                                      ),
                                ),
                                wrapWithModel(
                                  model: _model.contentTextboxModel1,
                                  updateCallback: () => safeSetState(() {}),
                                  child: ContentTextboxWidget(
                                    textField: 'HIV/AIDS',
                                    readOnly: false,
                                  ),
                                ),
                              ].divide(SizedBox(height: 12.0)),
                            ),
                            Column(
                              mainAxisSize: MainAxisSize.max,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Deficiency Diseases',
                                  style: FlutterFlowTheme.of(context)
                                      .displaySmall
                                      .override(
                                        fontFamily: 'Inter',
                                        letterSpacing: 0.0,
                                      ),
                                ),
                                wrapWithModel(
                                  model: _model.iconButtonModel1,
                                  updateCallback: () => safeSetState(() {}),
                                  child: IconButtonWidget(
                                    icon1: Icon(
                                      Icons.no_backpack_outlined,
                                      color: FlutterFlowTheme.of(context).error,
                                    ),
                                    lable: 'Patient doesn\'t have any disease ',
                                  ),
                                ),
                              ].divide(SizedBox(height: 12.0)),
                            ),
                            Column(
                              mainAxisSize: MainAxisSize.max,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Hereditary Diseases',
                                  style: FlutterFlowTheme.of(context)
                                      .displaySmall
                                      .override(
                                        fontFamily: 'Inter',
                                        letterSpacing: 0.0,
                                      ),
                                ),
                                wrapWithModel(
                                  model: _model.contentTextboxModel2,
                                  updateCallback: () => safeSetState(() {}),
                                  child: ContentTextboxWidget(
                                    textField: 'Down Syndrome',
                                    readOnly: false,
                                  ),
                                ),
                              ].divide(SizedBox(height: 12.0)),
                            ),
                            Column(
                              mainAxisSize: MainAxisSize.max,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Physiological Diseases',
                                  style: FlutterFlowTheme.of(context)
                                      .displaySmall
                                      .override(
                                        fontFamily: 'Inter',
                                        letterSpacing: 0.0,
                                      ),
                                ),
                                wrapWithModel(
                                  model: _model.iconButtonModel2,
                                  updateCallback: () => safeSetState(() {}),
                                  child: IconButtonWidget(
                                    icon1: Icon(
                                      Icons.no_backpack_outlined,
                                      color: FlutterFlowTheme.of(context).error,
                                    ),
                                    lable: 'Asthma',
                                  ),
                                ),
                              ].divide(SizedBox(height: 12.0)),
                            ),
                          ].divide(SizedBox(height: 48.0)),
                        ),
                      ),
                    ].addToEnd(SizedBox(height: 90.0)),
                  ),
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
