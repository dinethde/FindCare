import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_toggle_icon.dart';
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
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Stack(
          alignment: AlignmentDirectional(1.0, -1.0),
          children: [
            Align(
              alignment: AlignmentDirectional(0.0, 0.02),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(8.0),
                child: Image.network(
                  'https://picsum.photos/seed/941/600',
                  width: MediaQuery.sizeOf(context).width * 1.0,
                  height: 250.0,
                  fit: BoxFit.cover,
                ),
              ),
            ),
            ToggleIcon(
              onPressed: () async {},
              onIcon: Icon(
                Icons.favorite,
                color: Color(0xFFFF2D55),
                size: 24.0,
              ),
              offIcon: Icon(
                Icons.favorite_border,
                color: Color(0xFFFF2D55),
                size: 24.0,
              ),
            ),
          ],
        ),
        Column(
          mainAxisSize: MainAxisSize.max,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Expanded(
              child: Row(
                mainAxisSize: MainAxisSize.max,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
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
                    ].addToEnd(SizedBox(width: 25.0)),
                  ),
                ],
              ),
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
                Flexible(
                  child: Text(
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
