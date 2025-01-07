const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "input.txt");

let fileContent = "";

const checkReports = (report) => {
    let reportArray = report.split(" ");
    let trend = null;
    let secondNum = parseInt(reportArray[1]);
    let firstNum = parseInt(reportArray[0]);
    let unsafeCount = 0

    if (secondNum < firstNum) {
        trend = -1;
    } else if (secondNum > firstNum) {
        trend = 1;
    } else {
        unsafeCount++
    }

    for (let j = 1; j < reportArray.length; j++) {
        let currentNum = parseInt(reportArray[j]);
        let prevNum = parseInt(reportArray[j - 1]);
        let difference = (currentNum - prevNum) * trend;
        if (difference > 3 || difference < 1) {
            unsafeCount++
        }
    }
    return unsafeCount < 2
};

const redRedNoseReports = () => {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        let totalSafe = 0;
        fileContent = data.split("\n");
        for (let i = 0; i < fileContent.length; i++) {
            if (checkReports(fileContent[i])) totalSafe++;
        }
        console.log(`Total Safe Reports: ${totalSafe}`);
    });
};

redRedNoseReports();
