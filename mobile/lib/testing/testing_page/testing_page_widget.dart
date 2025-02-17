import '/componets_approved/marketplace_caregiver_card/marketplace_caregiver_card_widget.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'package:flutter/material.dart';
import 'testing_page_model.dart';
export 'testing_page_model.dart';

class TestingPageWidget extends StatefulWidget {
  const TestingPageWidget({super.key});

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
          child: Column(
            mainAxisSize: MainAxisSize.max,
            children: [
              Expanded(
                child: wrapWithModel(
                  model: _model.marketplaceCaregiverCardModel,
                  updateCallback: () => safeSetState(() {}),
                  updateOnChange: true,
                  child: MarketplaceCaregiverCardWidget(
                    image:
                        'https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHw1fHxzdGFycnklMjBuaWdodHxlbnwwfHx8fDE3Mzk3MTMwOTd8MA&ixlib=rb-4.0.3&q=80&w=1080',
                    name: 'asdasd',
                    rating: 'asdasd',
                    agency: 'asdasd',
                    description: 'asdasd',
                    price: 'asdasd',
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
