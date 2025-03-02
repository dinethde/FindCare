import '/flutter_flow/flutter_flow_util.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'care_type_b_o_x_model.dart';
export 'care_type_b_o_x_model.dart';

class CareTypeBOXWidget extends StatefulWidget {
  const CareTypeBOXWidget({
    super.key,
    required this.selecColor,
    required this.icon,
    required this.text,
  });

  final Color? selecColor;
  final Widget? icon;
  final String? text;

  @override
  State<CareTypeBOXWidget> createState() => _CareTypeBOXWidgetState();
}

class _CareTypeBOXWidgetState extends State<CareTypeBOXWidget> {
  late CareTypeBOXModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CareTypeBOXModel());
  }

  @override
  void dispose() {
    _model.maybeDispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.sizeOf(context).width * 1.0,
      height: 63.3,
      decoration: BoxDecoration(
        color: FlutterFlowTheme.of(context).secondaryBackground,
        boxShadow: [
          BoxShadow(
            blurRadius: 3.0,
            color: Color(0xFFDDE6EE),
            offset: Offset(
              0.0,
              1.0,
            ),
          )
        ],
        borderRadius: BorderRadius.circular(6.0),
        border: Border.all(
          color: valueOrDefault<Color>(
            widget.selecColor,
            Colors.transparent,
          ),
        ),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          widget.icon!,
          Text(
            valueOrDefault<String>(
              widget.text,
              'TEXT',
            ),
            textAlign: TextAlign.start,
            style: FlutterFlowTheme.of(context).titleMedium.override(
                  fontFamily: 'Inter',
                  fontSize: 18.0,
                  letterSpacing: 0.0,
                ),
          ),
        ]
            .divide(SizedBox(width: 12.0))
            .addToStart(SizedBox(width: 16.0))
            .addToEnd(SizedBox(width: 16.0)),
      ),
    );
  }
}
