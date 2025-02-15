import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'package:flutter/material.dart';
import 'hehe_model.dart';
export 'hehe_model.dart';

class HeheWidget extends StatefulWidget {
  const HeheWidget({
    super.key,
    required this.date,
    required this.time,
    required this.address,
    required this.button,
    required this.icon,
  });

  final DateTime? date;
  final DateTime? time;
  final LatLng? address;
  final String? button;
  final Widget? icon;

  @override
  State<HeheWidget> createState() => _HeheWidgetState();
}

class _HeheWidgetState extends State<HeheWidget> {
  late HeheModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => HeheModel());
  }

  @override
  void dispose() {
    _model.maybeDispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 362.0,
      height: 152.0,
      decoration: BoxDecoration(
        color: FlutterFlowTheme.of(context).secondaryBackground,
      ),
      child: Stack(
        children: [
          Align(
            alignment: AlignmentDirectional(-0.89, -0.74),
            child: Text(
              '01/05/2024',
              style: FlutterFlowTheme.of(context).bodySmall.override(
                    fontFamily: 'Roboto',
                    letterSpacing: 0.0,
                  ),
            ),
          ),
          Align(
            alignment: AlignmentDirectional(-0.85, -0.44),
            child: Text(
              '08.00AM - 05.00PM',
              style: FlutterFlowTheme.of(context).bodyLarge.override(
                    fontFamily: 'Inter',
                    letterSpacing: 0.0,
                    fontWeight: FontWeight.bold,
                  ),
            ),
          ),
          Align(
            alignment: AlignmentDirectional(-0.61, -0.04),
            child: Text(
              'NO. 190, Weerakkandha rd, Wadduwa',
              style: FlutterFlowTheme.of(context).bodyMedium.override(
                    fontFamily: 'Roboto',
                    color: Color(0xFFBFBFBF),
                    fontSize: 11.0,
                    letterSpacing: 0.0,
                  ),
            ),
          ),
          Align(
            alignment: AlignmentDirectional(-0.93, -0.05),
            child: Icon(
              Icons.location_on_outlined,
              color: Color(0xFFBFBFBF),
              size: 18.0,
            ),
          ),
          Align(
            alignment: AlignmentDirectional(-0.02, 0.74),
            child: FFButtonWidget(
              onPressed: () {
                print('Button pressed ...');
              },
              text: 'Primary Button',
              options: FFButtonOptions(
                width: 338.0,
                height: 43.0,
                padding: EdgeInsetsDirectional.fromSTEB(16.0, 0.0, 16.0, 0.0),
                iconPadding: EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
                color: FlutterFlowTheme.of(context).primary,
                textStyle: FlutterFlowTheme.of(context).titleSmall.override(
                      fontFamily: 'Inter',
                      color: Colors.white,
                      letterSpacing: 0.0,
                    ),
                elevation: 0.0,
                borderRadius: BorderRadius.circular(8.0),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
