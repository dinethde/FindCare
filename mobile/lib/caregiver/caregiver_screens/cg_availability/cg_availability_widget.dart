import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/household/content_textbox/content_textbox_widget.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'cg_availability_model.dart';
export 'cg_availability_model.dart';

class CgAvailabilityWidget extends StatefulWidget {
  const CgAvailabilityWidget({super.key});

  static String routeName = 'cgAvailability';
  static String routePath = '/cgAvailability';

  @override
  State<CgAvailabilityWidget> createState() => _CgAvailabilityWidgetState();
}

class _CgAvailabilityWidgetState extends State<CgAvailabilityWidget> {
  late CgAvailabilityModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CgAvailabilityModel());
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
          child: Column(
            mainAxisSize: MainAxisSize.max,
            children: [
              Stack(
                alignment: AlignmentDirectional(0.0, 0.0),
                children: [
                  wrapWithModel(
                    model: _model.appbarModel,
                    updateCallback: () => safeSetState(() {}),
                    child: AppbarWidget(
                      fLable: 'Profile',
                      secLable: 'Done',
                    ),
                  ),
                  Align(
                    alignment: AlignmentDirectional(0.16, 0.0),
                    child: Text(
                      'Academic Skills ',
                      style: FlutterFlowTheme.of(context).displaySmall.override(
                            fontFamily: 'Inter',
                            letterSpacing: 0.0,
                          ),
                    ),
                  ),
                ],
              ),
              Container(
                decoration: BoxDecoration(
                  color: FlutterFlowTheme.of(context).secondaryBackground,
                ),
                child: Padding(
                  padding: EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
                  child: Column(
                    mainAxisSize: MainAxisSize.max,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Column(
                        mainAxisSize: MainAxisSize.max,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Week days',
                            style: FlutterFlowTheme.of(context)
                                .headlineLarge
                                .override(
                                  fontFamily: 'Inter',
                                  letterSpacing: 0.0,
                                ),
                          ),
                          wrapWithModel(
                            model: _model.contentTextboxModel1,
                            updateCallback: () => safeSetState(() {}),
                            child: ContentTextboxWidget(
                              textField: '06.00AM - 10.00PM',
                              readOnly: true,
                            ),
                          ),
                        ].divide(SizedBox(height: 12.0)),
                      ),
                      Column(
                        mainAxisSize: MainAxisSize.max,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'On call Availability',
                            style: FlutterFlowTheme.of(context)
                                .headlineLarge
                                .override(
                                  fontFamily: 'Inter',
                                  letterSpacing: 0.0,
                                ),
                          ),
                          wrapWithModel(
                            model: _model.contentTextboxModel2,
                            updateCallback: () => safeSetState(() {}),
                            child: ContentTextboxWidget(
                              textField: 'You don’t work on call',
                              readOnly: true,
                            ),
                          ),
                        ].divide(SizedBox(height: 12.0)),
                      ),
                      Column(
                        mainAxisSize: MainAxisSize.max,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Week Ends',
                            style: FlutterFlowTheme.of(context)
                                .headlineLarge
                                .override(
                                  fontFamily: 'Inter',
                                  letterSpacing: 0.0,
                                ),
                          ),
                          wrapWithModel(
                            model: _model.contentTextboxModel3,
                            updateCallback: () => safeSetState(() {}),
                            child: ContentTextboxWidget(
                              textField: '08.00AM - 06.00PM',
                              readOnly: true,
                            ),
                          ),
                        ].divide(SizedBox(height: 12.0)),
                      ),
                    ].divide(SizedBox(height: 48.0)),
                  ),
                ),
              ),
            ].divide(SizedBox(height: 26.0)),
          ),
        ),
      ),
    );
  }
}
