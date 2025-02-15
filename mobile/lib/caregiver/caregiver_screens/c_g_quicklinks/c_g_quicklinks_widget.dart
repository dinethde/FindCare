import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import 'package:flutter/material.dart';
import 'c_g_quicklinks_model.dart';
export 'c_g_quicklinks_model.dart';

class CGQuicklinksWidget extends StatefulWidget {
  const CGQuicklinksWidget({super.key});

  @override
  State<CGQuicklinksWidget> createState() => _CGQuicklinksWidgetState();
}

class _CGQuicklinksWidgetState extends State<CGQuicklinksWidget> {
  late CGQuicklinksModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CGQuicklinksModel());
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
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                wrapWithModel(
                  model: _model.appBarLeftsideModel,
                  updateCallback: () => safeSetState(() {}),
                  child: AppBarLeftsideWidget(
                    fLable: 'Quick links',
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
                wrapWithModel(
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
                Column(
                  mainAxisSize: MainAxisSize.max,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Experience',
                      style: FlutterFlowTheme.of(context).displaySmall.override(
                            fontFamily: 'Inter',
                            letterSpacing: 0.0,
                          ),
                    ),
                    wrapWithModel(
                      model: _model.iconButtonModel2,
                      updateCallback: () => safeSetState(() {}),
                      child: IconButtonWidget(
                        icon1: Icon(
                          Icons.grain,
                          color: Color(0xFFFF2D55),
                          size: 16.0,
                        ),
                        lable: 'Educational Knowledge',
                      ),
                    ),
                    wrapWithModel(
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
                    wrapWithModel(
                      model: _model.iconButtonModel4,
                      updateCallback: () => safeSetState(() {}),
                      child: IconButtonWidget(
                        icon1: Icon(
                          Icons.medical_information_sharp,
                          color: Color(0xFFC27E2D),
                          size: 16.0,
                        ),
                        lable: 'Specialized in',
                      ),
                    ),
                  ].divide(SizedBox(height: 12.0)),
                ),
                Column(
                  mainAxisSize: MainAxisSize.max,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Availability',
                      style: FlutterFlowTheme.of(context).displaySmall.override(
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
                  ].divide(SizedBox(height: 12.0)),
                ),
              ].addToEnd(SizedBox(height: 30.0)),
            ),
          ),
        ),
      ),
    );
  }
}
