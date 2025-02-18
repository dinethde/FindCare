import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'market_hosted_b_o_x_model.dart';
export 'market_hosted_b_o_x_model.dart';

class MarketHostedBOXWidget extends StatefulWidget {
  const MarketHostedBOXWidget({
    super.key,
    String? title,
    String? description,
  })  : this.title = title ?? 'Hosted By Find Care',
        this.description = description ??
            'Lorem ipsum dolor sit amet consectetur. Orci purus amet tortor nisi massa nisl sit';

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
      borderRadius: BorderRadius.circular(6.0),
      child: Container(
        width: MediaQuery.sizeOf(context).width * 1.0,
        height: 84.0,
        constraints: BoxConstraints(
          minWidth: 362.0,
          minHeight: 100.0,
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(6.0),
        ),
        child: Padding(
          padding: EdgeInsetsDirectional.fromSTEB(12.75, 12.0, 12.0, 12.0),
          child: Row(
            mainAxisSize: MainAxisSize.max,
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Icon(
                Icons.how_to_reg,
                color: FlutterFlowTheme.of(context).primaryText,
                size: 26.0,
              ),
              Flexible(
                child: Column(
                  mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      valueOrDefault<String>(
                        widget.title,
                        'Hosted By Find Care',
                      ),
                      style:
                          FlutterFlowTheme.of(context).headlineSmall.override(
                                fontFamily: 'Roboto',
                                fontSize: 14.0,
                                letterSpacing: 0.0,
                                fontWeight: FontWeight.w500,
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
                              color: Color(0xFFABABAB),
                              fontSize: 14.0,
                              letterSpacing: 0.0,
                            ),
                      ),
                    ),
                  ].divide(SizedBox(height: 8.0)),
                ),
              ),
            ].divide(SizedBox(width: 16.0)),
          ),
        ),
      ),
    );
  }
}
