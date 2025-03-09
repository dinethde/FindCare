import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'package:flutter/material.dart';
import 'sepcified_care_tab_bar_model.dart';
export 'sepcified_care_tab_bar_model.dart';

class SepcifiedCareTabBarWidget extends StatefulWidget {
  const SepcifiedCareTabBarWidget({super.key});

  @override
  State<SepcifiedCareTabBarWidget> createState() =>
      _SepcifiedCareTabBarWidgetState();
}

class _SepcifiedCareTabBarWidgetState extends State<SepcifiedCareTabBarWidget> {
  late SepcifiedCareTabBarModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => SepcifiedCareTabBarModel());
  }

  @override
  void dispose() {
    _model.maybeDispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: AlignmentDirectional(0.0, -1.0),
      child: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: Row(
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Column(
              mainAxisSize: MainAxisSize.max,
              children: [
                Icon(
                  Icons.add_home_work_rounded,
                  color: FlutterFlowTheme.of(context).primaryText,
                  size: 32.0,
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
                  size: 31.0,
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
                  Icons.wheelchair_pickup_outlined,
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
                  FFIcons.kbaby,
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
                  FFIcons.kuserNurse,
                  color: Color(0xFF999999),
                  size: 31.0,
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
      ),
    );
  }
}
