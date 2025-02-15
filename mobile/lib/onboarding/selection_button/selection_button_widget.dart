import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'package:flutter/material.dart';
import 'selection_button_model.dart';
export 'selection_button_model.dart';

/// mainly using for onboard pages, and can be used as apps main button
class SelectionButtonWidget extends StatefulWidget {
  const SelectionButtonWidget({
    super.key,
    required this.btnText,
    required this.btnColor,
  });

  final String? btnText;
  final Color? btnColor;

  @override
  State<SelectionButtonWidget> createState() => _SelectionButtonWidgetState();
}

class _SelectionButtonWidgetState extends State<SelectionButtonWidget> {
  late SelectionButtonModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => SelectionButtonModel());
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
      ),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(0.0),
      ),
      child: FFButtonWidget(
        onPressed: () {
          print('Button pressed ...');
        },
        text: widget.btnText!,
        options: FFButtonOptions(
          width: double.infinity,
          height: 45.0,
          padding: EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
          iconPadding: EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
          color: widget.btnColor,
          textStyle: FlutterFlowTheme.of(context).headlineSmall.override(
                fontFamily: 'Inter',
                color: Color(0xFF8D8D8D),
                fontSize: 14.0,
                letterSpacing: 0.0,
                fontWeight: FontWeight.normal,
              ),
          borderRadius: BorderRadius.circular(0.0),
        ),
      ),
    );
  }
}
