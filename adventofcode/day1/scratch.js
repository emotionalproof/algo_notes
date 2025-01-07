const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');

let fileContent = '';

const splitLists = data => {
    let list1 = []
    let list2 = []
    for (let i = 0; i < data.length; i++) {
        let current = data[i]
        let split = current.split("   ");
        list1.push(split[0])
        list2.push(split[1])
    }
    return  [list1, list2]
}

const calculateDistance = (sorted1, sorted2) => {
    let totalDistance = 0
    for (let i = 0; i < sorted1.length; i++) {
        let num1 = sorted1[i]
        let num2 = sorted2[i]
        let distance = Math.abs(num1 - num2)
        totalDistance += distance
    }
    return totalDistance
}


const histHyst = () => {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        fileContent = data.split("\n");
        let locIdAoA = splitLists(fileContent)
        let list1 = locIdAoA[0]
        let list2 = locIdAoA[1]
        const sorted1 = sortList(list1)
        const sorted2 = sortList(list2)
        similarityScore(sorted1, sorted2)
        return calculateDistance(sorted1, sorted2);
    });

}

const sortList = list => {
    let sorted = false 
    while (!sorted) {
        sorted = true
        for (let i = 0; i < list.length - 1; i++) {
            let current = list[i]
            let next = list[i + 1]
            if (current > next) {
                [list[i], list[i + 1]] = [list[i + 1], list[i]]
                sorted = false
            }
        }
    }
    return list
}



const similarityScore = (list1, list2) => {
    let totalScore = 0
    let list2Frequency = frequencyCounter(list2)
    for (let i = 0; i < list1.length; i++) {
        let current = list1[i]
        let score = 0

        if (!!list2Frequency[current]){
            score = parseInt(current) * list2Frequency[current]
        }
                console.log({ current, score });
        totalScore += score
    }
    console.log(totalScore)
}


const frequencyCounter = list => {
    let frequency = {}
    for (let i = 0; i < list.length; i++) {
        let current = list[i]
        if (!!frequency[current]) {
            frequency[current]++
        } else {
            frequency[current] = 1
        }
    }
    return frequency
}


console.log(histHyst())