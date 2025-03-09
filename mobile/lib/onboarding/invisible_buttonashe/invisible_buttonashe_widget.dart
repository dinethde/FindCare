import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'package:flutter/material.dart';
import 'invisible_buttonashe_model.dart';
export 'invisible_buttonashe_model.dart';

class InvisibleButtonasheWidget extends StatefulWidget {
  const InvisibleButtonasheWidget({
    super.key,
    required this.lableName,
  });

  final String? lableName;

  @override
  State<InvisibleButtonasheWidget> createState() =>
      _InvisibleButtonasheWidgetState();
}

class _InvisibleButtonasheWidgetState extends State<InvisibleButtonasheWidget> {
  late InvisibleButtonasheModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => InvisibleButtonasheModel());
  }

  @override
  void dispose() {
    _model.maybeDispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 100.0,
      height: 20.0,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(0.0),
      ),
      child: Align(
        alignment: const AlignmentDirectional(-1.0, 0.0),
        child: FFButtonWidget(
          onPressed: () {
            print('Button pressed ...');
          },
          text: widget.lableName!,
          options: FFButtonOptions(
            padding: const EdgeInsets.all(0.0),
            iconPadding: const EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
            color: const Color(0x00FFFFFF),
            textStyle: FlutterFlowTheme.of(context).titleSmall.override(
                  fontFamily: 'Inter',
                  color: const Color(0xFFA6A6A6),
                  fontSize: 12.0,
                  letterSpacing: 0.0,
                ),
            elevation: 0.0,
            borderRadius: BorderRadius.circular(0.0),
          ),
        ),
      ),
    );
  }
}
