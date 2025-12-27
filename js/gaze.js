var gazeData = [];
var calibrationHits = {};
var gazeLoggerInterval = null;
var isFaceDetected = false;

function initWebGazer() {
    webgazer.setGazeListener(function(data, elapsedTime) {
        if (data == null) {
            isFaceDetected = false;
            return;
        }
        isFaceDetected = true;
    }).begin();

    webgazer.showVideoPreview(true)
        .showPredictionPoints(true)
        .applyKalmanFilter(true);

    document.getElementById('startCalibrationBtn').style.display = 'none';
    document.getElementById('calibration-points-container').style.display = 'block';
    
    setupCalibration();
}

function checkFacePresence() {
    return isFaceDetected;
}

function startGazeLogging(trialIndex) {
    if (gazeLoggerInterval) clearInterval(gazeLoggerInterval);
    gazeLoggerInterval = setInterval(async function() {
        var prediction = await webgazer.getCurrentPrediction();
        if (prediction) {
            gazeData.push({
                trialIndex: trialIndex,
                event: 'streaming',
                x: prediction.x,
                y: prediction.y,
                timestamp: new Date().getTime()
            });
        }
    }, 100);
}

function stopGazeLogging() {
    clearInterval(gazeLoggerInterval);
    gazeLoggerInterval = null;
}

function setupCalibration() {
    var points = document.getElementsByClassName('calibration-point');
    for (var i = 0; i < points.length; i++) {
        var id = points[i].id;
        calibrationHits[id] = 0;
        points[i].onclick = function(e) {
            var id = e.target.id;
            webgazer.recordScreenPosition(e.clientX, e.clientY, 'click');
            calibrationHits[id]++;
            if (calibrationHits[id] >= 5) {
                e.target.style.backgroundColor = 'yellow';
            }
            checkCalibrationDone();
        };
    }
}

function checkCalibrationDone() {
    var done = true;
    for (var id in calibrationHits) {
        if (calibrationHits[id] < 5) {
            done = false;
            break;
        }
    }
    if (done) {
        document.getElementById('finishCalibrationBtn').style.display = 'block';
        alert("Calibration complete! Click Next to continue.");
    }
}

function finishCalibration() {
    webgazer.showVideoPreview(false).showPredictionPoints(false);
    pushView('instructionPage1');
}

async function recordGaze(trialIndex, eventName) {
    var prediction = await webgazer.getCurrentPrediction();
    if (prediction) {
        gazeData.push({
            trialIndex: trialIndex,
            event: eventName,
            x: prediction.x,
            y: prediction.y,
            timestamp: new Date().getTime()
        });
    }
}

function generateGazeCSV() {
    var csv = "TrialIndex,Event,GazeX,GazeY,Timestamp\r\n";
    for (var i = 0; i < gazeData.length; i++) {
        var row = [
            gazeData[i].trialIndex,
            gazeData[i].event,
            gazeData[i].x.toFixed(2),
            gazeData[i].y.toFixed(2),
            gazeData[i].timestamp
        ];
        csv += row.join(",") + "\r\n";
    }
    return csv;
}

function stopWebGazer() {
    stopGazeLogging();
    webgazer.end();
}
