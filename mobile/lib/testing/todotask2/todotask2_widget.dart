import '/componets_approved/delete_select_task/delete_select_task_widget.dart';
import '/componets_approved/select_task/select_task_widget.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/household/appbar/appbar_widget.dart';
import '/testing/todaystasks/todaystasks_widget.dart';
import 'package:flutter/material.dart';
import 'todotask2_model.dart';
export 'todotask2_model.dart';

class Todotask2Widget extends StatefulWidget {
  const Todotask2Widget({super.key});

  static String routeName = 'todotask2';
  static String routePath = '/todotask2';

  @override
  State<Todotask2Widget> createState() => _Todotask2WidgetState();
}

class _Todotask2WidgetState extends State<Todotask2Widget> {
  late Todotask2Model _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => Todotask2Model());
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
                  fLable: 'Tasks',
                  secLable: 'Done',
                ),
              ),
              wrapWithModel(
                model: _model.todaystasksModel,
                updateCallback: () => safeSetState(() {}),
                child: TodaystasksWidget(
                  btncolor: Color(0x5AFA5300),
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
                        textcolor: Color(0xFFABABAB),
                        btncolor: Color(0xFFFB3F4A),
                      ),
                    ),
                    wrapWithModel(
                      model: _model.selectTaskModel2,
                      updateCallback: () => safeSetState(() {}),
                      child: SelectTaskWidget(
                        text: 'Inform Agency',
                        textcolor: Color(0xFFABABAB),
                        btncolor: Color(0xFFFB3F4A),
                      ),
                    ),
                    wrapWithModel(
                      model: _model.selectTaskModel3,
                      updateCallback: () => safeSetState(() {}),
                      child: SelectTaskWidget(
                        text: 'Inform Agency',
                        textcolor: Color(0xFFABABAB),
                        btncolor: Color(0xFFFB3F4A),
                      ),
                    ),
                    wrapWithModel(
                      model: _model.deleteSelectTaskModel1,
                      updateCallback: () => safeSetState(() {}),
                      child: DeleteSelectTaskWidget(),
                    ),
                    wrapWithModel(
                      model: _model.deleteSelectTaskModel2,
                      updateCallback: () => safeSetState(() {}),
                      child: DeleteSelectTaskWidget(),
                    ),
                    wrapWithModel(
                      model: _model.deleteSelectTaskModel3,
                      updateCallback: () => safeSetState(() {}),
                      child: DeleteSelectTaskWidget(),
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
