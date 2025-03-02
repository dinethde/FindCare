import '/flutter_flow/flutter_flow_util.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'softskill_c_o_m_p_model.dart';
export 'softskill_c_o_m_p_model.dart';

class SoftskillCOMPWidget extends StatefulWidget {
  const SoftskillCOMPWidget({super.key});

  @override
  State<SoftskillCOMPWidget> createState() => _SoftskillCOMPWidgetState();
}

class _SoftskillCOMPWidgetState extends State<SoftskillCOMPWidget> {
  late SoftskillCOMPModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => SoftskillCOMPModel());
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
        maxHeight: double.infinity,
      ),
      decoration: BoxDecoration(
        color: FlutterFlowTheme.of(context).info,
        boxShadow: [
          BoxShadow(
            blurRadius: 3.0,
            color: Color(0xFFDDE6EE),
            offset: Offset(
              0.0,
              2.0,
            ),
          )
        ],
        borderRadius: BorderRadius.circular(8.0),
      ),
      child: Padding(
        padding: EdgeInsetsDirectional.fromSTEB(10.0, 9.0, 10.0, 9.0),
        child: Column(
          mainAxisSize: MainAxisSize.max,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  'Dineth',
                  style: FlutterFlowTheme.of(context).bodyMedium.override(
                        fontFamily: 'Inter',
                        fontSize: 16.0,
                        letterSpacing: 0.0,
                        fontWeight: FontWeight.w600,
                      ),
                ),
                Row(
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    Icon(
                      Icons.star_rounded,
                      color: Color(0xFFFCA929),
                      size: 16.0,
                    ),
                    Icon(
                      Icons.star_rounded,
                      color: Color(0xFFFCA929),
                      size: 16.0,
                    ),
                    Icon(
                      Icons.star_rounded,
                      color: Color(0xFFFCA929),
                      size: 16.0,
                    ),
                    Icon(
                      Icons.star_rounded,
                      color: Color(0xFFFCA929),
                      size: 16.0,
                    ),
                    Icon(
                      Icons.star_rounded,
                      color: Color(0xFFFCA929),
                      size: 16.0,
                    ),
                  ],
                ),
              ],
            ),
            Text(
              '2022',
              style: FlutterFlowTheme.of(context).bodyMedium.override(
                    fontFamily: 'Inter',
                    letterSpacing: 0.0,
                  ),
            ),
            Text(
              'Have worked more than 46hrs for xx household',
              style: FlutterFlowTheme.of(context).bodyMedium.override(
                    fontFamily: 'Inter',
                    letterSpacing: 0.0,
                  ),
            ),
          ],
        ),
      ),
    );
  }
}
