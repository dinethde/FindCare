import '/flutter_flow/flutter_flow_util.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'market_educational_model.dart';
export 'market_educational_model.dart';

class MarketEducationalWidget extends StatefulWidget {
  const MarketEducationalWidget({
    super.key,
    this.title,
    this.normalText,
  });

  /// heading for NOQ
  final String? title;

  /// description or sentence for something
  final String? normalText;

  @override
  State<MarketEducationalWidget> createState() =>
      _MarketEducationalWidgetState();
}

class _MarketEducationalWidgetState extends State<MarketEducationalWidget> {
  late MarketEducationalModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => MarketEducationalModel());
  }

  @override
  void dispose() {
    _model.maybeDispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 220.0,
      height: 160.0,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(8.0),
        border: Border.all(
          color: FlutterFlowTheme.of(context).alternate,
        ),
      ),
      child: Padding(
        padding: EdgeInsetsDirectional.fromSTEB(12.0, 0.0, 12.0, 0.0),
        child: Column(
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              valueOrDefault<String>(
                widget.title,
                'Title',
              ).maybeHandleOverflow(
                maxChars: 10,
                replacement: '…',
              ),
              style: FlutterFlowTheme.of(context).headlineMedium.override(
                    fontFamily: 'Inter',
                    fontSize: 15.0,
                    letterSpacing: 0.0,
                  ),
            ),
            Text(
              valueOrDefault<String>(
                widget.normalText,
                'asdasd',
              ),
              style: FlutterFlowTheme.of(context).bodyMedium.override(
                    fontFamily: 'Roboto',
                    color: Color(0xFFABABAB),
                    fontSize: 13.0,
                    letterSpacing: 0.0,
                  ),
            ),
          ].divide(SizedBox(height: 8.0)).addToStart(SizedBox(height: 4.0)),
        ),
      ),
    );
  }
}
