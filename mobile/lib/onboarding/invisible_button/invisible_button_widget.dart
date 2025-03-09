import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'package:flutter/material.dart';
import 'invisible_button_model.dart';
export 'invisible_button_model.dart';

class InvisibleButtonWidget extends StatefulWidget {
  const InvisibleButtonWidget({
    super.key,
    required this.lableName,
    this.color,
  });

  final String? lableName;
  final Color? color;

  @override
  State<InvisibleButtonWidget> createState() => _InvisibleButtonWidgetState();
}

class _InvisibleButtonWidgetState extends State<InvisibleButtonWidget> {
  late InvisibleButtonModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => InvisibleButtonModel());
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
        maxWidth: double.infinity,
        maxHeight: 20.0,
      ),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(0.0),
      ),
      child: FFButtonWidget(
        onPressed: () {
          print('Button pressed ...');
        },
        text: widget.lableName!,
        options: FFButtonOptions(
          padding: EdgeInsets.all(0.0),
          iconPadding: EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
          color: Color(0x00FFFFFF),
          textStyle: FlutterFlowTheme.of(context).titleSmall.override(
                fontFamily: 'Inter',
                color: valueOrDefault<Color>(
                  widget.color,
                  Color(0xFFFF3355),
                ),
                fontSize: 12.0,
                letterSpacing: 0.0,
              ),
          elevation: 0.0,
          borderRadius: BorderRadius.circular(0.0),
        ),
      ),
    );
  }
}
