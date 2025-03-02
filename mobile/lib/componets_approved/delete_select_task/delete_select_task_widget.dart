import '/flutter_flow/flutter_flow_radio_button.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/form_field_controller.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'delete_select_task_model.dart';
export 'delete_select_task_model.dart';

class DeleteSelectTaskWidget extends StatefulWidget {
  const DeleteSelectTaskWidget({
    super.key,
    String? text,
  }) : this.text = text ?? 'Inform Agency';

  final String text;

  @override
  State<DeleteSelectTaskWidget> createState() => _DeleteSelectTaskWidgetState();
}

class _DeleteSelectTaskWidgetState extends State<DeleteSelectTaskWidget> {
  late DeleteSelectTaskModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => DeleteSelectTaskModel());
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
      children: [
        Icon(
          Icons.horizontal_rule_sharp,
          color: Color(0xFFFB3F4A),
          size: 24.0,
        ),
        Flexible(
          child: Padding(
            padding: EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 20.0, 0.0),
            child: Container(
              width: MediaQuery.sizeOf(context).width * 1.0,
              height: 39.0,
              decoration: BoxDecoration(
                color: FlutterFlowTheme.of(context).secondaryBackground,
                borderRadius: BorderRadius.circular(6.0),
              ),
              child: Row(
                mainAxisSize: MainAxisSize.max,
                children: [
                  Align(
                    alignment: AlignmentDirectional(-1.0, 0.0),
                    child: FlutterFlowRadioButton(
                      options: [''].toList(),
                      onChanged: (val) => safeSetState(() {}),
                      controller: _model.radioButtonValueController ??=
                          FormFieldController<String>(null),
                      optionHeight: 32.0,
                      textStyle:
                          FlutterFlowTheme.of(context).labelMedium.override(
                                fontFamily: 'Inter',
                                letterSpacing: 0.0,
                              ),
                      selectedTextStyle:
                          FlutterFlowTheme.of(context).bodyMedium.override(
                                fontFamily: 'Inter',
                                letterSpacing: 0.0,
                              ),
                      buttonPosition: RadioButtonPosition.left,
                      direction: Axis.vertical,
                      radioButtonColor: Color(0xFFFB3F4A),
                      inactiveRadioButtonColor:
                          FlutterFlowTheme.of(context).secondaryText,
                      toggleable: false,
                      horizontalAlignment: WrapAlignment.start,
                      verticalAlignment: WrapCrossAlignment.start,
                    ),
                  ),
                  Flexible(
                    child: Text(
                      valueOrDefault<String>(
                        widget.text,
                        'Inform Agency',
                      ),
                      style: FlutterFlowTheme.of(context).bodyMedium.override(
                            fontFamily: 'Roboto',
                            letterSpacing: 0.0,
                            fontWeight: FontWeight.normal,
                          ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ].divide(SizedBox(width: 10.0)).addToStart(SizedBox(width: 20.0)),
    );
  }
}
