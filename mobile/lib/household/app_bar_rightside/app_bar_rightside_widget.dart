import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'package:flutter/material.dart';
import 'app_bar_rightside_model.dart';
export 'app_bar_rightside_model.dart';

class AppBarRightsideWidget extends StatefulWidget {
  const AppBarRightsideWidget({
    super.key,
    required this.secLable,
  });

  final String? secLable;

  @override
  State<AppBarRightsideWidget> createState() => _AppBarRightsideWidgetState();
}

class _AppBarRightsideWidgetState extends State<AppBarRightsideWidget> {
  late AppBarRightsideModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => AppBarRightsideModel());
  }

  @override
  void dispose() {
    _model.maybeDispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.max,
      mainAxisAlignment: MainAxisAlignment.end,
      children: [
        InkWell(
          splashColor: Colors.transparent,
          focusColor: Colors.transparent,
          hoverColor: Colors.transparent,
          highlightColor: Colors.transparent,
          onTap: () async {
            context.safePop();
          },
          child: Text(
            valueOrDefault<String>(
              widget.secLable,
              'TEXT',
            ),
            style: FlutterFlowTheme.of(context).bodyMedium.override(
                  fontFamily: 'Inter',
                  color: Color(0xFF007AFF),
                  fontSize: 16.0,
                  letterSpacing: 0.0,
                ),
          ),
        ),
      ],
    );
  }
}
