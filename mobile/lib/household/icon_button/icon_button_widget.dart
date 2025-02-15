import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'icon_button_model.dart';
export 'icon_button_model.dart';

class IconButtonWidget extends StatefulWidget {
  const IconButtonWidget({
    super.key,
    required this.icon1,
    required this.lable,
  });

  final Widget? icon1;
  final String? lable;

  @override
  State<IconButtonWidget> createState() => _IconButtonWidgetState();
}

class _IconButtonWidgetState extends State<IconButtonWidget> {
  late IconButtonModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => IconButtonModel());
  }

  @override
  void dispose() {
    _model.maybeDispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
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
              color: FlutterFlowTheme.of(context).secondaryBackground,
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
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              widget.icon1!,
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
              Flexible(
                child: SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Row(
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      Opacity(
                        opacity: 0.0,
                        child: Text(
                          'Hello World',
                          style:
                              FlutterFlowTheme.of(context).bodyMedium.override(
                                    fontFamily: 'Inter',
                                    letterSpacing: 0.0,
                                  ),
                        ),
                      ),
                      Opacity(
                        opacity: 0.0,
                        child: Text(
                          'Hello World',
                          style:
                              FlutterFlowTheme.of(context).bodyMedium.override(
                                    fontFamily: 'Inter',
                                    letterSpacing: 0.0,
                                  ),
                        ),
                      ),
                      Opacity(
                        opacity: 0.0,
                        child: Text(
                          'Hello World',
                          style:
                              FlutterFlowTheme.of(context).bodyMedium.override(
                                    fontFamily: 'Inter',
                                    letterSpacing: 0.0,
                                  ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              Icon(
                Icons.arrow_forward_ios_outlined,
                color: Color(0xFF007AFF),
                size: 16.0,
              ),
            ]
                .divide(SizedBox(width: 8.0))
                .addToStart(SizedBox(width: 12.0))
                .addToEnd(SizedBox(width: 12.0)),
          ),
        ],
      ),
    );
  }
}
