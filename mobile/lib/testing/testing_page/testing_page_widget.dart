import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/testing/task4new_copy/task4new_copy_widget.dart';
import 'package:flutter/material.dart';
import 'testing_page_model.dart';
export 'testing_page_model.dart';

class TestingPageWidget extends StatefulWidget {
  const TestingPageWidget({super.key});

  static String routeName = 'testingPage';
  static String routePath = '/testingPage';

  @override
  State<TestingPageWidget> createState() => _TestingPageWidgetState();
}

class _TestingPageWidgetState extends State<TestingPageWidget> {
  late TestingPageModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => TestingPageModel());
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
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                mainAxisSize: MainAxisSize.max,
                children: [
                  Expanded(
                    child: wrapWithModel(
                      model: _model.task4newCopyModel,
                      updateCallback: () => safeSetState(() {}),
                      child: Task4newCopyWidget(),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
