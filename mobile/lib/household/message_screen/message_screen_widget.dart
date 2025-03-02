import '/flutter_flow/flutter_flow_util.dart';
import '/household/icon_text_box/icon_text_box_widget.dart';
import '/household/nav_bar_house/nav_bar_house_widget.dart';
import '/household/very_small_button/very_small_button_widget.dart';
import '/onboarding/round_button/round_button_widget.dart';
import 'package:ff_theme/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'message_screen_model.dart';
export 'message_screen_model.dart';

class MessageScreenWidget extends StatefulWidget {
  const MessageScreenWidget({super.key});

  static String routeName = 'MessageScreen';
  static String routePath = '/messageScreen';

  @override
  State<MessageScreenWidget> createState() => _MessageScreenWidgetState();
}

class _MessageScreenWidgetState extends State<MessageScreenWidget> {
  late MessageScreenModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => MessageScreenModel());
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
            padding: EdgeInsetsDirectional.fromSTEB(0.0, 25.0, 0.0, 0.0),
            child: Stack(
              children: [
                Padding(
                  padding: EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 20.0, 0.0),
                  child: SingleChildScrollView(
                    child: Column(
                      mainAxisSize: MainAxisSize.max,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Column(
                          mainAxisSize: MainAxisSize.max,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'Messages',
                              style: FlutterFlowTheme.of(context)
                                  .displayMedium
                                  .override(
                                    fontFamily: 'Inter',
                                    letterSpacing: 0.0,
                                  ),
                            ),
                            wrapWithModel(
                              model: _model.iconTextBoxModel,
                              updateCallback: () => safeSetState(() {}),
                              child: IconTextBoxWidget(
                                icon: Icon(
                                  Icons.search_sharp,
                                  color: Color(0xFFA6A6A6),
                                  size: 18.0,
                                ),
                                lable: 'Search',
                              ),
                            ),
                            Row(
                              mainAxisSize: MainAxisSize.max,
                              children: [
                                wrapWithModel(
                                  model: _model.verySmallButtonModel,
                                  updateCallback: () => safeSetState(() {}),
                                  child: VerySmallButtonWidget(
                                    lable: 'All',
                                    color: FlutterFlowTheme.of(context).primary,
                                    textColor: FlutterFlowTheme.of(context)
                                        .secondaryBackground,
                                  ),
                                ),
                                wrapWithModel(
                                  model: _model.roundButtonModel1,
                                  updateCallback: () => safeSetState(() {}),
                                  child: RoundButtonWidget(
                                    lable: 'Complaints',
                                    fillColor: Color(0xFFEBEBEB),
                                    textColor: Color(0xFF262626),
                                  ),
                                ),
                                wrapWithModel(
                                  model: _model.roundButtonModel2,
                                  updateCallback: () => safeSetState(() {}),
                                  child: RoundButtonWidget(
                                    lable: 'Feedback',
                                    fillColor: Color(0xFFEBEBEB),
                                    textColor: Color(0xFF262626),
                                  ),
                                ),
                              ].divide(SizedBox(width: 10.0)),
                            ),
                          ].divide(SizedBox(height: 12.0)),
                        ),
                        Column(
                          mainAxisSize: MainAxisSize.max,
                          children: [
                            Row(
                              mainAxisSize: MainAxisSize.max,
                              children: [
                                Container(
                                  width: 60.0,
                                  height: 60.0,
                                  clipBehavior: Clip.antiAlias,
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                  ),
                                  child: Image.network(
                                    'https://picsum.photos/seed/698/600',
                                    fit: BoxFit.cover,
                                  ),
                                ),
                                Flexible(
                                  child: Column(
                                    mainAxisSize: MainAxisSize.max,
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      Row(
                                        mainAxisSize: MainAxisSize.max,
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceBetween,
                                        children: [
                                          Text(
                                            'Dineth De Silva',
                                            style: FlutterFlowTheme.of(context)
                                                .bodyMedium
                                                .override(
                                                  fontFamily: 'Inter',
                                                  fontSize: 16.0,
                                                  letterSpacing: 0.0,
                                                  fontWeight: FontWeight.w500,
                                                ),
                                          ),
                                          Text(
                                            '16:54',
                                            style: FlutterFlowTheme.of(context)
                                                .bodyMedium
                                                .override(
                                                  fontFamily: 'Inter',
                                                  color: Color(0xFF8D8D8D),
                                                  fontSize: 10.0,
                                                  letterSpacing: 0.0,
                                                ),
                                          ),
                                        ],
                                      ),
                                      Text(
                                        'Lorem ipsum dolor sit amet consectetur. Eu ipsum vulputate dictumst mauris amet consequat ...',
                                        style: FlutterFlowTheme.of(context)
                                            .bodyMedium
                                            .override(
                                              fontFamily: 'Inter',
                                              color: Color(0xFF8D8D8D),
                                              fontSize: 12.0,
                                              letterSpacing: 0.0,
                                              fontWeight: FontWeight.w300,
                                            ),
                                      ),
                                    ],
                                  ),
                                ),
                              ].divide(SizedBox(width: 12.0)),
                            ),
                          ],
                        ),
                        Column(
                          mainAxisSize: MainAxisSize.max,
                          children: [
                            Row(
                              mainAxisSize: MainAxisSize.max,
                              children: [
                                Container(
                                  width: 60.0,
                                  height: 60.0,
                                  clipBehavior: Clip.antiAlias,
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                  ),
                                  child: Image.network(
                                    'https://picsum.photos/seed/698/600',
                                    fit: BoxFit.cover,
                                  ),
                                ),
                                Flexible(
                                  child: Column(
                                    mainAxisSize: MainAxisSize.max,
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      Row(
                                        mainAxisSize: MainAxisSize.max,
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceBetween,
                                        children: [
                                          Text(
                                            'Feedback - Oct / 24',
                                            style: FlutterFlowTheme.of(context)
                                                .bodyMedium
                                                .override(
                                                  fontFamily: 'Inter',
                                                  fontSize: 16.0,
                                                  letterSpacing: 0.0,
                                                  fontWeight: FontWeight.w500,
                                                ),
                                          ),
                                          Text(
                                            '16:54',
                                            style: FlutterFlowTheme.of(context)
                                                .bodyMedium
                                                .override(
                                                  fontFamily: 'Inter',
                                                  color: Color(0xFF8D8D8D),
                                                  fontSize: 10.0,
                                                  letterSpacing: 0.0,
                                                ),
                                          ),
                                        ],
                                      ),
                                      Text(
                                        'Lorem ipsum dolor sit amet consectetur. Eu ipsum vulputate dictumst mauris amet consequat ...',
                                        style: FlutterFlowTheme.of(context)
                                            .bodyMedium
                                            .override(
                                              fontFamily: 'Inter',
                                              color: Color(0xFF8D8D8D),
                                              fontSize: 12.0,
                                              letterSpacing: 0.0,
                                              fontWeight: FontWeight.w300,
                                            ),
                                      ),
                                    ],
                                  ),
                                ),
                              ].divide(SizedBox(width: 12.0)),
                            ),
                          ],
                        ),
                        Column(
                          mainAxisSize: MainAxisSize.max,
                          children: [
                            Row(
                              mainAxisSize: MainAxisSize.max,
                              children: [
                                Container(
                                  width: 60.0,
                                  height: 60.0,
                                  clipBehavior: Clip.antiAlias,
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                  ),
                                  child: Image.network(
                                    'https://picsum.photos/seed/698/600',
                                    fit: BoxFit.cover,
                                  ),
                                ),
                                Flexible(
                                  child: Column(
                                    mainAxisSize: MainAxisSize.max,
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      Row(
                                        mainAxisSize: MainAxisSize.max,
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceBetween,
                                        children: [
                                          Text(
                                            'Complaints - Dineth De Silva',
                                            style: FlutterFlowTheme.of(context)
                                                .bodyMedium
                                                .override(
                                                  fontFamily: 'Inter',
                                                  fontSize: 16.0,
                                                  letterSpacing: 0.0,
                                                  fontWeight: FontWeight.w500,
                                                ),
                                          ),
                                          Text(
                                            '16:54',
                                            style: FlutterFlowTheme.of(context)
                                                .bodyMedium
                                                .override(
                                                  fontFamily: 'Inter',
                                                  color: Color(0xFF8D8D8D),
                                                  fontSize: 10.0,
                                                  letterSpacing: 0.0,
                                                ),
                                          ),
                                        ],
                                      ),
                                      Text(
                                        'Lorem ipsum dolor sit amet consectetur. Eu ipsum vulputate dictumst mauris amet consequat ...',
                                        style: FlutterFlowTheme.of(context)
                                            .bodyMedium
                                            .override(
                                              fontFamily: 'Inter',
                                              color: Color(0xFF8D8D8D),
                                              fontSize: 12.0,
                                              letterSpacing: 0.0,
                                              fontWeight: FontWeight.w300,
                                            ),
                                      ),
                                    ],
                                  ),
                                ),
                              ].divide(SizedBox(width: 12.0)),
                            ),
                          ],
                        ),
                      ].divide(SizedBox(height: 32.0)),
                    ),
                  ),
                ),
                wrapWithModel(
                  model: _model.navBarHouseModel,
                  updateCallback: () => safeSetState(() {}),
                  child: NavBarHouseWidget(
                    page: 4,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
