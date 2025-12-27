# Gaze-ANT: Gaze-Enhanced Attention Network Test

## Background
The Attention Network Test (ANT) was originally developed by Jin Fan and Michael Posner to measure three functional attentional networks: **Alerting, Orienting, and Executive Control**. 

**Gaze-ANT** is an advanced evolution of the **CRSD-ANT** (Centre for Research on Safe Driving), a validated shorter version programmed by [Luke Docksteader](http://docksteaderluke.com) and [Kris Scott](http://krssctt.com/). This 2025 update integrates real-time webcam eye-tracking via **WebGazer.js** to provide deeper neuro-behavioral insights, particularly for research on **Problematic Smartphone Use (PSU)** and **Digital Detox** interventions.

## Key Research Features
Unlike traditional behavioral tests, Gaze-ANT captures what happens *between* the stimulus and the response:
- **Continuous Gaze Path**: Logs eye coordinates every 100ms during each trial.
- **Fixation Stability**: Measures "Attentional Wander" via RMSD metrics during the initial fixation phase.
- **Inhibition Check**: Detects if the eyes "leak" toward distractors in incongruent trials before a manual response is made.
- **Face Stability Validation**: Automatically pauses the test if the subject's face is not detected, ensuring high data quality.

## Installation & Running
### Requirements
- **Browser**: Firefox or Chrome (optimized).
- **Environment**: Due to camera security permissions, this MUST be run over `HTTPS` or `localhost`. 

### Quick Start
1. Download or clone this repository.
2. Open `index.html` in your browser.
3. Fill in the participant details (ID, Age, etc.).
4. **Calibration**: Complete the 9-point calibration by clicking each point 5 times. Ensure good lighting and a stable head position.
5. Click **Next** to start the Practice Block (Block 0).

## Customization
### Changing Response Keys
Under default operation, the **Left** and **Right** arrow keys are used. To change these:
1. Open `js/trial.js`.
2. Locate `stage4Interrupted` function and update the `e.keyCode`.

### Modifying Test Blocks
1. Open `js/navigation.js`.
2. Change `var numberOfTestBlocks = 4;` to your desired number of blocks.

## Data Files & Output
Gaze-ANT generates three distinct CSV files for comprehensive analysis.

### Table 1: Summary Data (`Summary.csv`)
Aggregated metrics for the three attention networks.
| Variable | Description |
| :--- | :--- |
| **alert** | Alerting Network score (NOCUE – DOUBLE) |
| **orient** | Orienting Network score (CENTRE – SPATIAL) |
| **conflict** | Executive Control/Interference score (INCONG – CONG) |
| **med.all** | Median RT for all correct trials |
| **pc.all** | Overall Percent Correct |

### Table 2: Behavioral Raw Data (`Data.csv`)
Trial-by-trial behavioral performance.
| Variable | Description |
| :--- | :--- |
| **CueType** | 1=None, 2=Centre, 3=Double, 4=Spatial |
| **Congruency** | Congruent vs Incongruent |
| **RT** | Response Time in milliseconds |
| **Correct** | 1=Correct, 0=Incorrect/Timeout |

### Table 3: Gaze Path Data (`Gaze.csv`) - *NEW*
High-resolution eye-tracking logs.
| Variable | Description |
| :--- | :--- |
| **TrialIndex** | The specific trial number |
| **Event** | fixation, targetOnset, response, or **streaming** (background path) |
| **GazeX / GazeY** | Screen coordinates of the eye gaze (in pixels) |
| **Timestamp** | Precise system time for synchronization |

## Attribution & License
This project is licensed under **Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License**. 

Original authors of CRSD-ANT:
- **Luke Docksteader** - http://docksteaderluke.com
- **Kris Scott** - http://krssctt.com

Eye-tracking integration:
- **WebGazer.js** - Brown HCI Group (https://webgazer.cs.brown.edu/)

*Any modified version must attribute the original work to Luke Docksteader and Kris Scott, and include a hyperlink to their respective sites.*
