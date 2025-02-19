import '/flutter_flow/flutter_flow_icon_button.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'package:flutter/material.dart';
import 'marketplace_caregiver_card_model.dart';
export 'marketplace_caregiver_card_model.dart';

class MarketplaceCaregiverCardWidget extends StatefulWidget {
  const MarketplaceCaregiverCardWidget({
    super.key,
    required this.image,
    required this.name,
    required this.rating,
    required this.agency,
    String? description,
    required this.price,
  }) : this.description = description ??
            'Specializing in providing attentive and personalized elderly elderly care with professionalism and warmth.';

  final String? image;
  final String? name;
  final String? rating;
  final String? agency;
  final String description;
  final String? price;

  @override
  State<MarketplaceCaregiverCardWidget> createState() =>
      _MarketplaceCaregiverCardWidgetState();
}

class _MarketplaceCaregiverCardWidgetState
    extends State<MarketplaceCaregiverCardWidget> {
  late MarketplaceCaregiverCardModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => MarketplaceCaregiverCardModel());
  }

  @override
  void dispose() {
    _model.maybeDispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.max,
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Stack(
          alignment: AlignmentDirectional(1.0, -1.0),
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(8.0),
              child: Image.network(
                widget.image!,
                width: MediaQuery.sizeOf(context).width * 1.0,
                height: 250.0,
                fit: BoxFit.cover,
              ),
            ),
            FlutterFlowIconButton(
              borderRadius: 8.0,
              buttonSize: 40.0,
              icon: Icon(
                Icons.favorite_border_rounded,
                color: FlutterFlowTheme.of(context).error,
                size: 24.0,
              ),
              onPressed: () {
                print('IconButton pressed ...');
              },
            ),
          ],
        ),
        Column(
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Text(
                  valueOrDefault<String>(
                    widget.name,
                    'Kapila Perera',
                  ),
                  style: FlutterFlowTheme.of(context).bodyMedium.override(
                        fontFamily: 'Inter',
                        fontSize: 20.0,
                        letterSpacing: 0.0,
                        fontWeight: FontWeight.w500,
                      ),
                ),
                Row(
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    Icon(
                      Icons.star_sharp,
                      color: FlutterFlowTheme.of(context).primaryText,
                      size: 15.0,
                    ),
                    Text(
                      valueOrDefault<String>(
                        widget.rating,
                        '4.0 Stars',
                      ),
                      style: FlutterFlowTheme.of(context).bodyMedium.override(
                            fontFamily: 'Inter',
                            letterSpacing: 0.0,
                            fontWeight: FontWeight.w500,
                          ),
                    ),
                  ],
                ),
              ],
            ),
            Column(
              mainAxisSize: MainAxisSize.max,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  valueOrDefault<String>(
                    widget.agency,
                    'Royal Nursing Home',
                  ),
                  style: FlutterFlowTheme.of(context).bodyMedium.override(
                        fontFamily: 'Inter',
                        color: Color(0xFF515151),
                        fontSize: 12.0,
                        letterSpacing: 0.0,
                        fontWeight: FontWeight.w500,
                      ),
                ),
                Text(
                  valueOrDefault<String>(
                    widget.description,
                    'Specializing in providing attentive and personalized elderly elderly care with professionalism and warmth.',
                  ),
                  style: FlutterFlowTheme.of(context).bodyMedium.override(
                        fontFamily: 'Inter',
                        color: Color(0xFF515151),
                        letterSpacing: 0.0,
                        fontWeight: FontWeight.w300,
                      ),
                ),
              ].divide(SizedBox(height: 6.0)),
            ),
          ].divide(SizedBox(height: 7.0)),
        ),
        Text(
          valueOrDefault<String>(
            widget.price,
            '5000LKR hr',
          ),
          style: FlutterFlowTheme.of(context).bodyMedium.override(
                fontFamily: 'Inter',
                fontSize: 20.0,
                letterSpacing: 0.0,
                fontWeight: FontWeight.w500,
              ),
        ),
      ].divide(SizedBox(height: 15.0)),
    );
  }
}
