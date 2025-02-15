import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/onboarding/button/button_widget.dart';
import 'package:flutter/material.dart';
import 'clock_i_n_o_u_t_model.dart';
export 'clock_i_n_o_u_t_model.dart';

class ClockINOUTWidget extends StatefulWidget {
  const ClockINOUTWidget({
    super.key,
    required this.date,
    required this.time,
    required this.location,
    required this.btnColor,
    required this.btnText,
  });

  final String? date;
  final String? time;
  final String? location;
  final Color? btnColor;
  final String? btnText;

  @override
  State<ClockINOUTWidget> createState() => _ClockINOUTWidgetState();
}

class _ClockINOUTWidgetState extends State<ClockINOUTWidget> {
  late ClockINOUTModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => ClockINOUTModel());
  }

  @override
  void dispose() {
    _model.maybeDispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: BoxConstraints(
        maxWidth: MediaQuery.sizeOf(context).width * 1.0,
        maxHeight: double.infinity,
      ),
      decoration: BoxDecoration(
        color: FlutterFlowTheme.of(context).info,
        boxShadow: [
          BoxShadow(
            blurRadius: 3.0,
            color: Color(0xFFDDE6EE),
            offset: Offset(
              0.0,
              2.0,
            ),
          )
        ],
        borderRadius: BorderRadius.circular(6.0),
      ),
      child: Padding(
        padding: EdgeInsets.all(12.0),
        child: Column(
          mainAxisSize: MainAxisSize.max,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Column(
              mainAxisSize: MainAxisSize.max,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  valueOrDefault<String>(
                    widget.date,
                    'text',
                  ),
                  style: FlutterFlowTheme.of(context).bodyMedium.override(
                        fontFamily: 'Inter',
                        fontSize: 12.0,
                        letterSpacing: 0.0,
                      ),
                ),
                Text(
                  valueOrDefault<String>(
                    widget.time,
                    '08.00AM - 05.00PM',
                  ),
                  style: FlutterFlowTheme.of(context).bodyMedium.override(
                        fontFamily: 'Inter',
                        fontSize: 16.0,
                        letterSpacing: 0.0,
                        fontWeight: FontWeight.w600,
                      ),
                ),
                Row(
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    Icon(
                      Icons.location_on,
                      color: Color(0xFFA6A6A6),
                      size: 14.0,
                    ),
                    Text(
                      valueOrDefault<String>(
                        widget.location,
                        'NO. 190, Deerakkandha rd, Wadduwa',
                      ),
                      style: FlutterFlowTheme.of(context).bodyMedium.override(
                            fontFamily: 'Inter',
                            color: Color(0xFFA6A6A6),
                            fontSize: 10.0,
                            letterSpacing: 0.0,
                          ),
                    ),
                  ].divide(SizedBox(width: 8.0)),
                ),
              ].divide(SizedBox(height: 8.0)),
            ),
            wrapWithModel(
              model: _model.buttonModel,
              updateCallback: () => safeSetState(() {}),
              child: ButtonWidget(
                btnText: widget.btnText!,
                btnColor: widget.btnColor!,
              ),
            ),
          ].divide(SizedBox(height: 20.0)),
        ),
      ),
    );
  }
}
