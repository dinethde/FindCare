import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'market_hosted_b_o_x_model.dart';
export 'market_hosted_b_o_x_model.dart';

class MarketHostedBOXWidget extends StatefulWidget {
  const MarketHostedBOXWidget({
    super.key,
    required this.icon,
    String? title,
    String? description,
  })  : this.title = title ?? 'Hosted By Find Care',
        this.description = description ??
            'Lorem ipsum dolor sit amet consectetur. Orci purus amet tortor nisi massa nisl sit';

  /// icon for the profile box
  final Widget? icon;

  /// title for the profile box
  final String title;

  /// Description for the profile box
  final String description;

  @override
  State<MarketHostedBOXWidget> createState() => _MarketHostedBOXWidgetState();
}

class _MarketHostedBOXWidgetState extends State<MarketHostedBOXWidget> {
  late MarketHostedBOXModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => MarketHostedBOXModel());
  }

  @override
  void dispose() {
    _model.maybeDispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      child: Container(
        constraints: BoxConstraints(
          minWidth: 362.0,
          minHeight: 100.0,
        ),
        decoration: BoxDecoration(
          color: FlutterFlowTheme.of(context).secondaryBackground,
        ),
        child: Padding(
          padding: EdgeInsetsDirectional.fromSTEB(12.75, 12.0, 12.0, 12.0),
          child: Row(
            mainAxisSize: MainAxisSize.max,
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Align(
                alignment: AlignmentDirectional(-1.0, -1.0),
                child: Icon(
                  Icons.how_to_reg,
                  color: FlutterFlowTheme.of(context).primaryText,
                  size: 30.0,
                ),
              ),
              Flexible(
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
                          'Hosted By Find Care',
                        ),
                        style:
                            FlutterFlowTheme.of(context).headlineSmall.override(
                                  fontFamily: 'Inter',
                                  letterSpacing: 0.0,
                                ),
                      ),
                    ),
                    Flexible(
                      child: AutoSizeText(
                        valueOrDefault<String>(
                          widget.description,
                          'Lorem ipsum dolor sit amet consectetur. Orci purus amet tortor nisi massa nisl sit',
                        ).maybeHandleOverflow(
                          maxChars: 50,
                        ),
                        minFontSize: 14.0,
                        style: FlutterFlowTheme.of(context).titleSmall.override(
                              fontFamily: 'Inter',
                              color: FlutterFlowTheme.of(context).secondaryText,
                              letterSpacing: 0.0,
                            ),
                      ),
                    ),
                  ].divide(SizedBox(height: 16.0)),
                ),
              ),
            ].divide(SizedBox(width: 16.0)),
          ),
        ),
      ),
    );
  }
}
