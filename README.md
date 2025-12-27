# CRSD-ANT + WebGazer: Gaze-Enhanced Attention Network Test

## Overview
This project is an enhanced version of the **CRSD-ANT** (Centre for Research on Safe Driving - Attention Network Test), integrated with **WebGazer.js** for real-time webcam-based eye-tracking. It is specifically designed for cognitive research, such as studying **Problematic Smartphone Use (PSU)** and the effects of **Digital Detox** on attentional control.

## Key Enhancements (The "Better" Version)
This version includes significant technical improvements over the original repo to ensure data quality in clinical and remote research settings:

1.  **Continuous Gaze Path Logger**: Unlike standard implementations that only record gaze at the moment of response, this version logs gaze coordinates every **100ms** during the trial. This allows researchers to analyze **Visual Search Efficiency** and **Attentional Capture**.
2.  **Face Stability Validation**: Automatically pauses the test if the subject's face is not detected or if the lighting is insufficient, ensuring 100% valid data collection.
3.  **Fixation Stability Metrics**: Implementation of **RMSD (Root Mean Square Deviation)** calculation to measure how well a subject can maintain focus on the central fixation point—a key indicator of impulsivity in smartphone addiction.
4.  **Asynchronous Data Handling**: Fixed race conditions in the original WebGazer integration to ensure `GazeX` and `GazeY` coordinates are never empty.
5.  **Robust Statistical Engine**: Enhanced `js/statistics.js` to handle practice blocks and empty datasets without generating `NaN` errors.

## Research Insights
Specifically for research on **Problematic Smartphone Use (PSU)**:
- **Interference Score**: Automatically calculated as the RT difference between *Incongruent* and *Congruent* trials.
- **Distraction Index**: Use the background gaze logs to identify if subjects "leak" attention toward distractors before hitting the target.
- **Attention Fatigue**: Monitor the decline in fixation stability across blocks.

## Attribution & Credits
This software is an updated and modified version. We gratefully acknowledge the original authors and libraries:

- **Original CRSD-ANT**: Developed by [Luke Docksteader](http://docksteaderluke.com) and [Kris Scott](http://krssctt.com/). Based on the Attention Network Test by Jin Fan and Michael Posner.
- **Eye-Tracking**: Powered by [WebGazer.js](https://webgazer.cs.brown.edu/) from Brown HCI Group.
- **Enhanced Version (2025)**: Updated with Background Logging, Face Stability Checks, and PSU-specific metrics.

## Installation & Usage
1.  **Environment**: Must be run over `HTTPS` or `localhost` (WebGazer requirement).
2.  **Browser**: Optimized for **Firefox** and **Chrome**.
3.  **Calibration**: Ensure 9-point calibration is completed with high accuracy before starting the test.
4.  **Data Export**: Results are saved as three CSV files:
    - `Data.csv`: Behavioral results (RT, Accuracy).
    - `Gaze.csv`: High-resolution eye-tracking path.
    - `Summary.csv`: Aggregated statistical metrics.

## License
This work is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License**. 

*Any modified version must attribute the original work to Luke Docksteader and Kris Scott.*