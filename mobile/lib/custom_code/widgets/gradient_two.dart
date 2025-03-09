// Automatic FlutterFlow imports
import '/backend/schema/structs/index.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'index.dart'; // Imports other custom widgets
import '/custom_code/actions/index.dart'; // Imports custom actions
import 'package:flutter/material.dart';
// Begin custom widget code
// DO NOT REMOVE OR MODIFY THE CODE ABOVE!

import 'dart:ui';
import 'dart:math';

class GradientTwo extends StatefulWidget {
  const GradientTwo({
    super.key,
    this.width,
    this.height,
  });

  final double? width;
  final double? height;

  @override
  State<GradientTwo> createState() => _GradientTwoState();
}

class _GradientTwoState extends State<GradientTwo> {
  final GlobalKey _painterKey = GlobalKey(); // Ensures repainting in test mode

  @override
  Widget build(BuildContext context) {
    return ClipRect(
      // Prevents overflow bleeding
      child: Stack(
        children: [
          // Angular Gradient Background (Ensuring it stays within bounds)
          Positioned.fill(
            child: CustomPaint(
              key: _painterKey, // Forces repainting
              painter: GradientTwoPainter(),
            ),
          ),

          // Lens Blur Effect (Higher Blur for Softness)
          Positioned.fill(
            child: ClipRRect(
              // Ensures blurring effect stays within boundaries
              borderRadius:
                  BorderRadius.circular(15), // Adjust based on UI need
              child: BackdropFilter(
                filter: ImageFilter.blur(
                  sigmaX: 50.0, // Higher blur for deeper lens blur effect
                  sigmaY: 50.0,
                ),
                child: Container(color: Colors.transparent),
              ),
            ),
          ),

          // Radial Blur Layer for Extra Depth
          Positioned.fill(
            child: Container(
              decoration: BoxDecoration(
                gradient: RadialGradient(
                  center: Alignment.center,
                  radius: 1.2, // Expands beyond the screen edges
                  colors: [
                    Colors.white.withOpacity(0.1), // Soft central glow
                    Colors.transparent,
                  ],
                ),
              ),
            ),
          ),

          // Smooth Fade into Background (Ensures clean separation)
          Positioned(
            bottom: 0,
            left: 0,
            right: 0,
            child: Container(
              height: 150, // Height of fade effect
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [
                    const Color.fromARGB(0, 118, 118, 118),
                    Color(0xFFFBFAF8), // Fading smoothly into background
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class GradientTwoPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = max(size.width, size.height) * 0.8;
    final rect = Rect.fromCircle(center: center, radius: radius);

    final sweepGradient = SweepGradient(
      startAngle: 0.0,
      endAngle: pi * 2, // Full 360-degree rotation
      colors: [
        Color(0xFF0584FF), // Deep Blue
        Color(0xFF75B3F0), // Light Blue
        Color(0xFF99C0E5), // Soft Blue
        Color(0xFFFBFAF8).withOpacity(0.9), // Blending into background
        Color(0xFFEBBFAD), // Soft Peach
        Color(0xFFF09975), // Light Orange
        Color(0x99FF5712), // Vibrant Orange
        Color(0xFF0584FF), // Loop back to start
      ],
      stops: [
        0.0,
        0.14,
        0.28,
        0.42,
        0.57,
        0.71,
        0.85,
        1.0
      ], // Smooth angular transitions
    );

    final paint = Paint()
      ..shader = sweepGradient.createShader(rect)
      ..style = PaintingStyle.fill;

    canvas.drawCircle(center, radius, paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
