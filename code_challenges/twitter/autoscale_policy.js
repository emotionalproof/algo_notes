

function finalInstances(instances, averageUtil) {
    for (let i = 0; i < averageUtil.length; i++) {
        let current = averageUtil[i]
        if (current < 25 && instances > 1) {
            instances = Math.ceil(instances/2)
            i += 10
        } else if (current > 60 && instances <=  10**8) {
            instances *= 2
            i += 10
        } 
    }
    return instances
