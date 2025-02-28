import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/custom_code/actions/index.dart' as actions;
import 'package:flutter/material.dart';
import 'appbar_model.dart';
export 'appbar_model.dart';

class AppbarWidget extends StatefulWidget {
  const AppbarWidget({
    super.key,
    required this.fLable,
    String? secLable,
    this.pgName,
    int? pgCount,
    int? validPage,
    this.anyBack,
  })  : this.secLable = secLable ?? 'TEXT',
        this.pgCount = pgCount ?? 0,
        this.validPage = validPage ?? 0;

  final String? fLable;
  final String secLable;
  final String? pgName;
  final int pgCount;
  final int validPage;
  final String? anyBack;

  @override
  State<AppbarWidget> createState() => _AppbarWidgetState();
}

class _AppbarWidgetState extends State<AppbarWidget> {
  late AppbarModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => AppbarModel());
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
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        InkWell(
          splashColor: Colors.transparent,
          focusColor: Colors.transparent,
          hoverColor: Colors.transparent,
          highlightColor: Colors.transparent,
          onTap: () async {
            if (widget.validPage == 0) {
              context.safePop();
              return;
            } else {
              if ((widget.validPage == 1) && (widget.pgCount == 1)) {
                await actions.navigateToPage(
                  context,
                  widget.anyBack,
                );
              } else {
                await actions.navigateToPage(
                  context,
                  widget.pgName,
                );
              }

              return;
            }
          },
          child: Row(
            mainAxisSize: MainAxisSize.max,
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
        InkWell(
          splashColor: Colors.transparent,
          focusColor: Colors.transparent,
          hoverColor: Colors.transparent,
          highlightColor: Colors.transparent,
          onTap: () async {
            var _shouldSetState = false;
            if (widget.pgCount == 0) {
              if (widget.validPage == 0) {
                context.safePop();
                if (_shouldSetState) safeSetState(() {});
                return;
              } else {
                await actions.navigateToPage(
                  context,
                  widget.pgName,
                );
                if (_shouldSetState) safeSetState(() {});
                return;
              }
            } else {
              _model.backSrc = await actions.navigateToPageReturn(
                context,
                widget.pgName,
              );
              _shouldSetState = true;
              if (_shouldSetState) safeSetState(() {});
              return;
            }

            if (_shouldSetState) safeSetState(() {});
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
