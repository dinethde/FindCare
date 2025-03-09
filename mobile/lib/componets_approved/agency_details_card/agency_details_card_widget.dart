import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'package:flutter/material.dart';
import 'agency_details_card_model.dart';
export 'agency_details_card_model.dart';

class AgencyDetailsCardWidget extends StatefulWidget {
  const AgencyDetailsCardWidget({
    super.key,
    String? image,
    String? findcare,
    String? noOfReviews,
    String? rating,
    String? years,
  })  : this.image = image ?? '',
        this.findcare = findcare ?? 'Find Care',
        this.noOfReviews = noOfReviews ?? '486',
        this.rating = rating ?? '5.0',
        this.years = years ?? '8';

  final String image;
  final String findcare;
  final String noOfReviews;
  final String rating;
  final String years;

  @override
  State<AgencyDetailsCardWidget> createState() =>
      _AgencyDetailsCardWidgetState();
}

class _AgencyDetailsCardWidgetState extends State<AgencyDetailsCardWidget> {
  late AgencyDetailsCardModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => AgencyDetailsCardModel());
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
      height: 240.0,
      decoration: BoxDecoration(
        color: FlutterFlowTheme.of(context).secondaryBackground,
        boxShadow: [
          BoxShadow(
            blurRadius: 2.0,
            color: Color(0x33000000),
            offset: Offset(
              0.0,
              2.0,
            ),
          )
        ],
        borderRadius: BorderRadius.circular(12.0),
      ),
      child: Padding(
        padding: EdgeInsetsDirectional.fromSTEB(0.0, 24.0, 0.0, 24.0),
        child: Row(
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Column(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Stack(
                  alignment: AlignmentDirectional(1.0, 1.0),
                  children: [
                    Container(
                      width: 105.0,
                      height: 105.0,
                      clipBehavior: Clip.antiAlias,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                      ),
                      child: Image.network(
                        'https://www.shutterstock.com/image-photo/happy-woman-arms-crossed-caregiver-260nw-2499766679.jpg',
                        fit: BoxFit.cover,
                      ),
                    ),
                    Stack(
                      alignment: AlignmentDirectional(0.0, 0.0),
                      children: [
                        Icon(
                          Icons.circle_sharp,
                          color: Color(0xFFE31C5F),
                          size: 33.0,
                        ),
                        Align(
                          alignment: AlignmentDirectional(-1.0, -1.0),
                          child: Icon(
                            Icons.verified_user,
                            color: FlutterFlowTheme.of(context)
                                .secondaryBackground,
                            size: 14.0,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
                Flexible(
                  child: Text(
                    widget.findcare,
                    textAlign: TextAlign.center,
                    style: FlutterFlowTheme.of(context).headlineMedium.override(
                          fontFamily: 'Inter Tight',
                          fontSize: 26.0,
                          letterSpacing: 1.0,
                          fontWeight: FontWeight.bold,
                        ),
                  ),
                ),
              ],
            ),
            Flexible(
              child: Column(
                mainAxisSize: MainAxisSize.max,
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Column(
                    mainAxisSize: MainAxisSize.max,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        valueOrDefault<String>(
                          widget.noOfReviews,
                          '486',
                        ),
                        style: FlutterFlowTheme.of(context).bodyMedium.override(
                              fontFamily: 'Roboto',
                              fontSize: 21.0,
                              letterSpacing: 0.0,
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                      Text(
                        'Reviews',
                        style: FlutterFlowTheme.of(context).bodyMedium.override(
                              fontFamily: 'Inter',
                              color: Color(0xFF8D8D8D),
                              fontSize: 12.0,
                              letterSpacing: 0.0,
                            ),
                      ),
                    ],
                  ),
                  Divider(
                    height: 24.0,
                    thickness: 2.0,
                    color: FlutterFlowTheme.of(context).alternate,
                  ),
                  Column(
                    mainAxisSize: MainAxisSize.max,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisSize: MainAxisSize.max,
                        children: [
                          Text(
                            valueOrDefault<String>(
                              widget.rating,
                              '5.0',
                            ),
                            style: FlutterFlowTheme.of(context)
                                .bodyMedium
                                .override(
                                  fontFamily: 'Roboto',
                                  fontSize: 21.0,
                                  letterSpacing: 0.0,
                                  fontWeight: FontWeight.bold,
                                ),
                          ),
                          Icon(
                            Icons.star_purple500_sharp,
                            color: Color(0xFFFCA827),
                            size: 15.0,
                          ),
                        ].divide(SizedBox(width: 5.0)),
                      ),
                      Text(
                        'Rating',
                        style: FlutterFlowTheme.of(context).bodyMedium.override(
                              fontFamily: 'Inter',
                              color: Color(0xFF8D8D8D),
                              fontSize: 12.0,
                              letterSpacing: 0.0,
                            ),
                      ),
                    ],
                  ),
                  Divider(
                    height: 24.0,
                    thickness: 2.0,
                    color: FlutterFlowTheme.of(context).alternate,
                  ),
                  Column(
                    mainAxisSize: MainAxisSize.max,
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        valueOrDefault<String>(
                          widget.years,
                          '9',
                        ),
                        style: FlutterFlowTheme.of(context).bodyMedium.override(
                              fontFamily: 'Roboto',
                              fontSize: 21.0,
                              letterSpacing: 0.0,
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                      Text(
                        'Years in the industry',
                        style: FlutterFlowTheme.of(context).bodyMedium.override(
                              fontFamily: 'Inter',
                              color: Color(0xFF8D8D8D),
                              fontSize: 12.0,
                              letterSpacing: 0.0,
                            ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ]
              .divide(SizedBox(width: 48.0))
              .addToStart(SizedBox(width: 24.0))
              .addToEnd(SizedBox(width: 24.0)),
        ),
      ),
    );
  }
}
