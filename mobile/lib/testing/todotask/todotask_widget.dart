import '/componets_approved/select_task/select_task_widget.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/testing/todaystasks/todaystasks_widget.dart';
import 'package:flutter/material.dart';
import 'todotask_model.dart';
export 'todotask_model.dart';

class TodotaskWidget extends StatefulWidget {
  const TodotaskWidget({super.key});

  @override
  State<TodotaskWidget> createState() => _TodotaskWidgetState();
}

class _TodotaskWidgetState extends State<TodotaskWidget> {
  late TodotaskModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => TodotaskModel());
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
            children: [
              wrapWithModel(
                model: _model.appbarModel,
                updateCallback: () => safeSetState(() {}),
                child: AppbarWidget(
                  fLable: 'Functions',
                  secLable: 'Edit',
                ),
              ),
              wrapWithModel(
                model: _model.todaystasksModel,
                updateCallback: () => safeSetState(() {}),
                child: TodaystasksWidget(
                  date: '05/01',
                  btncolor: FlutterFlowTheme.of(context).primary,
                ),
              ),
              Flexible(
                child: ListView(
                  padding: EdgeInsets.fromLTRB(
                    0,
                    48.0,
                    0,
                    0,
                  ),
                  shrinkWrap: true,
                  scrollDirection: Axis.vertical,
                  children: [
                    wrapWithModel(
                      model: _model.selectTaskModel1,
                      updateCallback: () => safeSetState(() {}),
                      child: SelectTaskWidget(
                        text: 'Inform Agency',
                        textcolor: FlutterFlowTheme.of(context).primaryText,
                        btncolor: Color(0xFFFB3F4A),
                      ),
                    ),
                    wrapWithModel(
                      model: _model.selectTaskModel2,
                      updateCallback: () => safeSetState(() {}),
                      child: SelectTaskWidget(
                        text: 'Inform Agency',
                        textcolor: FlutterFlowTheme.of(context).primaryText,
                        btncolor: Color(0xFFFB3F4A),
                      ),
                    ),
                    wrapWithModel(
                      model: _model.selectTaskModel3,
                      updateCallback: () => safeSetState(() {}),
                      child: SelectTaskWidget(
                        text: 'Inform Agency',
                        textcolor: FlutterFlowTheme.of(context).primaryText,
                        btncolor: Color(0xFFFB3F4A),
                      ),
                    ),
                    wrapWithModel(
                      model: _model.selectTaskModel4,
                      updateCallback: () => safeSetState(() {}),
                      child: SelectTaskWidget(
                        text: 'Inform Agency',
                        textcolor: FlutterFlowTheme.of(context).primaryText,
                        btncolor: Color(0xFFFB3F4A),
                      ),
                    ),
                    wrapWithModel(
                      model: _model.selectTaskModel5,
                      updateCallback: () => safeSetState(() {}),
                      child: SelectTaskWidget(
                        text: 'Inform Agency',
                        textcolor: FlutterFlowTheme.of(context).primaryText,
                        btncolor: Color(0xFFFB3F4A),
                      ),
                    ),
                  ].divide(SizedBox(height: 12.0)),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
