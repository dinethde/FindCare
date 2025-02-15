import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'package:flutter/material.dart';
import 'market_place2_model.dart';
export 'market_place2_model.dart';

class MarketPlace2Widget extends StatefulWidget {
  const MarketPlace2Widget({super.key});

  @override
  State<MarketPlace2Widget> createState() => _MarketPlace2WidgetState();
}

class _MarketPlace2WidgetState extends State<MarketPlace2Widget> {
  late MarketPlace2Model _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => MarketPlace2Model());
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
          child: ClipRRect(
            borderRadius: BorderRadius.circular(0.0),
            child: Image.network(
              'https://images.unsplash.com/photo-1527613426441-4da17471b66d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHw4fHxudXJzZXxlbnwwfHx8fDE3Mzk0NTIwMjB8MA&ixlib=rb-4.0.3&q=80&w=1080',
              width: MediaQuery.sizeOf(context).width * 1.0,
              height: 250.0,
              fit: BoxFit.fill,
            ),
          ),
        ),
      ),
    );
  }
}
