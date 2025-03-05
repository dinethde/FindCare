import '/flutter_flow/flutter_flow_util.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'content_textbox_model.dart';
export 'content_textbox_model.dart';

class ContentTextboxWidget extends StatefulWidget {
  const ContentTextboxWidget({
    super.key,
    required this.textField,
    this.readOnly,
  });

  final String? textField;
  final bool? readOnly;

  @override
  State<ContentTextboxWidget> createState() => _ContentTextboxWidgetState();
}

class _ContentTextboxWidgetState extends State<ContentTextboxWidget> {
  late ContentTextboxModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => ContentTextboxModel());

    _model.textController ??= TextEditingController();
    _model.textFieldFocusNode ??= FocusNode();
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
        borderRadius: BorderRadius.circular(4.0),
        shape: BoxShape.rectangle,
      ),
      child: Container(
        width: double.infinity,
        child: TextFormField(
          controller: _model.textController,
          focusNode: _model.textFieldFocusNode,
          autofocus: false,
          readOnly: widget.readOnly!,
          obscureText: false,
          decoration: InputDecoration(
            isDense: true,
            alignLabelWithHint: true,
            hintText: widget.textField,
            hintStyle: FlutterFlowTheme.of(context).bodyMedium.override(
                  fontFamily: 'Inter',
                  fontSize: 16.0,
                  letterSpacing: 0.0,
                  fontWeight: FontWeight.normal,
                ),
            enabledBorder: OutlineInputBorder(
              borderSide: BorderSide(
                color: Color(0xFFD9D9D9),
                width: 1.0,
              ),
              borderRadius: BorderRadius.circular(6.0),
            ),
            focusedBorder: OutlineInputBorder(
              borderSide: BorderSide(
                color: Color(0x00000000),
                width: 1.0,
              ),
              borderRadius: BorderRadius.circular(6.0),
            ),
            errorBorder: OutlineInputBorder(
              borderSide: BorderSide(
                color: FlutterFlowTheme.of(context).error,
                width: 1.0,
              ),
              borderRadius: BorderRadius.circular(6.0),
            ),
            focusedErrorBorder: OutlineInputBorder(
              borderSide: BorderSide(
                color: FlutterFlowTheme.of(context).error,
                width: 1.0,
              ),
              borderRadius: BorderRadius.circular(6.0),
            ),
            filled: true,
            fillColor: FlutterFlowTheme.of(context).info,
            contentPadding:
                EdgeInsetsDirectional.fromSTEB(17.5, 17.5, 0.0, 17.5),
          ),
          style: FlutterFlowTheme.of(context).bodyMedium.override(
                fontFamily: 'Inter',
                fontSize: 16.0,
                letterSpacing: 0.0,
              ),
          textAlign: TextAlign.start,
          cursorColor: FlutterFlowTheme.of(context).primaryText,
          validator: _model.textControllerValidator.asValidator(context),
        ),
      ),
    );
  }
}
