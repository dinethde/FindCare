// Automatic FlutterFlow imports
import '/backend/schema/structs/index.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'index.dart'; // Imports other custom widgets
import 'package:flutter/material.dart';
// Begin custom widget code
// DO NOT REMOVE OR MODIFY THE CODE ABOVE!

import 'dart:ui';
import 'dart:math';

class AngularGradient extends StatefulWidget {
  const AngularGradient({
    super.key,
    this.width,
    this.height,
  });

  final double? width;
  final double? height;

  @override
  State<AngularGradient> createState() => _AngularGradientState();
}

class _AngularGradientState extends State<AngularGradient> {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        // Angular Gradient Background
        CustomPaint(
          size: Size(widget.width ?? double.infinity,
              widget.height ?? double.infinity),
          painter: AngularGradientPainter(),
        ),
        // Blur Effect
        Positioned.fill(
          child: ClipRect(
            child: BackdropFilter(
              filter: ImageFilter.blur(
                sigmaX: 80.0, // Higher blur for softer blending
                sigmaY: 80.0,
              ),
              child: Container(color: const Color.fromARGB(0, 149, 149, 149)),
            ),
          ),
        ),
        // Smooth Fade into Background
        Align(
          alignment: Alignment.bottomCenter,
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
    );
  }
}

class AngularGradientPainter extends CustomPainter {
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
