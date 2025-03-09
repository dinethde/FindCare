import '/flutter_flow/flutter_flow_icon_button.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'package:flutter/material.dart';
import 'caregiver_image_b_o_x_model.dart';
export 'caregiver_image_b_o_x_model.dart';

class CaregiverImageBOXWidget extends StatefulWidget {
  const CaregiverImageBOXWidget({super.key});

  @override
  State<CaregiverImageBOXWidget> createState() =>
      _CaregiverImageBOXWidgetState();
}

class _CaregiverImageBOXWidgetState extends State<CaregiverImageBOXWidget> {
  late CaregiverImageBOXModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CaregiverImageBOXModel());
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
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        FlutterFlowIconButton(
          borderRadius: 30.0,
          buttonSize: 40.0,
          fillColor: FlutterFlowTheme.of(context).info,
          icon: Icon(
            Icons.arrow_back_ios_rounded,
            color: FlutterFlowTheme.of(context).primaryText,
            size: 24.0,
          ),
          onPressed: () async {
            context.safePop();
          },
        ),
        Row(
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            FlutterFlowIconButton(
              borderRadius: 30.0,
              buttonSize: 40.0,
              fillColor: FlutterFlowTheme.of(context).info,
              icon: Icon(
                Icons.favorite_border_sharp,
                color: FlutterFlowTheme.of(context).primaryText,
                size: 24.0,
              ),
              onPressed: () {
                print('IconButton pressed ...');
              },
            ),
            FlutterFlowIconButton(
              borderRadius: 30.0,
              buttonSize: 40.0,
              fillColor: FlutterFlowTheme.of(context).info,
              icon: Icon(
                Icons.message_rounded,
                color: FlutterFlowTheme.of(context).primaryText,
                size: 24.0,
              ),
              onPressed: () {
                print('IconButton pressed ...');
              },
            ),
          ].divide(SizedBox(width: 16.0)),
        ),
      ],
    );
  }
}
