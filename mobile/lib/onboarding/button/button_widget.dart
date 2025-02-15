import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'button_model.dart';
export 'button_model.dart';

/// mainly using for onboard pages, and can be used as apps main button
class ButtonWidget extends StatefulWidget {
  const ButtonWidget({
    super.key,
    required this.btnText,
    required this.btnColor,
  });

  final String? btnText;
  final Color? btnColor;

  @override
  State<ButtonWidget> createState() => _ButtonWidgetState();
}

class _ButtonWidgetState extends State<ButtonWidget> {
  late ButtonModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => ButtonModel());
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
        minHeight: 47.0,
        maxWidth: MediaQuery.sizeOf(context).width * 1.0,
        maxHeight: double.infinity,
      ),
      decoration: BoxDecoration(),
      child: FFButtonWidget(
        onPressed: () {
          print('Button pressed ...');
        },
        text: widget.btnText!,
        options: FFButtonOptions(
          width: double.infinity,
          padding: EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
          iconPadding: EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
          color: widget.btnColor,
          textStyle: GoogleFonts.getFont(
            'Inter Tight',
            color: Colors.white,
            fontWeight: FontWeight.w600,
            fontSize: 16.0,
          ),
          borderRadius: BorderRadius.circular(6.0),
        ),
        showLoadingIndicator: false,
      ),
    );
  }
}
