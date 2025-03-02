import '/flutter_flow/flutter_flow_util.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'app_bar_leftside_model.dart';
export 'app_bar_leftside_model.dart';

class AppBarLeftsideWidget extends StatefulWidget {
  const AppBarLeftsideWidget({
    super.key,
    required this.fLable,
  });

  final String? fLable;

  @override
  State<AppBarLeftsideWidget> createState() => _AppBarLeftsideWidgetState();
}

class _AppBarLeftsideWidgetState extends State<AppBarLeftsideWidget> {
  late AppBarLeftsideModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => AppBarLeftsideModel());
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
      mainAxisAlignment: MainAxisAlignment.start,
      children: [
        InkWell(
          splashColor: Colors.transparent,
          focusColor: Colors.transparent,
          hoverColor: Colors.transparent,
          highlightColor: Colors.transparent,
          onTap: () async {
            context.safePop();
          },
          child: Row(
            mainAxisSize: MainAxisSize.max,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Icon(
                Icons.chevron_left,
                color: Color(0xFF007AFF),
                size: 24.0,
              ),
              Text(
                valueOrDefault<String>(
                  widget.fLable,
                  'TEXT',
                ),
                style: FlutterFlowTheme.of(context).bodyMedium.override(
                      fontFamily: 'Inter',
                      color: Color(0xFF007AFF),
                      fontSize: 16.0,
                      letterSpacing: 0.0,
                    ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
