import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'package:flutter/material.dart';
import 'very_small_button_model.dart';
export 'very_small_button_model.dart';

class VerySmallButtonWidget extends StatefulWidget {
  const VerySmallButtonWidget({
    super.key,
    required this.lable,
    required this.color,
    required this.textColor,
  });

  final String? lable;
  final Color? color;
  final Color? textColor;

  @override
  State<VerySmallButtonWidget> createState() => _VerySmallButtonWidgetState();
}

class _VerySmallButtonWidgetState extends State<VerySmallButtonWidget> {
  late VerySmallButtonModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => VerySmallButtonModel());
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
        maxWidth: MediaQuery.sizeOf(context).width * 0.15,
      ),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(30.0),
          bottomRight: Radius.circular(30.0),
          topLeft: Radius.circular(30.0),
          topRight: Radius.circular(30.0),
        ),
      ),
      child: FFButtonWidget(
        onPressed: () {
          print('Button pressed ...');
        },
        text: widget.lable!,
        options: FFButtonOptions(
          width: double.infinity,
          height: 30.0,
          padding: EdgeInsetsDirectional.fromSTEB(16.0, 0.0, 16.0, 0.0),
          iconPadding: EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
          color: widget.color,
          textStyle: FlutterFlowTheme.of(context).titleSmall.override(
                fontFamily: 'Inter',
                color: widget.textColor,
                fontSize: 14.0,
                letterSpacing: 0.0,
              ),
          elevation: 0.0,
          borderSide: BorderSide(
            color: Color(0xFFD9D9D9),
            width: 0.0,
          ),
          borderRadius: BorderRadius.circular(8.0),
        ),
      ),
    );
  }
}
