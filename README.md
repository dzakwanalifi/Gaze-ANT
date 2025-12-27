# Gaze-ANT: Gaze-Enhanced Attention Network Test

## Background
The Attention Network Test (ANT) was originally developed by **Jin Fan and Michael Posner** to measure three functional attentional networks: **Alerting, Orienting, and Executive Control**. More information can be found at [Fan's website](https://www.sacklerinstitute.org/cornell/assays_and_tools/ant/jin.fan/).

**Gaze-ANT** is an advanced evolution of the **CRSD-ANT** (Centre for Research on Safe Driving), a validated shorter version (approx. 10 minutes) developed in 2009 by [Luke Docksteader](http://docksteaderluke.com) and [Kris Scott](http://krssctt.com/). 

This 2025 update integrates real-time webcam eye-tracking via **WebGazer.js** to provide deeper neuro-behavioral insights, particularly for research on **Problematic Smartphone Use (PSU)** and **Digital Detox** interventions.

## Key Research Features (Gaze-Enhanced)
- **Continuous Gaze Path**: Logs eye coordinates every 100ms during each trial.
- **Fixation Stability**: Measures "Attentional Wander" via RMSD metrics.
- **Inhibition Check**: Detects if the eyes "leak" toward distractors in incongruent trials.
- **Face Stability Validation**: Automatically pauses the test if the subject's face is not detected.

## Installation & Usage
### Running the Software
Open `index.html` with a modern web browser (Firefox or Chrome recommended). 
**Note:** Due to camera security permissions, this MUST be run over `HTTPS` or `localhost`. 

### Automated Pre-population (URL Queries)
You can use URL queries to pre-populate participant fields (ID, Session, Study ID, Group, and Age). 
Format: `index.html?ID=x&sessionNumber=x&studyID=x&groupID=x&age=x`

| URL Query | Element Name |
| :--- | :--- |
| ID | ID |
| sessionID | Session # |
| studyID | Study ID |
| groupID | Group ID |
| age | Age |

## Customization
### Changing Response Keys
Default keys are **Left** and **Right** arrows. To change (e.g., to 'E' and 'I'):
1. Open `js/trial.js`.
2. In `stage4Interrupted`, change `e.keyCode` (37 for Left, 39 for Right).

### Adding New Stimulus Images
1. Use 1:1 aspect ratio PNGs (preferably 100x100px) with transparency.
2. Create two versions: `NAMELeft.png` and `NAMERight.png`.
3. Place in `images/targets/`.
4. Add reference in `config/targetTypes.js`: `var stimList = ["Arrow", "YourNewStimulus"];`

### Modifying the number of test blocks
1. Open `js/navigation.js`.
2. Change `var numberOfTestBlocks = 4;` to your desired number of blocks.

## Data Files & Variables
### Table 1: Summary Data (`Summary.csv`)
| Variable | Description | Formula / Source |
| :--- | :--- | :--- |
| **alert** | Alerting Network | NOCUE – DOUBLE |
| **orient** | Orienting Network | CENTRE – SPATIAL |
| **conflict** | Executive Control | INCONG – CONG |
| **med.all** | Overall Median RT | Correct trials (100-1500ms) |
| **pc.all** | Overall Percent Correct | Overall accuracy |

### Table 2: Raw Behavioral Data (`Data.csv`)
| Variable | Description |
| :--- | :--- |
| **block** | 0=practice; 1, 2, 3, 4=test blocks |
| **CueType** | 1=None, 2=Centre, 3=Double, 4=Spatial |
| **Correct** | 1=Correct, 0=Incorrect/Timeout |
| **RT** | Response time in milliseconds |

### Table 3: Gaze Path Data (`Gaze.csv`) - *NEW*
| Variable | Description |
| :--- | :--- |
| **Event** | fixation, targetOnset, response, or **streaming** (100ms path) |
| **GazeX/Y** | Screen coordinates in pixels |
| **Timestamp** | Precise system time for synchronization |

## Attribution & License
This work is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License**. 

Any original or modified version must attribute the original work to the following (original) authors, and include a hyperlink to their respective Web sites:
- **Luke Docksteader** - http://docksteaderluke.com
- **Kris Scott** - http://krssctt.com
- **WebGazer.js** - Brown HCI Group

*Modifications (2025): Background gaze logging, Face stability checks, and PSU research metrics.*