import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'package:auto_size_text/auto_size_text.dart';
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
      constraints: BoxConstraints(
        minHeight: 150.0,
        maxHeight: double.infinity,
      ),
      decoration: BoxDecoration(
        color: FlutterFlowTheme.of(context).secondaryBackground,
        borderRadius: BorderRadius.circular(8.0),
        border: Border.all(
          color: FlutterFlowTheme.of(context).alternate,
        ),
      ),
      child: Padding(
        padding: EdgeInsetsDirectional.fromSTEB(12.0, 0.0, 0.0, 0.0),
        child: Column(
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Align(
              alignment: AlignmentDirectional(-1.0, -1.0),
              child: Text(
                valueOrDefault<String>(
                  widget.title,
                  'Title',
                ).maybeHandleOverflow(
                  maxChars: 10,
                  replacement: '…',
                ),
                style: FlutterFlowTheme.of(context).headlineMedium.override(
                      fontFamily: 'Inter',
                      letterSpacing: 0.0,
                    ),
              ),
            ),
            Flexible(
              child: Align(
                alignment: AlignmentDirectional(-1.0, -1.0),
                child: AutoSizeText(
                  valueOrDefault<String>(
                    widget.normalText,
                    'Lorem ipsum dolor sit amet consectetur. Ac consequat cursus',
                  ).maybeHandleOverflow(
                    maxChars: 45,
                    replacement: '…',
                  ),
                  textAlign: TextAlign.start,
                  style: FlutterFlowTheme.of(context).titleSmall.override(
                        fontFamily: 'Inter',
                        color: FlutterFlowTheme.of(context).secondaryText,
                        letterSpacing: 0.0,
                      ),
                ),
              ),
            ),
          ]
              .divide(SizedBox(height: 8.0))
              .addToStart(SizedBox(height: 46.0))
              .addToEnd(SizedBox(height: 10.0)),
        ),
      ),
    );
  }
}
