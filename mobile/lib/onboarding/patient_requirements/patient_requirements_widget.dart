import '/flutter_flow/flutter_flow_choice_chips.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import '/flutter_flow/form_field_controller.dart';
import '/onboarding/button_half/button_half_widget.dart';
import '/index.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'patient_requirements_model.dart';
export 'patient_requirements_model.dart';

class PatientRequirementsWidget extends StatefulWidget {
  const PatientRequirementsWidget({super.key});

  static String routeName = 'PatientRequirements';
  static String routePath = '/patientRequirements';

  @override
  State<PatientRequirementsWidget> createState() =>
      _PatientRequirementsWidgetState();
}

class _PatientRequirementsWidgetState extends State<PatientRequirementsWidget> {
  late PatientRequirementsModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => PatientRequirementsModel());
  }

  @override
  void dispose() {
    _model.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        FocusScope.of(context).unfocus();
        FocusManager.instance.primaryFocus?.unfocus();
      },
      child: Scaffold(
        key: scaffoldKey,
        backgroundColor: FlutterFlowTheme.of(context).primaryBackground,
        body: SafeArea(
          top: true,
          child: Padding(
            padding: EdgeInsetsDirectional.fromSTEB(20.0, 35.0, 20.0, 0.0),
            child: SingleChildScrollView(
              child: Column(
                mainAxisSize: MainAxisSize.max,
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Column(
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      Text(
                        'Patient Requirements',
                        style:
                            FlutterFlowTheme.of(context).displaySmall.override(
                                  fontFamily: 'Inter',
                                  letterSpacing: 0.0,
                                  fontWeight: FontWeight.bold,
                                ),
                      ),
                      Text(
                        'Select the specific requirements and \nservices needed for the patient’s care to match \nthem with the best caregiver.',
                        textAlign: TextAlign.center,
                        style: FlutterFlowTheme.of(context).bodyMedium.override(
                              fontFamily: 'Inter',
                              letterSpacing: 0.0,
                              fontWeight: FontWeight.w500,
                            ),
                      ),
                    ].divide(SizedBox(height: 12.0)),
                  ),
                  Column(
                    mainAxisSize: MainAxisSize.max,
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Align(
                        alignment: AlignmentDirectional(-1.0, -1.0),
                        child: Text(
                          'Step 4/5',
                          style:
                              FlutterFlowTheme.of(context).bodyMedium.override(
                                    fontFamily: 'Inter',
                                    color: Color(0xFFFF3355),
                                    fontSize: 18.0,
                                    letterSpacing: 0.0,
                                    fontWeight: FontWeight.w500,
                                  ),
                        ),
                      ),
                      FlutterFlowChoiceChips(
                        options: [
                          ChipData('Bathing and Grooming'),
                          ChipData('Dressing Assistance'),
                          ChipData('Incontinence Care'),
                          ChipData('Medication Assistance'),
                          ChipData('Meal Preparation'),
                          ChipData('Light Housekeeping'),
                          ChipData('Laundry Services'),
                          ChipData('Shopping Assistance'),
                          ChipData('Exercise Supervision'),
                          ChipData('Night-time Monitoring'),
                          ChipData('Mobility Support'),
                          ChipData('Physical Therapy Support'),
                          ChipData('Transportation to Appointments'),
                          ChipData('Mental Health Support'),
                          ChipData('Social Engagement Activities'),
                          ChipData('Post-Surgery Recovery Support')
                        ],
                        onChanged: (val) =>
                            safeSetState(() => _model.choiceChipsValues = val),
                        selectedChipStyle: ChipStyle(
                          backgroundColor: FlutterFlowTheme.of(context).primary,
                          textStyle:
                              FlutterFlowTheme.of(context).bodyMedium.override(
                                    fontFamily: 'Inter',
                                    color: FlutterFlowTheme.of(context).info,
                                    fontSize: 14.0,
                                    letterSpacing: 0.0,
                                    fontWeight: FontWeight.w600,
                                  ),
                          iconColor: Colors.white,
                          iconSize: 16.0,
                          elevation: 0.0,
                          borderRadius: BorderRadius.circular(8.0),
                        ),
                        unselectedChipStyle: ChipStyle(
                          backgroundColor:
                              FlutterFlowTheme.of(context).secondaryBackground,
                          textStyle: FlutterFlowTheme.of(context)
                              .bodyMedium
                              .override(
                                fontFamily: 'Inter',
                                color: FlutterFlowTheme.of(context).primaryText,
                                fontSize: 12.0,
                                letterSpacing: 0.0,
                                fontWeight: FontWeight.w600,
                              ),
                          iconColor: Colors.white,
                          iconSize: 16.0,
                          elevation: 0.0,
                          borderRadius: BorderRadius.circular(8.0),
                        ),
                        chipSpacing: 12.0,
                        rowSpacing: 16.0,
                        multiselect: true,
                        initialized: _model.choiceChipsValues != null,
                        alignment: WrapAlignment.spaceEvenly,
                        controller: _model.choiceChipsValueController ??=
                            FormFieldController<List<String>>(
                          [],
                        ),
                        wrapped: true,
                      ),
                      Row(
                        mainAxisSize: MainAxisSize.max,
                        children: [
                          wrapWithModel(
                            model: _model.buttonHalfModel,
                            updateCallback: () => safeSetState(() {}),
                            child: ButtonHalfWidget(
                              btnText: '+ Add notes',
                              btnColor: Color(0xFFFF3355),
                            ),
                          ),
                          Flexible(
                            child: Padding(
                              padding: EdgeInsetsDirectional.fromSTEB(
                                  0.0, 0.0, 38.0, 0.0),
                              child: Text(
                                'Write perfect more requirement customer needs or perfect description of the caregiver looking for...',
                                style: FlutterFlowTheme.of(context)
                                    .bodyMedium
                                    .override(
                                      fontFamily: 'Inter',
                                      letterSpacing: 0.0,
                                    ),
                              ),
                            ),
                          ),
                        ].divide(SizedBox(width: 12.0)),
                      ),
                    ].divide(SizedBox(height: 24.0)),
                  ),
                  FFButtonWidget(
                    onPressed: () async {
                      context.pushNamed(PersonalizationWidget.routeName);
                    },
                    text: 'Continue',
                    options: FFButtonOptions(
                      width: MediaQuery.sizeOf(context).width * 1.0,
                      height: 47.0,
                      padding:
                          EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
                      iconPadding:
                          EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
                      color: FlutterFlowTheme.of(context).primary,
                      textStyle: GoogleFonts.getFont(
                        'Inter Tight',
                        color: Colors.white,
                        fontWeight: FontWeight.w600,
                        fontSize: 16.0,
                      ),
                      borderRadius: BorderRadius.circular(6.0),
                    ),
                    showLoadingIndicator: false,
                  ),
                ]
                    .divide(SizedBox(height: 43.0))
                    .addToStart(SizedBox(height: 10.0))
                    .addToEnd(SizedBox(height: 10.0)),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
