import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'package:flutter/material.dart';
import 'task4new_copy_model.dart';
export 'task4new_copy_model.dart';

class Task4newCopyWidget extends StatefulWidget {
  const Task4newCopyWidget({super.key});

  @override
  State<Task4newCopyWidget> createState() => _Task4newCopyWidgetState();
}

class _Task4newCopyWidgetState extends State<Task4newCopyWidget> {
  late Task4newCopyModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => Task4newCopyModel());
  }

  @override
  void dispose() {
    _model.maybeDispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              Icons.house_sharp,
              color: FlutterFlowTheme.of(context).primaryText,
              size: 30.0,
            ),
            Text(
              'Certified',
              style: FlutterFlowTheme.of(context).bodySmall.override(
                    fontFamily: 'Inter',
                    letterSpacing: 0.0,
                    fontWeight: FontWeight.w500,
                  ),
            ),
          ],
        ),
        Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              Icons.elderly_woman_rounded,
              color: Color(0xFF999999),
              size: 30.0,
            ),
            Text(
              'Elderly Care',
              style: FlutterFlowTheme.of(context).bodySmall.override(
                    fontFamily: 'Inter',
                    color: Color(0xFF999999),
                    letterSpacing: 0.0,
                    fontWeight: FontWeight.w500,
                  ),
            ),
          ],
        ),
        Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              Icons.wheelchair_pickup,
              color: Color(0xFF999999),
              size: 30.0,
            ),
            Text(
              'Hospice Care',
              style: FlutterFlowTheme.of(context).bodySmall.override(
                    fontFamily: 'Inter',
                    color: Color(0xFF999999),
                    letterSpacing: 0.0,
                    fontWeight: FontWeight.w500,
                  ),
            ),
          ],
        ),
        Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              Icons.hail_sharp,
              color: Color(0xFF999999),
              size: 30.0,
            ),
            Text(
              'Child Care',
              style: FlutterFlowTheme.of(context).bodySmall.override(
                    fontFamily: 'Inter',
                    color: Color(0xFF999999),
                    letterSpacing: 0.0,
                    fontWeight: FontWeight.w500,
                  ),
            ),
          ],
        ),
        Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              Icons.person_3_rounded,
              color: Color(0xFF999999),
              size: 30.0,
            ),
            Text(
              'Professionals',
              style: FlutterFlowTheme.of(context).bodySmall.override(
                    fontFamily: 'Inter',
                    color: Color(0xFF999999),
                    letterSpacing: 0.0,
                    fontWeight: FontWeight.w500,
                  ),
            ),
          ],
        ),
      ].divide(SizedBox(width: 20.0)).around(SizedBox(width: 20.0)),
    );
  }
}
