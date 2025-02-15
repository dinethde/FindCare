import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'package:flutter/material.dart';
import 'task4_model.dart';
export 'task4_model.dart';

class Task4Widget extends StatefulWidget {
  const Task4Widget({super.key});

  @override
  State<Task4Widget> createState() => _Task4WidgetState();
}

class _Task4WidgetState extends State<Task4Widget> {
  late Task4Model _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => Task4Model());
  }

  @override
  void dispose() {
    _model.maybeDispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Row(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          Column(
            mainAxisSize: MainAxisSize.max,
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
            mainAxisSize: MainAxisSize.max,
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
            mainAxisSize: MainAxisSize.max,
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
            mainAxisSize: MainAxisSize.max,
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
            mainAxisSize: MainAxisSize.max,
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
        ].divide(SizedBox(width: 20.0)).addToStart(SizedBox(width: 12.0)),
      ),
    );
  }
}
