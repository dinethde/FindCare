import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'one_textbtn_model.dart';
export 'one_textbtn_model.dart';

class OneTextbtnWidget extends StatefulWidget {
  const OneTextbtnWidget({
    super.key,
    required this.lable,
  });

  final String? lable;

  @override
  State<OneTextbtnWidget> createState() => _OneTextbtnWidgetState();
}

class _OneTextbtnWidgetState extends State<OneTextbtnWidget> {
  late OneTextbtnModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => OneTextbtnModel());
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
        borderRadius: BorderRadius.circular(0.0),
      ),
      child: Container(
        width: MediaQuery.sizeOf(context).width * 1.0,
        child: Stack(
          alignment: AlignmentDirectional(1.0, 0.0),
          children: [
            FFButtonWidget(
              onPressed: () {
                print('Button pressed ...');
              },
              text: 'Button',
              options: FFButtonOptions(
                width: double.infinity,
                height: 48.0,
                padding: EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
                iconPadding: EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
                color: FlutterFlowTheme.of(context).info,
                textStyle: GoogleFonts.getFont(
                  'Inter Tight',
                  color: Colors.transparent,
                  fontWeight: FontWeight.w600,
                  fontSize: 16.0,
                ),
                borderRadius: BorderRadius.circular(6.0),
              ),
              showLoadingIndicator: false,
            ),
            Row(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Text(
                  valueOrDefault<String>(
                    widget.lable,
                    'TEXT',
                  ),
                  style: FlutterFlowTheme.of(context).bodyMedium.override(
                        fontFamily: 'Inter',
                        fontSize: 16.0,
                        letterSpacing: 0.0,
                        fontWeight: FontWeight.w500,
                      ),
                ),
              ]
                  .divide(SizedBox(width: 8.0))
                  .addToStart(SizedBox(width: 12.0))
                  .addToEnd(SizedBox(width: 12.0)),
            ),
            Padding(
              padding: EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 12.0, 0.0),
              child: Icon(
                Icons.arrow_forward_ios_outlined,
                color: Color(0xFF007AFF),
                size: 16.0,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
