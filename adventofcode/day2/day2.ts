import fs from "fs";
import path from "path";

const filePath: string = path.join(__dirname, "input.txt");

let fileContent: string[] = [];

const checkReports = (report: string): boolean => {
    let reportArray: string[] = report.split(" ");
    let trend: number | null = null;
    let secondNum: number = parseInt(reportArray[1]);
    let firstNum: number = parseInt(reportArray[0]);

    if (secondNum < firstNum) {
        trend = -1;
    } else if (secondNum > firstNum) {
        trend = 1;
    } else {
        return false;
    }

    for (let j = 1; j < reportArray.length; j++) {
        let currentNum: number = parseInt(reportArray[j]);
        let prevNum: number = parseInt(reportArray[j - 1]);
        let difference: number = (currentNum - prevNum) * trend;
        if (difference > 3 || difference < 1) {
            return false;
        }
    }
    return true;
};

const redRedNoseReports = (): void => {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        let totalSafe: number = 0;
        fileContent = data.split("\n");
        for (let i = 0; i < fileContent.length; i++) {
            if (checkReports(fileContent[i])) totalSafe++;
        }
        console.log(`Total Safe Reports: ${totalSafe}`);
    });
};

redRedNoseReports();
