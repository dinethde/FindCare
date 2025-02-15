import '/flutter_flow/flutter_flow_icon_button.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'package:flutter/material.dart';
import 'todaystasks_model.dart';
export 'todaystasks_model.dart';

class TodaystasksWidget extends StatefulWidget {
  const TodaystasksWidget({
    super.key,
    String? date,
    required this.btncolor,
  }) : this.date = date ?? '05/01';

  final String date;
  final Color? btncolor;

  @override
  State<TodaystasksWidget> createState() => _TodaystasksWidgetState();
}

class _TodaystasksWidgetState extends State<TodaystasksWidget> {
  late TodaystasksModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => TodaystasksModel());
  }

  @override
  void dispose() {
    _model.maybeDispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsetsDirectional.fromSTEB(15.0, 25.0, 15.0, 0.0),
      child: Column(
        mainAxisSize: MainAxisSize.max,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            valueOrDefault<String>(
              widget.date,
              '05/01',
            ),
            style: FlutterFlowTheme.of(context).bodyMedium.override(
                  fontFamily: 'Inter',
                  color: Color(0xFFABABAB),
                  letterSpacing: 0.0,
                ),
          ),
          Padding(
            padding: EdgeInsetsDirectional.fromSTEB(1.0, 0.0, 0.0, 0.0),
            child: Row(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  'Today\'s Tasks',
                  style: FlutterFlowTheme.of(context).displayMedium.override(
                        fontFamily: 'Inter',
                        letterSpacing: 0.0,
                      ),
                ),
                FlutterFlowIconButton(
                  icon: Icon(
                    Icons.add_circle_outlined,
                    color: valueOrDefault<Color>(
                      widget.btncolor,
                      Color(0xFFABABAB),
                    ),
                    size: 35.0,
                  ),
                  onPressed: () {
                    print('IconButton pressed ...');
                  },
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
