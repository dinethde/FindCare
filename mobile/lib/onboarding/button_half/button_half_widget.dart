import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'button_half_model.dart';
export 'button_half_model.dart';

/// mainly using for onboard pages, and can be used as apps main button
class ButtonHalfWidget extends StatefulWidget {
  const ButtonHalfWidget({
    super.key,
    required this.btnText,
    required this.btnColor,
  });

  final String? btnText;
  final Color? btnColor;

  @override
  State<ButtonHalfWidget> createState() => _ButtonHalfWidgetState();
}

class _ButtonHalfWidgetState extends State<ButtonHalfWidget> {
  late ButtonHalfModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => ButtonHalfModel());
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
        maxWidth: MediaQuery.sizeOf(context).width * 0.25,
      ),
      decoration: BoxDecoration(),
      child: FFButtonWidget(
        onPressed: () {
          print('Button pressed ...');
        },
        text: widget.btnText!,
        options: FFButtonOptions(
          width: double.infinity,
          height: 35.0,
          padding: EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
          iconPadding: EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
          color: widget.btnColor,
          textStyle: FlutterFlowTheme.of(context).headlineSmall.override(
                fontFamily: 'Inter',
                color: Colors.white,
                fontSize: 12.0,
                letterSpacing: 0.0,
                fontWeight: FontWeight.w600,
              ),
          borderRadius: BorderRadius.circular(6.0),
        ),
      ),
    );
  }
}
