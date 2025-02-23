import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/household/skill_box/skill_box_widget.dart';
import 'package:flutter/material.dart';
import 'cg_academic_info_model.dart';
export 'cg_academic_info_model.dart';

class CgAcademicInfoWidget extends StatefulWidget {
  const CgAcademicInfoWidget({super.key});

  static String routeName = 'cgAcademicInfo';
  static String routePath = '/cgAcademicInfo';

  @override
  State<CgAcademicInfoWidget> createState() => _CgAcademicInfoWidgetState();
}

class _CgAcademicInfoWidgetState extends State<CgAcademicInfoWidget> {
  late CgAcademicInfoModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CgAcademicInfoModel());
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
              Padding(
                padding: EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
                child: Stack(
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
                      alignment: AlignmentDirectional(0.0, 0.0),
                      child: Padding(
                        padding:
                            EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 0.0, 0.0),
                        child: Text(
                          'Academic Skills ',
                          style: FlutterFlowTheme.of(context)
                              .displaySmall
                              .override(
                                fontFamily: 'Inter',
                                letterSpacing: 0.0,
                              ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
                child: Container(
                  decoration: BoxDecoration(
                    color: FlutterFlowTheme.of(context).secondaryBackground,
                  ),
                  child: Column(
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      wrapWithModel(
                        model: _model.skillBoxModel1,
                        updateCallback: () => safeSetState(() {}),
                        child: SkillBoxWidget(),
                      ),
                      wrapWithModel(
                        model: _model.skillBoxModel2,
                        updateCallback: () => safeSetState(() {}),
                        child: SkillBoxWidget(),
                      ),
                    ].divide(SizedBox(height: 12.0)),
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
