import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_rightside/app_bar_rightside_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import 'package:flutter/material.dart';
import 'caregiverinfo_model.dart';
export 'caregiverinfo_model.dart';

class CaregiverinfoWidget extends StatefulWidget {
  const CaregiverinfoWidget({super.key});

  @override
  State<CaregiverinfoWidget> createState() => _CaregiverinfoWidgetState();
}

class _CaregiverinfoWidgetState extends State<CaregiverinfoWidget> {
  late CaregiverinfoModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CaregiverinfoModel());
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
            padding: EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
            child: Column(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                wrapWithModel(
                  model: _model.appBarRightsideModel,
                  updateCallback: () => safeSetState(() {}),
                  child: AppBarRightsideWidget(
                    secLable: 'Done',
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
                      style:
                          FlutterFlowTheme.of(context).displayMedium.override(
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
                    context.pushNamed('CaregiverPersonal');
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
                      'Proficiency',
                      style: FlutterFlowTheme.of(context).displaySmall.override(
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
                        context.pushNamed('AcademicInfo');
                      },
                      child: wrapWithModel(
                        model: _model.iconButtonModel2,
                        updateCallback: () => safeSetState(() {}),
                        child: IconButtonWidget(
                          icon1: Icon(
                            Icons.grain,
                            color: Color(0xFFFF2D55),
                            size: 16.0,
                          ),
                          lable: 'Academic Skills',
                        ),
                      ),
                    ),
                    InkWell(
                      splashColor: Colors.transparent,
                      focusColor: Colors.transparent,
                      hoverColor: Colors.transparent,
                      highlightColor: Colors.transparent,
                      onTap: () async {
                        context.pushNamed('ExperiencePage');
                      },
                      child: wrapWithModel(
                        model: _model.iconButtonModel3,
                        updateCallback: () => safeSetState(() {}),
                        child: IconButtonWidget(
                          icon1: Icon(
                            Icons.document_scanner_rounded,
                            color: Color(0xFF046ACC),
                            size: 16.0,
                          ),
                          lable: 'Professional Skills',
                        ),
                      ),
                    ),
                    InkWell(
                      splashColor: Colors.transparent,
                      focusColor: Colors.transparent,
                      hoverColor: Colors.transparent,
                      highlightColor: Colors.transparent,
                      onTap: () async {
                        context.pushNamed('SpecializedinPage');
                      },
                      child: wrapWithModel(
                        model: _model.iconButtonModel4,
                        updateCallback: () => safeSetState(() {}),
                        child: IconButtonWidget(
                          icon1: Icon(
                            Icons.medical_information_sharp,
                            color: Color(0xFFC27E2D),
                            size: 16.0,
                          ),
                          lable: 'Specializations',
                        ),
                      ),
                    ),
                  ].divide(SizedBox(height: 12.0)),
                ),
              ].divide(SizedBox(height: 48.0)),
            ),
          ),
        ),
      ),
    );
  }
}
