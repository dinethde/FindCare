import '/componets_approved/marketplace_caregiver_card/marketplace_caregiver_card_widget.dart';
import '/componets_approved/sepcified_care_tab_bar/sepcified_care_tab_bar_widget.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/testing/skill_search_bar/skill_search_bar_widget.dart';
import 'package:flutter/material.dart';
import 'marcket_place1_model.dart';
export 'marcket_place1_model.dart';

class MarcketPlace1Widget extends StatefulWidget {
  const MarcketPlace1Widget({super.key});

  @override
  State<MarcketPlace1Widget> createState() => _MarcketPlace1WidgetState();
}

class _MarcketPlace1WidgetState extends State<MarcketPlace1Widget> {
  late MarcketPlace1Model _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => MarcketPlace1Model());
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
          child: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.max,
              children: [
                Flexible(
                  child: Container(
                    width: MediaQuery.sizeOf(context).width * 1.0,
                    height: 150.0,
                    decoration: BoxDecoration(
                      color: FlutterFlowTheme.of(context).secondaryBackground,
                    ),
                    child: Column(
                      mainAxisSize: MainAxisSize.max,
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        wrapWithModel(
                          model: _model.skillSearchBarModel,
                          updateCallback: () => safeSetState(() {}),
                          child: SkillSearchBarWidget(),
                        ),
                        wrapWithModel(
                          model: _model.sepcifiedCareTabBarModel,
                          updateCallback: () => safeSetState(() {}),
                          child: SepcifiedCareTabBarWidget(),
                        ),
                      ],
                    ),
                  ),
                ),
                Flexible(
                  child: wrapWithModel(
                    model: _model.marketplaceCaregiverCardModel,
                    updateCallback: () => safeSetState(() {}),
                    child: MarketplaceCaregiverCardWidget(
                      name: 'Dineth S',
                      caregiverAgency: 'Royal Nursing Home',
                      rating: '5.0 Stars',
                      description:
                          'KKAJDNVFOASEIDGKNWOSDJBNSIKLDJVMOSLDKVNSODVKNGDSGKV',
                      priceLKR: '6000LKR',
                      image: '',
                    ),
                  ),
                ),
              ].divide(SizedBox(height: 24.0)),
            ),
          ),
        ),
      ),
    );
  }
}
