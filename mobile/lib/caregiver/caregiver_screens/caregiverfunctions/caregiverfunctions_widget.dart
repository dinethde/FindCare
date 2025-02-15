import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/app_bar_leftside/app_bar_leftside_widget.dart';
import '/household/icon_button/icon_button_widget.dart';
import 'package:flutter/material.dart';
import 'caregiverfunctions_model.dart';
export 'caregiverfunctions_model.dart';

class CaregiverfunctionsWidget extends StatefulWidget {
  const CaregiverfunctionsWidget({super.key});

  @override
  State<CaregiverfunctionsWidget> createState() =>
      _CaregiverfunctionsWidgetState();
}

class _CaregiverfunctionsWidgetState extends State<CaregiverfunctionsWidget> {
  late CaregiverfunctionsModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CaregiverfunctionsModel());
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
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
                child: wrapWithModel(
                  model: _model.appBarLeftsideModel,
                  updateCallback: () => safeSetState(() {}),
                  child: AppBarLeftsideWidget(
                    fLable: 'Quick links',
                  ),
                ),
              ),
              Padding(
                padding: EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
                child: Column(
                  mainAxisSize: MainAxisSize.max,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Functions',
                      style:
                          FlutterFlowTheme.of(context).displayMedium.override(
                                fontFamily: 'Inter',
                                letterSpacing: 0.0,
                              ),
                    ),
                    Column(
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        wrapWithModel(
                          model: _model.iconButtonModel1,
                          updateCallback: () => safeSetState(() {}),
                          child: IconButtonWidget(
                            icon1: Icon(
                              Icons.ten_k,
                            ),
                            lable: 'Clock in and out',
                          ),
                        ),
                        wrapWithModel(
                          model: _model.iconButtonModel2,
                          updateCallback: () => safeSetState(() {}),
                          child: IconButtonWidget(
                            icon1: Icon(
                              Icons.ten_k_sharp,
                            ),
                            lable: 'Perform Tasks',
                          ),
                        ),
                        wrapWithModel(
                          model: _model.iconButtonModel3,
                          updateCallback: () => safeSetState(() {}),
                          child: IconButtonWidget(
                            icon1: Icon(
                              Icons.ten_k_rounded,
                            ),
                            lable: 'View Calendar',
                          ),
                        ),
                        wrapWithModel(
                          model: _model.iconButtonModel4,
                          updateCallback: () => safeSetState(() {}),
                          child: IconButtonWidget(
                            icon1: Icon(
                              Icons.ten_k_outlined,
                            ),
                            lable: 'Inform Agency',
                          ),
                        ),
                        wrapWithModel(
                          model: _model.iconButtonModel5,
                          updateCallback: () => safeSetState(() {}),
                          child: IconButtonWidget(
                            icon1: Icon(
                              Icons.ten_mp_rounded,
                            ),
                            lable: 'Document Care Recipient Details',
                          ),
                        ),
                      ].divide(SizedBox(height: 12.0)),
                    ),
                  ].divide(SizedBox(height: 48.0)),
                ),
              ),
            ].divide(SizedBox(height: 32.0)),
          ),
        ),
      ),
    );
  }
}
