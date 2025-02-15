import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'package:flutter/material.dart';
import 'showmore_b_t_n_model.dart';
export 'showmore_b_t_n_model.dart';

class ShowmoreBTNWidget extends StatefulWidget {
  const ShowmoreBTNWidget({
    super.key,
    this.buttonText,
  });

  /// text for the button
  final String? buttonText;

  @override
  State<ShowmoreBTNWidget> createState() => _ShowmoreBTNWidgetState();
}

class _ShowmoreBTNWidgetState extends State<ShowmoreBTNWidget> {
  late ShowmoreBTNModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => ShowmoreBTNModel());
  }

  @override
  void dispose() {
    _model.maybeDispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      child: Container(
        constraints: BoxConstraints(
          minWidth: 105.0,
          minHeight: 20.0,
        ),
        decoration: BoxDecoration(),
        child: FFButtonWidget(
          onPressed: () {
            print('Button pressed ...');
          },
          text: valueOrDefault<String>(
            widget.buttonText,
            'Show more',
          ),
          icon: Icon(
            Icons.arrow_forward_ios_sharp,
            size: 16.0,
          ),
          options: FFButtonOptions(
            height: 40.0,
            padding: EdgeInsetsDirectional.fromSTEB(16.0, 0.0, 16.0, 0.0),
            iconAlignment: IconAlignment.end,
            iconPadding: EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
            color: Color(0x00E0E3E7),
            textStyle: FlutterFlowTheme.of(context).titleSmall.override(
                  fontFamily: 'Roboto',
                  color: FlutterFlowTheme.of(context).primaryText,
                  letterSpacing: 0.0,
                  fontWeight: FontWeight.bold,
                  decoration: TextDecoration.underline,
                ),
            elevation: 0.0,
            borderRadius: BorderRadius.circular(6.0),
          ),
        ),
      ),
    );
  }
}
