function maxEvents(arrival, duration) {
    let presentations = 1
    let endTimes = []
    for (let i = 0; i < arrival.length; i++) {
        let endTime = arrival[i] + duration[i]
        endTimes.push([(i + 1), endTime])
    }
    endTimes.sort((a, b) => a[1] - b[1])
    let time = endTimes[0][1]
 
    let i = 0
    while (i < arrival.length - 1) {
        let nextCompany = endTimes[i + 1]
        let nextIndex = nextCompany[0] - 1
        if (arrival[nextIndex] >= time) {
            presentations++
            time = nextCompany[1]
        }
        i++
    }
    return presentations
